/**
 * Created by zhengyi.fu on 2018/8/31.
 */
import Vue from 'vue'
import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()

fly.config.timeout = 20000;
// //设置请求基地址
var projecConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
fly.config.baseURL = projecConfig.apiurl
// console.log(projecConfig)

import CryptoJS from 'crypto-js';
import md5 from 'js-md5';
import Index from './index';

var version = '1.1.1';
var device = 'xiaochengxu';
var cloud_id = '';
var sign_key = '';
var token = '';
var encrypt = 2; // no
var client = 'xiaochengxu';
var new_key;
var key;

// 添加请求拦截器
fly.interceptors.request.use(
    (request) => {
        //给所有请求添加自定义header
        request.headers["X-Tag"] = "flyio";
        
        if (JSON.stringify(projecConfig) != '{}') {
            cloud_id = projecConfig.appid
            sign_key = projecConfig.signkey
        } else {
            wx.showToast({
                title: '获取签名出错',
                icon: 'none',
                duration: 2000
            })
            return;
        }
        
        var value = wx.getStorageSync('token');
        if (value) {
            token = value.token;
        }
        
        if (token) {
            request.headers.token = token;
        }
        var time = Date.parse(new Date()) / 1000;
        var custom = Math.random().toString(36).substr(2);
        var c = request.url;
        if (c.search("&") != -1) {
            var url = c.substring(0, c.indexOf("&"));
        } else {
            var url = c;
        }
        var str = cloud_id + sign_key + url.toLowerCase() + time + device + version + token + custom;
        var sign = md5(str);
        new_key = md5(sign);
        key = CryptoJS.enc.Hex.parse(new_key);
        request.headers.sign = sign;
        request.headers.cloudid = cloud_id;
        request.headers.time = time;
        request.headers.version = version;
        request.headers.device = device;
        request.headers.custom = custom;
        request.headers.encrypt = encrypt;
        request.headers.client = client;

        //打印出请求体
        // console.log(request.body)
        //终止请求
        //ar err=new Error("xxx")
        //err.request=request
        //return Promise.reject(new Error(""))

        //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
        return request;
    }
)

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        var ret = response.data;
        var iv = CryptoJS.enc.Hex.parse(md5("key_" + ret.time));
        var option = {
            iv: iv,
            padding: CryptoJS.pad.ZeroPadding
        };
        if (ret.encrypt == 1 && ret.data) {
            key = CryptoJS.enc.Hex.parse(md5(ret.sign));
            var decrypted = CryptoJS.AES.decrypt(ret.data, key, option);
            var string = decrypted.toString(CryptoJS.enc.Utf8);
            try {
                ret.data = JSON.parse(string);
            } catch (e) {
                ret.data = string;
            }
        }

        const currentUrl = Index.getCurrentPageUrl(); //当前页面url
        //只将请求结果的data字段返回
        if (ret.code === 401) {
            wx.removeStorageSync("token");
            console.log('未登录')
            // if (currentUrl !== 'pages/user/main') {
                // wx.navigateTo({
                //     url: "/pages/userfiles/newlogin/main"
                // })
            // }
        }
        return response.data;
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)

Vue.prototype.$http = fly

export default fly
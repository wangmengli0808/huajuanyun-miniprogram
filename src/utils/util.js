// 封装
import Http from './http'
// export function get(url, data) {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: config.host + url,
//             data: data,
//             success(res) {
//                 if (res.data.code == 1) {
//                     resolve(res.data.data)
//                 } else {
//                     reject(res.data)
//                 }
//             },
//             fail(ret) {
//                 reject(ret)
//             }
//         });
//     })
// }

// 获取个人信息
export function getUser() {
    return new Promise((resolve, reject) => {
        Http.POST({
            url: Http.API_URL.UserIDEX,
        }).then((res) => {
            if (res.code == 1) {
                resolve(res.data)
            } else {
                wx.showToast({
                    title: res.msg,
                    icon: "none",
                    duration: 1000
                })
            }
        })
    })
}


// 获取小程序相关信息
export function getApp() {
    Http.POST({
        url: Http.API_URL.MINIINFO,
    }).then((res) => {
        if (res.code == 1) {
            wx.setStorage({
                key: 'app',
                data: res.data
            })
        } else {
            wx.showToast({
                title: res.msg,
                icon: 'none',
                duration: 2000
            })
        }
    })
}

// 手机号绑定
export function getBindMobile(code, info) {
    let phpUserinfo = JSON.stringify(wx.getStorageSync("phpUserinfo"));
    Http.POST({
        url: Http.API_URL.WXBINGDMOBILE,
        data: {
            code: code,
            userinfo: phpUserinfo,
            encryptedData: info.encryptedData,
            iv: info.iv
        }
    }).then((res) => {
        if (res.code === 1) {
            wx.setStorage({
                key: "token",
                data: res.data.userinfo,
                success: function() {
                    wx.setStorage({
                        key: "isBindmobile",
                        data: 1,
                        success: function() {
                            wx.showToast({
                                title: "绑定成功",
                                icon: "none",
                                duration: 1000
                            });
                            setTimeout(function() {
                                wx.navigateBack();
                            }, 1000);
                        }
                    });
                }
            });
        } else {
            wx.showToast({
                title: res.msg,
                icon: 'none',
                duration: 2000
            })
        }
    })
}

// 获取京东信息
export function getJdList(opt_id, page) {
    return new Promise((resolve, reject) => {
        Http.POST({
            url: Http.API_URL.JdList,
            data: {
                sort_type: 0,
                opt_id: opt_id,
                page: page
            }
        }).then((res) => {
            if (res.code === 1) {
                resolve(res.data)
            } else {
                reject(res)
            }
        })
    })
}

export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'none',
        duration: 2000
    })
}

// 色值转rgba格式
export function hexToRgba(hex, al) {
    var hexColor = /^#/.test(hex) ? hex.slice(1) : hex,
        alp = hex === "transparent" ? 0 : al,
        r,
        g,
        b;
    hexColor = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(hexColor)
        ? hexColor
        : "fffff";
    if (hexColor.length === 3) {
        hexColor = hexColor.replace(/(\w)(\w)(\w)/gi, "$1$1$2$2$3$3");
    }
    r = hexColor.slice(0, 2);
    g = hexColor.slice(2, 4);
    b = hexColor.slice(4, 6);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    return {
        hex: "#" + hexColor,
        rgba: "rgba(" + r + ", " + g + ", " + b + ", " + alp + ")"
    };
}
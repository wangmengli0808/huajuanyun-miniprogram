<template>
    <div class="bind-mobile text-center">
        <nav-bar :navTitle="'会员手机号绑定'" :backShow="true"></nav-bar>
        <div class="content">
            <div class="box">
                <div class="item">
                    <div class="avatar">
                        <img class="img-info" :src="userInfo.avatarUrl" alt>
                    </div>
                    <p class="name font30">{{userInfo.nickName}}</p>
                </div>
                <div class="item">
                    <div class="avatar mid">
                        <img class="img-info" src="../../../assets/img/icon_lianjie.png" alt>
                    </div>
                </div>
                <div class="item">
                    <div class="avatar">
                        <img class="img-info" :src="appcfg.app_logo_image" alt>
                    </div>
                    <p class="name font30">{{appcfg.app_name}}</p>
                </div>
            </div>
            <button
                class="btn-login"
                open-type="getPhoneNumber"
                @getphonenumber="getPhoneNumber"
                @tap="showLoad"
            >一键绑定手机号码</button>
            <p class="txt font30">绑定手机号码后才可以查券赚佣金哦</p>
            <p class="tip font30">
                登录即代表您同意我们的
                <span class="text-red" @click="seeRules">用戶协议</span>
            </p>
        </div>
    </div>
</template>

<script>
import NavBar from "../../../components/Navbar";
import { getBindMobile } from "../../../utils/util";
export default {
    components: {
        NavBar
    },
    data() {
        return {
            userInfo: {
                nickName: "王梦丽",
                avatarUrl:
                    "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJBs6vbticTtATeaEBkogLvGAbDRM1jQ8vdn9CmhLWTZ9Jj8KXLLeDiawjNP4ekibKPjGYFDRuqQOcQQ/132"
            },
            appcfg: {
                app_desc: "为你挖掘全网优惠券",
                app_name: "挖券儿",
                app_logo_image:
                    "https://waquan.oss-cn-hangzhou.aliyuncs.com/oss/uploads/201811/26/40b420e376ba63a98c538669fa4b1640.png"
            }
        };
    },
    created() {},
    methods: {
        getPhoneNumber: function(e) {
            var that = this;
            if (e.mp.detail.encryptedData) {
                wx.login({
                    success(res) {
                        getBindMobile(res.code, e.mp.detail)
                    }
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.bind-mobile {
    width: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.box {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80rpx 0;
    margin-top: 40rpx;
}
.avatar {
    width: 130rpx;
    height: 130rpx;
    border-radius: 50%;
    overflow: hidden;
}
.mid {
    width: 80rpx;
    height: 80rpx;
    margin: 0 80rpx;
    border-radius: 0;
}
.name {
    margin-top: 20rpx;
}
.txt,
.tip {
    color: #999;
}
.tip {
    position: fixed;
    bottom: 60rpx;
    left: 0;
    right: 0;
}
.btn-login {
    width: 85%;
    box-shadow: none;
    color: #fff;
    background: -webkit-linear-gradient(
        to right,
        #ff7228,
        #f71509
    ); /* Safari 5.1 to 6.0 */
    background: -o-linear-gradient(
        to right,
        #ff7228,
        #f71509
    ); /* Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(
        to right,
        #ff7228,
        #f71509
    ); /* Firefox 3.6 to 15 */
    background: linear-gradient(to right, #ff7228, #f71509);
    font-size: 32rpx;
    padding: 8rpx;
    margin: 0 auto 60rpx;
    -webkit-border-radius: 60rpx;
    -moz-border-radius: 60rpx;
    border-radius: 60rpx;
}
</style>

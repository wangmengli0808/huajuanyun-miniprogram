<template>
    <div class="login">
        <div class="modal-dialog text-center">
            <div style="position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 998;">
                <img src="../../../assets/img/miniprogram_login_bg.jpg" style="width: 100%;height: 100%" alt>
            </div>
            <div class="modal-mask" style="background: rgba(0, 0, 0, .85)"></div>
            <div class="modal-content">
                <div class="close" @click="closeDialog('close')">
                    <text class="close-btn">×</text>
                </div>
                <div class="modal-header">
                    <img src="../../../assets/img/icon_authorization.png" alt>
                    <p>{{appcfg.app_desc}}</p>
                </div>
                <div class="content">
                    <h3 class="content-title">优惠券数量有限</h3>
                    <p>
                        <span class="text-red">授权登录</span>后才能抢券
                    </p>
                    <button class="btn-login" open-type="getUserInfo" @getuserinfo="onGetUserInfo" @tap="showLoad">授权登录</button>
                    <p class="txt font24 text-gray999">
                        同意授权后，也同时同意
                        <span class="text-red" @click="seeRules">《{{appcfg.app_name}}用户协议》</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserInfo } from "../../../utils/util";
export default {
    data() {
        return {
            appcfg: {
                "app_desc": "为你挖掘全网优惠券",
                "app_name": "挖券儿",
            }
        }
    },
    created() {},
    methods: {
        closeDialog() {

        },
        onGetUserInfo(e) {
            if (e.mp.detail.userInfo) {
                getUserInfo();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.modal {
    &-dialog {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 999;
        font-size: 30rpx;
    }
    &-mask {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 999;
    }
    &-header {
        min-height: 170rpx;
        color: #fff;
        background: -webkit-linear-gradient(to right, #ff7228, #f71509); /* Safari 5.1 to 6.0 */
        background: -o-linear-gradient(to right, #ff7228, #f71509); /* Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(to right, #ff7228, #f71509); /* Firefox 3.6 to 15 */
        background: linear-gradient(to right, #ff7228, #f71509);
        padding: 30rpx;
        img {
            width: 110rpx;
            height: 110rpx;
            margin-bottom: 10rpx;
        }
    }
    &-content {
        -webkit-border-radius: 16rpx;
        -moz-border-radius: 16rpx;
        border-radius: 16rpx;
        overflow: hidden;
        position: fixed;
        top: 50%;
        right: 12%;
        left: 12%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        z-index: 999;
        .close {
            width: 60rpx;
            height: 60rpx;
            line-height: 60rpx;
            position: absolute;
            top: 10rpx;
            right: 24rpx;
            color: #ededed;
            font-size: 50rpx;
        }
        .content {
            background: #fff;
            line-height: 50rpx;
            padding: 30rpx 0;
        }
        .btn-login {
            width: 80%;
            box-shadow: none;
            color: #fff;
            background: -webkit-linear-gradient(to right, #ff7228, #f71509); /* Safari 5.1 to 6.0 */
            background: -o-linear-gradient(to right, #ff7228, #f71509); /* Opera 11.1 to 12.0 */
            background: -moz-linear-gradient(to right, #ff7228, #f71509); /* Firefox 3.6 to 15 */
            background: linear-gradient(to right, #ff7228, #f71509);
            font-size: 32rpx;
            padding: 8rpx;
            margin: 35rpx auto 20rpx;
            -webkit-border-radius: 60rpx;
            -moz-border-radius: 60rpx;
            border-radius: 60rpx;
        }
    }
}
</style>

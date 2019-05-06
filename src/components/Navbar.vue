<template>
    <div :style="'height: ' +  (type === 'detail' ? 0 : (menuData.top + navHeight)) + 'px;'">
        <div 
            class="index-header fixed" 
            v-if="type === 'detail'"
            :style="'padding-top:' + menuData.top + 'px;'"
        >
            <div class="header" :style="'height: ' + navHeight + 'px;'">
                <div class="header-box" style="align-items:center;" :style="'height: ' + menuData.height + 'px;'">
                    <div class="detail-back font20" @click="onBack">
                        <i class="fa fa-angle-left"></i>
                        <span>返回</span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="index-header"
            v-else
            :class="{fixed: type !== 'custom'}"
            :style="'padding-top:' + menuData.top + 'px;background: ' + (hasColor ? 'transparent' : 'linear-gradient(to right, #dd2476, #ff512f)')"
        >
            <div class="header" :style="'height: ' + navHeight + 'px;'">
                <div class="header-box" :style="'height: ' + menuData.height + 'px;'">
                    <div
                        class="notice"
                        v-if="type === 'custom'"
                        :style="'width: ' + menuData.height + 'px'"
                    >
                        <i class="fa fa-bell-o icon-bell"></i>
                    </div>
                    <div class="search" v-if="type === 'custom'">
                        <div class="search-box">
                            <i class="fa fa-search"></i>
                            <input
                                type="text"
                                placeholder-style="color: #f7f7f7"
                                class="search-input"
                                placeholder="搜啥都有优惠券"
                            >
                        </div>
                    </div>
                    <div class="header-info" v-else>
                        <i class="fa fa-angle-left icon-back" @click="onBack" v-if="backShow"></i>
                        <span>{{navTitle}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String
        },
        navTitle: {
            type: String
        },
        backShow: {
            type: Boolean
        },
        hasColor: {
            type: Boolean
        }
    },
    data() {
        return {
            navHeight: 48,
            menuData: {}
        };
    },
    mounted() {
        this.navHeight = wx.getStorageSync("navHeight");
        // 获取菜单按钮（右上角胶囊按钮）的布局位置信息
        this.menuData = wx.getStorageSync("menuBounding");
    },
    methods: {
        onBack() {
            wx.navigateBack();
        }
    }
};
</script>

<style lang='scss' scoped>
.index {
    &-header {
        color: #f3f3f3;
        &.fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 99;
        }
        .detail-back {
            height: 50rpx;
            display: flex;
            align-items: center;
            background: rgba(0, 0, 0, .2);
            border-radius: 30rpx;
            padding: 0 30rpx 0 20rpx;
            .fa {
                font-size: 44rpx;
                margin-right: 20rpx;
            }
        }
        .header {
            padding: 0 30rpx;
            &-box {
                display: flex;
            }
            &-info {
                height: 100%;
                flex: 1;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            .icon-back {
                font-size: 55rpx;
                position: absolute;
                top: 50%;
                left: 0;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }
        .notice {
            height: 100%;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 50%;
            text-align: center;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .search {
            padding: 0 30rpx 0 30rpx;
            &-box {
                height: 100%;
                position: relative;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 60rpx;
            }
        }
        .fa-search {
            position: absolute;
            top: 50%;
            left: 24rpx;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        .search-input {
            height: 100%;
            color: #f3f3f3;
            font-size: 28rpx;
            padding-left: 70rpx;
        }
    }
}
</style>

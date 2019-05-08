<template>
    <div class="bg-red" :style="'height: ' +  (type === 'detail' ? 0 : (menuData.top + navHeight)) + 'px;'">
        <div
            class="index-header"
            :class="{fixed: type !== 'custom'}"
            :style="'padding-top:' + menuData.top + 'px;background: ' + (hasColor ? 'transparent' : 'linear-gradient(to right, rgba(221, 36, 118, ' + (type === 'detail' ? opacity : 1) + '), rgba(255, 81, 47, ' + (type === 'detail' ? opacity : 1) + '))')"
        >
            <div class="header" :style="'height: ' + navHeight + 'px;'">
                <div class="header-box" :style="'height: ' + menuData.height + 'px;'" v-if="type === 'custom'">
                    <div
                        class="notice"
                        :style="'width: ' + menuData.height + 'px'">
                        <i class="fa fa-bell-o icon-bell"></i>
                    </div>
                    <div class="search">
                        <div class="search-box">
                            <i class="fa fa-search"></i>
                            <input
                                type="text"
                                placeholder-style="color: #f7f7f7"
                                class="search-input"
                                placeholder="搜啥都有优惠券"
                                disabled
                                @click="toSearch"
                            >
                        </div>
                    </div>
                </div>
                <!-- 详情 -->
                <div class="header-box" :style="'height: ' + menuData.height + 'px;'" v-else>
                    <div class="header-info">
                        <div class="detail-back font20" 
                            :style="'background: rgba(0, 0, 0, ' + (type === 'detail' ? (opacity > 0.8 ? 1-opacity : 0.2) : 0) + ')'" 
                            @click="onBack" 
                            v-if="backShow">
                            <i class="fa fa-angle-left"></i>
                            <span v-if="type === 'detail'" :style="'opacity: ' + (1 - opacity)">返回</span>
                        </div>
                        <span class="font36" :style="'opacity: ' + opacity">{{navTitle}}</span>
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
        opacity: {
            type: Number
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
            menuData: {
                top: 26,
                height: 32
            }
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
        },
        toSearch() {
            wx.navigateTo({
                url: '../others/search/main'
            })
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
            border-radius: 30rpx;
            padding: 0 30rpx 0 20rpx;

            position: absolute;
            top: 50%;
            left: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            .fa {
                font-size: 44rpx;
                margin-right: 20rpx;
                position: relative;
                top: -2rpx;
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

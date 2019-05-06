<template>
    <div class="scroll">
        <scroll-view class="scroll-view" scroll-x>
            <view class="tab-item" @click="onTabClick('11')">
                <span class="txt">精选</span>
            </view>
            <view class="tab-item active">
                <span class="txt">美食</span>
            </view>
            <view class="tab-item">
                <span class="txt">美食</span>
            </view>
            <view class="tab-item">
                <span class="txt">精选</span>
            </view>
            <view class="tab-item">
                <span class="txt">美食</span>
            </view>
            <view class="tab-item">
                <span class="txt">美食</span>
            </view>
            <view class="tab-item">
                <span class="txt">精选</span>
            </view>
            <view class="tab-item">
                <span class="txt">美食</span>
            </view>
            <view class="tab-item">
                <span class="txt">美食</span>
            </view>
        </scroll-view>
    </div>
</template>

<script>
import { getUser, getSysInfo } from "../utils/util";
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
        onTabClick: {
            type: Function,
            default: function() {}
        }
    },
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        onTabClick(type) {
            this.$emit('onTabClick', type);
        }
    }
};
</script>

<style lang='scss' scoped>
.scroll {
    width: 100%;
    color: #fff;
    padding-bottom: 30rpx;
    &-view {
        width: 100%;
        height: 60rpx;
        line-height: 60rpx;
        white-space: nowrap;
        .tab-item {
            display: inline-block;
            padding-right: 10rpx;
            text-align: center;
            span {
                background: transparent;
                border-radius: 30rpx;
                padding: 0 26rpx 4rpx;
            }
            &.active span {
                color: #f64f1a;
                background: #fff;
            }
        }
    }
}
</style>

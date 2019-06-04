<template>
    <div class="scroll">
        <scroll-view class="scroll-view" scroll-x>
            <view class="tab-item"
                :class="{active: category === item.opt_name}"
                v-for="item in data" :key="item.opt_id"
                @click="onTabClick(item)">
                <span class="txt">{{item.opt_name}}</span>
            </view>
        </scroll-view>
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
        data: {
            type: Array
        },
        onTabClick: {
            type: Function,
            default: function() {}
        }
    },
    data() {
        return {
            category: this.data[0].opt_name
        };
    },
    mounted() {
        
    },
    methods: {
        onTabClick(item) {
            this.category = item.opt_name;
            this.$emit('onTabClick', item.opt_id);
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
        &::-webkit-scrollbar{
            width: 0;
            height: 0;
            color: transparent;
        }
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

<template>
    <div :class="'list-box ' + classic + ' ' + (type !== 'hori' ? 'info' : '')">
        <div class="list-item" @click="toDetail" v-for="item in list" :key="item" :class="{info: type !== 'hori'}">
            <div class="item-box box1">
                <img class="img" :src="item.src" alt>
                <div class="con">
                    <div class="title">{{item.title}}</div>
                    <div class="coupon-two" v-if="classic === 'second'">
                        <div class="rt">
                            <span class="txt">券</span>
                            <span class="num">4</span>
                        </div>
                        <div class="lf">
                            <span>券后</span>
                            <span class="price">￥<span class="full">5</span>.80</span>
                        </div>
                    </div>
                    <div class="coupon" v-else>券后 ￥{{item.couponPrice}}</div>
                    <div class="total" v-if="classic === 'second'">销量 {{item.total}}</div>
                    <div class="total" v-else>{{item.total}}单</div>
                </div>
                <div class="button">立即购买</div>
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
        classic: {
            type: String
        },
        list: {
            type: Array
        }
    },
    data() {
        return {};
    },
    mounted() {
        
    },
    methods: {
        toDetail() {
            wx.navigateTo({
                url: '../others/detail/main?id=1'
            })
        }
    }
};
</script>

<style lang='scss' scoped>
.list {
    &-box {
        padding-right: 30rpx;
        &.info {
            display: flex;
            white-space: normal;
            flex-wrap: wrap;
        }
        &.second {
            .item-box {
                padding: 0;
                border-radius: 0 0 10rpx 10rpx;
            }
            .coupon {
                border: 0;
            }
            .con {
                padding: 0 8rpx;
            }
            .button {
                height: 54rpx;
                line-height: 54rpx;
                font-size: 22rpx;
                border-radius: 0;
            }
            .img {
                height: 280rpx;
            }
        }
    }
    &-item {
        display: inline-block;
        width: 45%;
        line-height: 46rpx;
        font-size: 28rpx;
        padding-left: 30rpx;
        overflow: hidden;
        box-sizing: border-box;
        &.info {
            width: 50%;
            padding-bottom: 30rpx;
        }
        .item-box {
            overflow: hidden;
            white-space: normal;
            background: #fff;
            padding: 20rpx;
        }
        .img {
            width: 100%;
            height: 200rpx;
        }
        .title {
            height: 90rpx;
            word-wrap: break-word;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .coupon {
            color: #f00;
            font-size: 32rpx;
            padding: 8rpx 0;
            margin-bottom: 8rpx;
            border-bottom: 1px solid #ededed;
        }
        .total {
            color: #999;
            font-size: 22rpx;
        }
        .button {
            height: 64rpx;
            line-height: 64rpx;
            color: #fff;
            background: linear-gradient(to right, #dd2476, #ff512f);
            margin-top: 10rpx;
            border-radius: 10rpx;
            text-align: center;
        }
    }
}
</style>

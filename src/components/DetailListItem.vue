<template>
    <div class="list-box">
        <div class="list-item" @click="toDetail" v-for="item in list" :key="item">
            <div class="item-box box1">
                <img class="img" :src="item.src" alt>
                <div class="con">
                    <div class="title font24 text-ellipsis">{{item.title}}</div>
                    <div class="coupon font20">
                        <span class="text-red">￥{{item.couponPrice}}</span>
                        <span class="text-del text-gray999 del">￥8.90</span>
                    </div>
                    <div class="total font20 text-gray999">销量 {{item.total}}</div>
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
    }
    &-item {
        display: inline-block;
        width: 32%;
        font-size: 28rpx;
        overflow: hidden;
        box-sizing: border-box;
        &:first-child {
            padding-left: 15rpx;
        }
        &:last-child {
            padding-right: 15rpx;
        }
        .item-box {
            overflow: hidden;
            white-space: normal;
            background: #fff;
            padding: 15rpx;
        }
        .img {
            width: 100%;
            height: 200rpx;
        }
        .title {
            padding: 6rpx 0;
            -webkit-line-clamp: 1;
        }
        .coupon {
            padding: 8rpx 0 4rpx;
        }
        .del {
            margin-left: 6rpx;
        }
    }
}
</style>

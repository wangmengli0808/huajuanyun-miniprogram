<template>
    <div class="list-box">
        <div class="list-item" @click="toDetail" v-for="item in list" :key="item">
            <div class="item-box">
                <div class="img-box">
                    <img class="img-info" :src="item.src" alt>
                </div>
                <div class="item-content">
                    <div class="title">{{item.title}}</div>
                    <div class="coupon-two">
                        <div class="rt">
                            <span class="txt">券</span>
                            <span class="num">4元</span>
                        </div>
                    </div>
                    <div class="price font22">
                        <div class="price-lf">
                            <span class="text-red">￥<span class="font28">8</span>.80</span>
                            <span class="text-gray999 del">￥9.98</span>
                        </div>
                        <div class="price-rt text-red">升级赚 0.62元</div>
                    </div>
                    <div class="text-gray999 font22">销量：{{item.total}}</div>
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
        list: {
            type: Array
        }
    },
    data() {
        return {};
    },
    mounted() {
        console.log(this.list)
    },
    methods: {
        toDetail() {
            wx.navigateTo({
                url: '../detail/main?id=1'
            })
        }
    }
};
</script>

<style lang='scss' scoped>
.list {
    &-box {
    }
    &-item {
        font-size: 28rpx;
        overflow: hidden;
        box-sizing: border-box;
        .item-box {
            background: #fff;
            padding: 20rpx 30rpx;
            margin-bottom: 20rpx;
            display: flex;
            align-items: center;
        }
        .item-content {
            flex: 1;
            padding-left: 30rpx;
        }
        .img-box {
            width: 240rpx;
            height: 240rpx;
            border-radius: 8rpx;
            overflow: hidden;
        }
        .title {
            line-height: 46rpx;
            word-wrap: break-word;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .price {
            display: flex;
            justify-content: space-between;
            margin-top: 20rpx;
        }
        .del {
            margin-left: 20rpx;
            text-decoration: line-through;
        }
    }
}
</style>

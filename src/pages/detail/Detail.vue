<template>
    <div class="detail">
        <nav-bar :navTitle="'商城'" :backShow="true" :type="navType"></nav-bar>

        <div class="detail-swiper">
            <swiper class="swiper" :autoplay="true" circular interval="3000" duration="500">
                <block v-for="item in swiperList" :key="item">
                    <swiper-item class="swiper-item">
                        <div class="item-box">
                            <img :src="item.src" class="img-info" alt>
                        </div>
                    </swiper-item>
                </block>
            </swiper>
        </div>
        <div class="detail-info">
            <div class="info-con1">
                <div class="price text-red">
                    <span class="font20">券后</span>
                    <span class="font24"> ￥<span class="font32">7</span>.30</span>
                </div>
                <div class="collect font22 text-gray666">
                    <i class="fa fa-star-o icon-star"></i>
                    <span>收藏</span>
                </div>
            </div>
            <div class="info-con1 text-gray666 font22">
                <div class="price">
                    <span class="original">原价4.70</span>
                </div>
                <div>
                    <span>销量: 785件</span>
                </div>
            </div>
            <div class="detail-title text-ellipsis">
                <img class="title-lf" src="http://api.dhcc.wang/assets/img/default_pdd.png" alt="">
                <span class="title font32">
                    测试架构师修炼之道：从测试工程师到测试架构师测试架构师修炼之道：从测试工程师到测试架构师
                </span>
            </div>
            <div class="coupon-two">
                <div class="rt">
                    <span class="txt font24">暂无优惠券</span>
                    <span class="num"><span class="purchase font30">用券抢购</span></span>
                </div>
            </div>
        </div>
        <div class="detail-main">
            <div class="index-title">
                <div class="title">
                    <h3 class="txt text-red">每日爆款</h3>
                </div>
                <div class="more">更多 <i class="fa fa-angle-right"></i></div>
            </div>
            <scroll-view
                class="list-scroll"
                lower-threshold="100"
                scroll-x
            >
                <list-item :list="list"></list-item>
            </scroll-view>
        </div>
        <div class="detail-main">
            <div class="index-title">
                <div class="title">
                    <h3 class="txt text-red">宝贝详情</h3>
                </div>
            </div>
        </div>
        <div class="detail-main">
            <div class="index-title">
                <div class="title">
                    <h3 class="txt text-red">同款类型</h3>
                </div>
                <div class="more">更多 <i class="fa fa-angle-right"></i></div>
            </div>
            <scroll-view
                class="list-scroll"
                lower-threshold="100"
                scroll-x
            >
                <list-item :list="list"></list-item>
            </scroll-view>
        </div>
        <div class="detail-main">
            <div class="index-title">
                <div class="title">
                    <h3 class="txt text-red">更多活动</h3>
                </div>
            </div>
            <div class="index-classify">
                <div class="item" v-for="item in classifyData" :key="item">
                    <img class="item-img" :src="item.src" alt>
                    <p class="title">{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/Navbar";
import ListItem from "../../components/DetailListItem";
export default {
    components: {
        NavBar,
        ListItem
    },
    data() {
        return {
            navType: "detail",
            swiperList: [
                {
                    src:
                        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640"
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
                }
            ],
            list: [
                {
                    title: "买一送一 科技师范吉林省福利费吉利丁粉讲课费",
                    src:
                        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
                    couponPrice: 14.8,
                    total: 25863258,
                    quanPrice: 5
                },
                {
                    title: "买一送一 科技师范吉林省福利费吉利丁粉讲课费",
                    src:
                        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
                    couponPrice: 24.8,
                    total: 5863258,
                    quanPrice: 15
                },
                {
                    title: "买一送一 科技师范吉林省福利费吉利丁粉讲课费",
                    src:
                        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
                    couponPrice: 24.8,
                    total: 5863258,
                    quanPrice: 15
                },
                {
                    title: "买一送一 科技师范吉林省福利费吉利丁粉讲课费",
                    src:
                        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
                    couponPrice: 24.8,
                    total: 5863258,
                    quanPrice: 15
                }
            ],
            classifyData: [
                {
                    title: "淘宝",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝22",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝33",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝44",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝55",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝66",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                },
                {
                    title: "淘宝",
                    src: 'http://api.dhcc.wang/assets/img/default_pdd.png'
                }
            ],
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            wx.showLoading({
                title: "加载中"
            });

            setTimeout(function() {
                wx.hideLoading();
            }, 1000);
        }
    },
    onPageScroll(e) {
        this.navType = e.scrollTop > 100 ? "" : "detail";
    }
};
</script>

<style lang="scss" scoped>
.detail {
    height: 2000rpx;
    .list-scroll {
        width: 100%;
        white-space: nowrap;
    }
    &-swiper {
        .swiper {
            height: 750rpx;
        }
        .item-box {
            width: 100%;
            height: 100%;
        }
    }
    &-info {
        background: #fff;
        padding: 0 30rpx;
        .info {
            &-con1 {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8rpx;
                .icon-star {
                    margin-right: 10rpx;
                }
                .original {
                    text-decoration: line-through;
                }
            }
        }
        .coupon-two {
            display: block;
            padding: 10rpx 0 30rpx;
            .rt {
                height: 120rpx;
                line-height: 120rpx;
                display: flex;
                align-items: center;
                text-align: center;
            }
            .txt, .num {
                height: 100%;
            }
            .txt {
                width: 60%;
                &:before {
                    border-width: 16rpx;
                    left: -12rpx;
                }
            }
            .num {
                width: 40%;
                border-left-width: 12rpx;
                position: relative;
                &:after {
                    content: '';
                    border: 16rpx solid #fff;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    right: -11rpx;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    z-index: 1;
                }
            }
            .purchase {
                color: red;
                background: gold;
                padding: 8rpx 28rpx 10rpx;
                border-radius: 24rpx;
            }
        }
    }
    &-title {
        padding: 6rpx 0 10rpx;
        .title-lf {
            width: 32rpx;
            height: 32rpx;
            position: relative;
            top: 4rpx;
        }
    }
    &-main {
        background: #fff;
        margin-top: 20rpx;
    }

}
</style>

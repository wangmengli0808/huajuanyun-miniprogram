<template>
    <div class="index" :style="'padding-top: ' + (isFixed ? navBoxTop : 0) + 'px'">
        <div
            class="bg-color"
            v-if="isShowBg"
            :style="'height: ' + bgColorHeight + 'px;background: ' + colorFrom"
        ></div>
        <div
            class="bg-color"
            v-if="isShowBg"
            :style="'height: ' + bgColorHeight + 'px;background: ' + colorTo"
        ></div>
        <div
            class="nav-box"
            :class="{fixed: isFixed}"
        >
            <!-- 头部 -->
            <nav-bar type="custom" :backShow="false" :hasColor="true"></nav-bar>
            <!-- tab切换 -->
            <div class="index-tabs">
                <div style="width: 80%;">
                    <horizontal-scroll type="custom" @onTabClick="onTabClick"></horizontal-scroll>
                </div>
                <div class="tab-all text-right">
                    <span class="span">全部</span>
                    <i class="fa fa-list-ul"></i>
                </div>
            </div>
        </div>
        <div class="index-main">
            <div class="index-swiper">
                <swiper
                    class="swiper"
                    :autoplay="autoplay"
                    circular
                    interval="3000"
                    duration="500"
                    previous-margin="30rpx"
                    next-margin="30rpx"
                    :current="currentTab"
                    @transition="transition($event)"
                    @change="slideChangeEnd"
                >
                    <block v-for="item in swiperList" :key="item">
                        <swiper-item class="swiper-item">
                            <div class="item-box">
                                <img :src="item.src" class="img-info" alt>
                            </div>
                        </swiper-item>
                    </block>
                </swiper>
            </div>
            <div class="index-classify">
                <div class="item" v-for="item in classifyData" :key="item">
                    <img class="item-img" :src="item.src" alt>
                    <p class="title">{{item.title}}</p>
                </div>
            </div>
            <div class="index-lay">
                <div class="lay-con lay-one">
                    <div class="col-1">
                        <div class="col-1-box info-con">
                            <div class="title">实时热销榜</div>
                            <p class="txt">看看大家都在买什么</p>
                            <img
                                class="img"
                                src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
                                alt
                            >
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="col-2-box info-con">
                            <div class="lf">
                                <div class="title">实时热销榜</div>
                                <p class="txt">看看大家都在买什么</p>
                            </div>
                            <div class="rt">
                                <img
                                    class="img"
                                    src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
                                    alt
                                >
                            </div>
                        </div>
                        <div class="col-2-box info-con">
                            <div class="lf">
                                <div class="title">实时热销榜</div>
                                <p class="txt">看看大家都在买什么</p>
                            </div>
                            <div class="rt">
                                <img
                                    class="img"
                                    src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
                                    alt
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="index-news">
                    <div class="news-title">快报</div>
                    <div class="news-swiper">
                        <swiper
                            class="swiper"
                            autoplay
                            circular
                            vertical
                            interval="3000"
                            duration="500"
                        >
                            <block>
                                <swiper-item class="swiper-item">
                                    <div class="item-box">
                                        <div class="box-lf">
                                            <img
                                                class="avatar"
                                                src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
                                                alt
                                            >
                                        </div>
                                        <div class="box-rt">
                                            <span class="name text-red">A****h</span>
                                            <span class="text-gray666" style="margin: 0 10rpx;">成功出单</span>
                                            <span class="text-red">赚 0.66 元</span>
                                        </div>
                                    </div>
                                </swiper-item>
                            </block>
                            <block>
                                <swiper-item class="swiper-item">
                                    <div class="item-box">
                                        <div class="box-lf">
                                            <img
                                                class="avatar"
                                                src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
                                                alt
                                            >
                                        </div>
                                        <div class="box-rt">
                                            <span class="name text-red">A****h</span>
                                            <span class="text-gray666" style="margin: 0 10rpx;">成功出单</span>
                                            <span class="text-red">赚 0.66 元</span>
                                        </div>
                                    </div>
                                </swiper-item>
                            </block>
                        </swiper>
                    </div>
                </div>
            </div>
            <div class="index-hot">
                <div class="index-title">
                    <div class="title">
                        <h3 class="txt">爆品推荐</h3>
                        <span>每日更新</span>
                    </div>
                    <div class="more">更多 <i class="fa fa-angle-right"></i></div>
                </div>
                <div class="list">
                    <scroll-view
                        class="list-scroll"
                        lower-threshold="100"
                        @scrolltolower="scrolltolower"
                        scroll-x
                    >
                        <list-item :list="hotList" :type="'hori'"></list-item>
                    </scroll-view>
                </div>
            </div>
            <div class="index-list">
                <div class="list-type text-center">
                    <div class="type pdd" :class="{active: typeFrom === 'pdd'}" @click="onTypeClick('pdd')">
                        <div class="name font30">拼多多</div>
                        <span class="txt font22">超值好货</span>
                    </div>
                    <div class="type jd" :class="{active: typeFrom === 'jd'}" @click="onTypeClick('jd')">
                        <div class="name font30">京东精选</div>
                        <span class="txt font22">超值好货</span>
                    </div>
                    <div class="type mgj" :class="{active: typeFrom === 'mgj'}" @click="onTypeClick('mgj')">
                        <div class="name font30">蘑菇街</div>
                        <span class="txt font22">美丽女装</span>
                    </div>
                </div>
                <div class="list-tab text-center">
                    <div class="tab" :class="{active: type === 'default'}" @click="onChangeTab('default')">默认</div>
                    <div class="tab" :class="{active: type === 'sale'}" @click="onChangeTab('sale')">销量</div>
                    <div class="tab" :class="{active: type === 'price'}" @click="onChangeTab('price')">
                        <div class="tab-span">
                            价格 
                            <i class="fa fa-caret-up" :class="{red: priceType && type === 'price'}"></i>
                            <i class="fa fa-caret-down" :class="{red: !priceType && type === 'price'}"></i>
                        </div>
                    </div>
                    <div class="tab" :class="{active: type === 'commission'}" @click="onChangeTab('commission')">
                        <div class="tab-span">
                            佣金
                            <i class="fa fa-caret-up" :class="{red: commissionType && type === 'commission'}"></i>
                            <i class="fa fa-caret-down" :class="{red: !commissionType && type === 'commission'}"></i>
                        </div>
                    </div>
                </div>
                <list-item :list="allList" :classic="'second'"></list-item>
            </div>
        </div>

        <div class="free">
            <img class="free-img" src="http://image2.quanmama.com/AdminImageUpload/1345712xhb2_ORIGIN_4MzM.png" alt="">
        </div>
    </div>
</template>
<script>
import { hexToRgba } from "../../utils/util";
import NavBar from "../../components/Navbar";
import HorizontalScroll from "../../components/HorizontalScroll";
import ListItem from "../../components/ListItem";
import Img from "../../assets/img/xin.png";
export default {
    components: {
        NavBar,
        ListItem,
        HorizontalScroll
    },
    data() {
        return {
            autoplay: true,
            isShowBg: true,
            isFixed: false,
            isFirst: true,
            priceType: false,
            commissionType: false,
            navBoxTop: 0,
            bgColorHeight: 0,
            statusBarHeight: 0,
            mainHeight: 0,
            currentTab: 0,
            opacity: 0,
            swiperList: [
                {
                    focusColor: "#d9287c",
                    focusColorOther: "#f64f1a",
                    src:
                        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"
                },
                {
                    focusColor: "#af63fb",
                    focusColorOther: "#f64f1a",
                    src:
                        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640"
                },
                {
                    focusColor: "#ff5282",
                    focusColorOther: "#f64f1a",
                    src:
                        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
                }
            ],
            classifyData: [
                {
                    title: "淘宝",
                    src: Img
                },
                {
                    title: "淘宝22",
                    src: Img
                },
                {
                    title: "淘宝33",
                    src: Img
                },
                {
                    title: "淘宝44",
                    src: Img
                },
                {
                    title: "淘宝55",
                    src: Img
                },
                {
                    title: "淘宝66",
                    src: Img
                },
                {
                    title: "淘宝",
                    src: Img
                },
                {
                    title: "淘宝",
                    src: Img
                },
                {
                    title: "淘宝",
                    src: Img
                },
                {
                    title: "淘宝",
                    src: Img
                }
            ],
            hotList: [
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
                }
            ],
            allList: [],
            typeFrom: 'pdd',
            type: 'default',
            colorFromInfo: "#f00",
            colorToInfo: "#00f",
            colorFrom: null,
            colorTo: null
        };
    },
    mounted() {
        let that = this;
        let systemInfo = wx.getStorageSync("systemInfo");
        let windowHeight = systemInfo.windowHeight;
        let screenHeight = systemInfo.screenHeight;

        this.menuData = wx.getStorageSync("menuBounding");
        this.bgColorHeight = this.menuData.top + (screenHeight - windowHeight);
        this.navBoxTop = this.menuData.top + (screenHeight - windowHeight);

        var query = wx.createSelectorQuery();
        query
            .select(".index-tabs")
            .boundingClientRect(function(rect) {
                if (rect && that.isFirst) {
                    that.isFirst = false;
                    that.navBoxTop += rect.height;
                    that.bgColorHeight += rect.height;
                }
            })
            .exec();
        query
            .select(".index-swiper")
            .boundingClientRect(function(rect) {
                if (rect) {
                    that.bgColorHeight += rect.height * 0.6;
                }
            })
            .exec();

        this.colorFrom = hexToRgba(this.swiperList[0].focusColor, 1).rgba;
        this.colorTo = hexToRgba(this.swiperList[1].focusColor, 0).rgba;

        this.getList();
    },
    methods: {
        getList() {
            wx.showLoading({
                title: "加载中"
            });
            // Http.POST({
            //     url: Http.API_URL.JdList,
            //     data: {
            //         sort_type: 0,
            //         opt_id: "",
            //         page: 1
            //     }
            // })
            // .then(res => {})
            // .catch(err => {});
            let arr = [
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
            ];
            this.allList = [...this.allList, ...arr];

            setTimeout(function() {
                wx.hideLoading();
            }, 1000);
        },
        transition(e) {
            let dx = e.mp.detail.dx;
            var query = wx.createSelectorQuery();
            let idx = this.currentTab;
            let len = this.swiperList.length;
            //选择id
            query
                .select(".index-swiper .swiper-item")
                .boundingClientRect(rect => {
                    let curColor = this.swiperList[this.currentTab].focusColor,
                        nextColor;
                    if (rect) {
                        // let opacity = (Math.abs(dx) / rect.width).toFixed(2);
                        // if (dx >= 0) {
                        //     idx++;
                        //     if (idx === len) {
                        //         idx = 0;
                        //     }
                        // } else {
                        //     idx--;
                        //     if (idx < 0) {
                        //         idx = len - 1;
                        //     }
                        // }
                        // opacity = opacity > 1 ? 1 : opacity;
                        // nextColor = this.swiperList[idx].focusColor;

                        this.colorFrom = hexToRgba(curColor, 1).rgba;
                        // this.colorTo = hexToRgba(nextColor, opacity).rgba
                    }
                })
                .exec();
        },
        slideChangeEnd(e) {
            this.currentTab = e.mp.detail.current;
        },
        scrolltolower(e) {
            console.log(e);
        },
        onTabClick(type) {
            console.log(type)
        },
        onTypeClick(type) {
            this.typeFrom = type;
        },
        onChangeTab(type) {
            this.type = type;
            if (type === 'price') {
                this.priceType = !this.priceType;
            } else {
                this.priceType = false;
            }
            if (type === 'commission') {
                this.commissionType = !this.commissionType;
            } else {
                this.commissionType = false;
            }
        }
    },
    onPullDownRefresh() {
        console.log("refresh------");
    },
    onReachBottom() {
        this.getList();
    },
    onPageScroll(e) {
        this.isFixed = e.scrollTop > 0 ? true : false;
        this.isShowBg = e.scrollTop > 90 ? false : true;
        this.autoplay = e.scrollTop > 90 ? false : true;
    }
};
</script>
<style lang='scss' scoped>
.nav-box {
    background: transparent;
}
.nav-box.fixed {
    background: linear-gradient(to right, #dd2476, #ff512f);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
.free {
    position: fixed;
    bottom: 40rpx;
    right: 40rpx;
    z-index: 9;
    &-img {
        width: 130rpx;
        height: 120rpx;
        animation: scaleDraw 5s infinite linear;
        -webkit-animation: scaleDraw 5s infinite linear;
    }
    @-webkit-keyframes scaleDraw {
        0% {
            transform: scale(1);
        }
        25%{
            transform: scale(1.2);
        }
        50%{
            transform: scale(1);
        }
        75%{
            transform: scale(1.2);
        }
    }
}
.index {
    height: 100%;
    position: relative;
    .bg-color {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
    }
    .tab-all {
        width: 20%;
        position: absolute;
        z-index: 1;
        right: 0;
        top: 15rpx;
        color: #fff;
        padding-right: 30rpx;
        .span {
            padding-right: 14rpx;
            padding-left: 30rpx;
            border-left: 1px solid #fff;
        }
    }
    &-tabs {
        font-size: 26rpx;
        padding: 0 30rpx;
        position: relative;
    }
    &-swiper {
        .swiper {
            height: 300rpx;
        }
        .item-box {
            width: 98%;
            height: 100%;
            margin: auto;
        }
    }
    &-lay {
        background: linear-gradient(to right, #dd2476, #ff512f);
        padding: 30rpx;
        .lay-con {
            display: flex;
            line-height: 40rpx;
        }
        .info-con {
            padding: 20rpx;
            background: #fff;
            border-radius: 8rpx;
        }
        .title {
            font-size: 28rpx;
        }
        .txt {
            color: #666;
            font-size: 22rpx;
        }
        .col-1 {
            width: 40%;
            padding-right: 20rpx;
            &-box {
                height: 100%;
                box-sizing: border-box;
            }
            .img {
                width: 100rpx;
                height: 100rpx;
                margin-top: 25rpx;
            }
        }
        .col-2 {
            width: 60%;
            &-box {
                display: flex;
                justify-content: space-between;
                &:first-child {
                    margin-bottom: 20rpx;
                }
            }
            .img {
                width: 75rpx;
                height: 75rpx;
            }
        }
    }
    &-news {
        background: #fff;
        margin-top: 20rpx;
        border-radius: 20rpx;
        display: flex;
        align-items: center;
        .news {
            &-title {
                padding: 0 30rpx;
                border-right: 2rpx solid #ededed;
            }
            &-swiper {
                flex: 1;
            }
        }
        .swiper {
            height: 66rpx;
            padding-left: 25rpx;
        }
        .box {
            &-lf {
                width: 50rpx;
                height: 50rpx;
                margin-right: 20rpx;
            }
        }
        .item-box {
            display: flex;
            align-items: center;
            font-size: 22rpx;
            padding-top: 8rpx;
            .avatar {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
    &-title {
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 24rpx;
        padding: 30rpx;
        .title {
            display: flex;
            align-items: flex-end;
        }
        .txt {
            color: #333;
            font-size: 32rpx;
            margin-right: 20rpx;
        }
    }
    .list-scroll {
        width: 100%;
        white-space: nowrap;
    }
    &-list {
        .list-type {
            display: flex;
            align-items: center;
            margin: 40rpx 0 30rpx;
        }
        .type {
            flex: 1;
            border-left: 1px solid #eded;
            &:first-child {
                border: 0;
            }
            .txt {
                display:inline-block;
                height:36rpx;
                line-height:34rpx;
                color: #666;
                padding: 0 16rpx;
                border-radius: 20rpx;
            }
            &.active {
                .txt {
                    color: #fff;  
                }
                 &.pdd {
                     .name {
                         color: #f00;
                     }
                     .txt {
                         background: #f00;
                     }
                 }
                 &.jd {
                     .name {
                         color: #00f;
                     }
                     .txt {
                         background: #00f;
                     }
                 }
                 &.mgj {
                     .name {
                         color: rgb(255, 110, 129);
                     }
                     .txt {
                         background: rgb(255, 110, 129);
                     }
                 }
            }
        }
        .list-tab {
            height: 90rpx;
            display: flex;
            align-items: center;
            background: #fff;
            margin-top: 20rpx;
            margin-bottom: 30rpx;
        }
        .tab {
            flex: 1;
            font-size: 26rpx;
            &.active {
                color: #f00;
            }
            &-span {
                display: inline-block;
                position: relative;
            }
            .fa {
                color: #999;
                font-size: 16rpx;
                position: absolute;
                right: -16rpx;
                &.red {
                    color: #f00;
                }
            }
            .fa-caret-up {
                top: 4rpx;
            }
            .fa-caret-down {
                bottom: 4rpx;
            }
        }
    }
}
</style>

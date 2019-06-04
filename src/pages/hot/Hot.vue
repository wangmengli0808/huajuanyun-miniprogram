<template>
    <div class="hot">
        <nav-bar :navTitle="'热门'" :backShow="false"></nav-bar>
        <div class="hot-tabs">
            <div class="hot-scroll" :style="'top: ' + (menuData.top + navHeight) + 'px'">
                <horizontal-scroll @onTabClick="onTabClick" :data="scrollTypes"></horizontal-scroll>
            </div>
        </div>
        <div class="hot-banner">
            <div class="bg"></div>
            <div class="banner">
                <img
                    class="img-info"
                    src="http://img14.360buyimg.com/n1/jfs/t1/9889/12/12191/53158/5c3339f9E5185b01c/dbe800223abe7021.png"
                    alt
                >
            </div>
        </div>
        <div class="hot-list">
            <list-item :list="list"></list-item>
        </div>

        <div class="share">
            <i class="fa fa-share"></i>
            <p class="font20">分享</p>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/Navbar";
import HorizontalScroll from "../../components/HorizontalScroll";
import ListItem from "../../components/HotListItem";
export default {
    components: {
        NavBar,
        ListItem,
        HorizontalScroll
    },
    data() {
        return {
            navHeight: 48,
            menuData: {},
            list: [],
            scrollTypes: [
                {
                    "opt_id": 1,
                    "opt_name": "女装"
                },
                {
                    "opt_id": 10,
                    "opt_name": "男装"
                },
                {
                    "opt_id": 2,
                    "opt_name": "鞋品"
                },
                {
                    "opt_id": 107,
                    "opt_name": "母婴儿童"
                },
                {
                    "opt_id": 8,
                    "opt_name": "数码家电"
                },
                {
                    "opt_id": 9,
                    "opt_name": "居家日用"
                }
            ],
        };
    },
    mounted() {
        let that = this;
        this.navHeight = wx.getStorageSync("navHeight");
        this.menuData = wx.getStorageSync("menuBounding");

        this.getList();
    },
    methods: {
        getList() {
            wx.showLoading({
                title: "加载中"
            });
            let list = [
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
            this.list = [...this.list, ...list];

            setTimeout(function() {
                wx.hideLoading();
            }, 1000);
        },
        onTabClick(id) {
            console.log(id)
        },
    },
    onReachBottom() {
        this.getList();
    }
};
</script>

<style lang="scss" scoped>
.hot {
    &-tabs {
        height: 90rpx;
        font-size: 30rpx;
        background: linear-gradient(to right, #dd2476, #ff512f);
    }
    &-banner {
        width: 100%;
        height: 240rpx;
        margin-bottom: 30rpx;
        position: relative;
        .bg {
            height: 80%;
            background: linear-gradient(to right, #dd2476, #ff512f);
            border-radius: 0 0 42% 42%;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            z-index: 0;
        }
        .banner {
            width: 100%;
            height: 100%;
            padding: 0 30rpx;
            box-sizing: border-box;
            position: relative;
            z-index: 1;
        }
    }
    &-scroll {
        background: linear-gradient(to right, #dd2476, #ff512f);
        padding: 0 20rpx;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 8;
    }
    .share {
        width: 90rpx;
        height: 90rpx;
        color: #fff;
        background: #ff512f;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: fixed;
        bottom: 20rpx;
        right: 20rpx;
        z-index: 8;
    }
    .fa-share {
        font-size: 24rpx;
        margin-bottom: 6rpx;
    }
}
</style>

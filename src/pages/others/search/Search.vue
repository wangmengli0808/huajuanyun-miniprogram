<template>
    <div class="search">
        <nav-bar :navTitle="'搜索'" :backShow="true"></nav-bar>
        <div :style="'height: ' + searchHeight + 'px'">
            <div class="search-box bg-red font28" :style="'top: ' + fixedTop + 'px'">
                <div class="box1">
                    <div class="box1-input">
                        <input
                            type="text"
                            placeholder-style="color: #666"
                            class="search-input"
                            v-model="keyword"
                            @input="onChange"
                            @confirm="onConfirm"
                            placeholder="请输入商品名称"
                        >
                        <span class="close" v-if="keyword" @click="clearKeyword">×</span>
                    </div>
                    <div class="box1-txt" @click="onConfirm">搜索</div>
                </div>
                <div class="box2">
                    <div class="cate active">
                        <span class="cate-txt">拼多多</span>
                    </div>
                    <div class="cate">
                        <span class="cate-txt">京东</span>
                    </div>
                    <div class="cate">
                        <span class="cate-txt">淘宝</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-content" v-if="!isShow">
            <div class="content">
                <div class="content-title">
                    <div class="font30">历史记录</div>
                    <div class="trash-box text-gray666">
                        <i class="fa fa-trash-o icon-trash font28"></i>
                        <span class="font20" @click="clearHistory">清空历史记录</span>
                    </div>
                </div>
                <div class="content-item font24">
                    <div class="item" v-for="item in historyData" :key="item" @click="onClickItem(item)">{{item}}</div>
                </div>
            </div>
            <div class="content">
                <div class="content-title">
                    <div class="font30">热门推荐</div>
                </div>
                <div class="content-item font24">
                    <div class="item active">智能导购</div>
                    <div class="item" v-for="item in hotData" :key="item" @click="onClickItem(item)">{{item}}</div>
                </div>
            </div>
        </div>
        <div class="search-list" v-else>
            <div style="height: 90rpx;">
                <div class="list-tab text-center" :style="'top: ' + fixedTypeTop + 'px'">
                    <div class="tab" :class="{active: type === 'default'}" @click="onChangeTab('default')">默认</div>
                    <div class="tab" :class="{active: type === 'good'}" @click="onChangeTab('good')">好评</div>
                    <div class="tab" :class="{active: type === 'sale'}" @click="onChangeTab('sale')">销量</div>
                    <div class="tab" :class="{active: type === 'price'}" @click="onChangeTab('price')">
                        <div class="tab-span">
                            价格
                            <i class="fa fa-caret-up" :class="{red: priceType && type === 'price'}"></i>
                            <i class="fa fa-caret-down" :class="{red: !priceType && type === 'price'}"></i>
                        </div>
                    </div>
                </div>
            </div>
            <list-item :list="list" :from="'search'"></list-item>
        </div>
        <div class="search-others" v-if="isShowOther">
            <div class="others" :style="'top: ' + fixedTypeTop + 'px'">
                <div class="others-box">
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                    <div class="item">裙子</div>
                    <div class="item">我是唱作人</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Http from "../../../utils/http";
import NavBar from "../../../components/Navbar";
import ListItem from "../../../components/HotListItem";
export default {
    components: {
        NavBar,
        ListItem
    },
    data() {
        return {
            type: 'default',
            keyword: '',
            fixedTop: 74,
            searchHeight: 0,
            fixedTypeTop: 74,
            priceType: false,
            isShow: false, 
            isShowOther: false, 
            isClick: true, 
            historyData: [],
            hotData: ['纸巾', '短袖', '纸巾', '短袖', '纸巾', '短袖', '长款风衣'],
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
                },
                {
                    title: "买一送一 科技师范吉林省福利费吉利丁粉讲课费",
                    src:
                        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
                    couponPrice: 24.8,
                    total: 5863258,
                    quanPrice: 15
                }
            ]
        }
    },
    mounted: function() {
        this.searchHeight = 0
        this.fixedTop = this.fixedTypeTop = wx.getStorageSync("navHeight") + wx.getStorageSync("menuBounding").top;
        wx.createSelectorQuery()
            .select(".search-box")
            .boundingClientRect((rect) => {
                if (rect) {
                    this.searchHeight += rect.height;
                    this.fixedTypeTop += rect.height;
                }
            })
            .exec();
    },
    methods: {
        onChangeTab(type) {
            this.type = type;
            if (type === 'price') {
                this.priceType = !this.priceType;
            } else {
                this.priceType = false;
            }
        },
        getList() {
            console.log('getList------------')
        },
        onChange(val) {
            if (!this.isClick) {
                this.isClick = true
                return false
            }
            this.isShowOther = !!this.keyword
            if (!this.keyword) {
                this.isShow = false
            }
            if (this.keyword === val) {
                console.log(this.keyword)
            }
        },
        onConfirm() {
            this.isShow = true
            this.isShowOther = false
            if (this.historyData.indexOf(this.keyword) < 0) {
                this.historyData.unshift(this.keyword)
            }
            wx.setStorageSync('history_arr', this.historyData)
            this.getList()
        },
        clearKeyword() {
            this.keyword = ''
        },
        clearHistory() {
            this.historyData = []
            wx.setStorageSync('history_arr', [])
        },
        onClickItem(item) {
            this.isClick = false
            this.keyword = item
            this.onConfirm()
        }
    },
    onShow() {
        this.historyData = wx.getStorageSync('history_arr') ? wx.getStorageSync('history_arr') : []
    },
    watch: {
        
        keyword(curVal, oldVal) {
            let timer, that = this
            // 判断input输入间隔  减少请求次数
            if (timer) {clearTimeout(timer)}
            timer = setTimeout(() => {
                this.onChange(curVal)
            }, 600)
        }
    }
};
</script>

<style lang="scss" scoped>
.search {
    &-box {
        width: 100%;
        padding: 0 20rpx;
        box-sizing: border-box;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 3;
        .box1 {
            display: flex;
            align-items: center;
            &-input {
                flex: 1;
                position: relative;
            }
            &-txt {
                color: #fff;
                padding: 0 30rpx;
            }
            .search-input {
                height: 60rpx;
                background: #fff;
                border-radius: 36rpx;
                padding: 0 70rpx 0 30rpx;
            }
            .close {
                width: 30rpx;
                height: 30rpx;
                line-height: 30rpx;
                color: #fff;
                font-size: 26rpx;
                text-align: center;
                background: #ddd;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                right: 20rpx;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                z-index: 2;
            }
        }
        .box2 {
            display: flex;
            align-items: center;
            .cate {
                flex: 1;
                color: #fff;
                text-align: center;
                padding: 25rpx 0;
                &-txt {
                    padding: 6rpx 0;
                    border-bottom: 4rpx solid transparent;
                }
                &.active .cate-txt {
                    border-bottom-color: #fff;
                }
            }
        }
    }
    &-content {
        padding: 20rpx 30rpx;
        .content {
            margin-bottom: 30rpx;
            &-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 25rpx;
                .trash-box {
                    display: flex;
                    align-items: center;
                }
                .icon-trash {
                    margin-right: 10rpx;
                }
            }
            &-item {
                display: flex;
                flex-wrap: wrap;
                .item {
                    color: #666;
                    background: #ddd;
                    padding: 10rpx 20rpx;
                    border-radius: 30rpx;
                    margin: 0 20rpx 20rpx 0;
                    &.active {
                        color: #fff;
                        background: linear-gradient(to right, #dd2476, #ff512f);
                    }
                }
            }
        }
    }
    &-list {
        .list-tab {
            height: 90rpx;
            background: #f2f2f2;
            display: flex;
            align-items: center;
            position: fixed;
            left: 0;
            right: 0;
            z-index: 3;
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
    &-others {
        .others {
            background: #f2f2f2;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3;
            overflow-y: auto;
            .item {
                color: #666;
                font-size: 28rpx;
                padding: 20rpx 30rpx;
                border-bottom: 2rpx solid #ddd;
            }
        }
    }
}
</style>

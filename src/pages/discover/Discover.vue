<template>
    <div class="discover">
        <nav-bar :navTitle="'发现'" :backShow="false"></nav-bar>
        <div class="discover-tabs">
            <div class="tabs bg-red" :style="'top: ' + (menuData.top + navHeight) + 'px'">
                <div class="tab font30" :class="{active: type == 1}" @click="onChangeType(1)">晒单得奖</div>
                <div class="tab font30" :class="{active: type == 2}" @click="onChangeType(2)">营销素材</div>
            </div>
        </div>
        <div class="discover-list">
            <div class="item">
                <div class="item-title">
                    <div class="avatar">
                        <img class="img-info" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                    </div>
                    <div class="title-con">
                        <div class="title">
                            <span class="font26">**89**</span>
                            <span class="font22 text-red">晒单奖 +0.02元</span>
                        </div>
                        <div class="time font22 text-gray999">05-06 12:45</div>
                    </div>
                </div>
                <div class="item-desc font26">
                    非常好，码正，穿着也好看。
                </div>
                <div class="item-imgs">
                    <div class="img-con" v-for="item in imgsData" :key="item">
                        <img class="img-info" :src="item" alt="" :data-src="item" @click="previewImage">
                    </div>
                </div>
                <div class="item-detail">
                    <div class="detail">
                        <div class="detail-avatar">
                            <img class="img-info" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        </div>
                        <div class="detail-con">
                            <div class="title font22">女童夏装连衣裙2019新款1-5-8纯棉公主裙12中大童裙子女孩衣服秀</div>
                            <div class="total font20 text-gray999">840人购买</div>
                            <div class="price text-red"><span class="font20">￥</span> <span class="font22">29.30</span></div>
                        </div>
                    </div>
                </div>
                <div class="item-praise font22 text-gray999">
                    <div class="praise-lf">
                        <img class="icon-avatar" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        <img class="icon-avatar" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        <img class="icon-avatar" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        <span>等14人觉得很赞</span>
                    </div>
                    <div class="praise-rt">
                        <i class="fa fa-thumbs-up icon-zan text-red font26"></i>
                        <span>赞</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    <div class="avatar">
                        <img class="img-info" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                    </div>
                    <div class="title-con">
                        <div class="title">
                            <span class="font26">**89**</span>
                            <span class="font22 text-red">晒单奖 +0.02元</span>
                        </div>
                        <div class="time font22 text-gray999">05-06 12:45</div>
                    </div>
                </div>
                <div class="item-desc font26">
                    非常好，码正，穿着也好看。
                </div>
                <div class="item-imgs">
                    <div class="img-con" v-for="item in imgsData" :key="item">
                        <img class="img-info" :src="item" alt="" :data-src="item" @click="previewImage">
                    </div>
                </div>
                <div class="item-detail">
                    <div class="detail">
                        <div class="detail-avatar">
                            <img class="img-info" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        </div>
                        <div class="detail-con">
                            <div class="title font22">女童夏装连衣裙2019新款1-5-8纯棉公主裙12中大童裙子女孩衣服秀</div>
                            <div class="total font20 text-gray999">840人购买</div>
                            <div class="price text-red"><span class="font20">￥</span> <span class="font22">29.30</span></div>
                        </div>
                    </div>
                </div>
                <div class="item-praise font22 text-gray999">
                    <div class="praise-lf">
                        <img class="icon-avatar" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        <img class="icon-avatar" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        <img class="icon-avatar" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                        <span>等14人觉得很赞</span>
                    </div>
                    <div class="praise-rt" @click="onPraise">
                        <i class="fa fa-thumbs-o-up icon-zan font26"></i>
                        <span>赞</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/Navbar";
export default {
    components: {
        NavBar
    },
    data() {
        return {
            type: 1,
            navHeight: 48,
            menuData: {},
            imgsData: [
                'http://img14.360buyimg.com/n1/jfs/t1/9240/28/12226/85211/5c33396dEe1fa5068/ce677fa7c83374ab.png',
                'http://img14.360buyimg.com/n1/jfs/t1/9889/12/12191/53158/5c3339f9E5185b01c/dbe800223abe7021.png',
                'http://img14.360buyimg.com/n1/jfs/t25147/136/1845238711/85113/3c88954c/5bbe07c3Ne3162683.jpg',
                'http://img14.360buyimg.com/n1/jfs/t1/8378/32/11708/75759/5c2df21fEd360a606/241f3e4adecd0292.jpg'
            ]
        }
    },
    mounted() {
        this.navHeight = wx.getStorageSync("navHeight");
        this.menuData = wx.getStorageSync("menuBounding");
    },
    methods: {
        previewImage(e) {
            let current = e.target.dataset.src;
            wx.previewImage({
                current: current, // 当前显示图片的http链接
                urls: this.imgsData
            })
        },
        onChangeType(type) {
            this.type = type
        },
        onPraise() {

        }
    }
};
</script>

<style lang="scss" scoped>
.discover {
    &-tabs {
        height: 67rpx;
        .tabs {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            padding: 0 0 16rpx;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 8;
            .tab {
                line-height: 50rpx;
                margin: 0 30rpx;
                padding: 0 20rpx;
                border-radius: 30rpx;
                &.active {
                    color: red;
                    background: #fff;
                }
            }
        }
    }
    &-list {
        padding: 0 30rpx 30rpx;
        .item {
            background: #fff;
            padding: 30rpx;
            margin-top: 30rpx;
            border-radius: 10rpx;
            box-shadow: 0 0 10rpx #eee;
            &-title {
                display: flex;
                align-items: center;
                .avatar {
                    width: 86rpx;
                    height: 86rpx;
                    border-radius: 50%;
                    overflow: hidden;
                }
                .title-con {
                    flex: 1;
                    padding-left: 30rpx;
                    .title {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 6rpx;
                    }
                }
            }
            &-desc {
                padding: 30rpx 0;
            }
            &-imgs {
                display: flex;
                flex-wrap: wrap;
                margin-right: -20rpx;
                .img-con {
                    width: 33.333%;
                    height: 216rpx;
                    padding: 0 20rpx 20rpx 0;
                    box-sizing: border-box;
                }
                .img-info {
                    border-radius: 10rpx;
                }
            }
            &-detail {
                background: #ededed;
                padding: 20rpx;
                border-radius: 8rpx;
                .detail {
                    display: flex;
                    align-items: center;
                    &-avatar {
                        width: 160rpx;
                        height: 160rpx;
                    }
                    &-con {
                        flex: 1;
                        padding-left: 20rpx;
                        .title {
                            line-height: 36rpx;
                        }
                        .total {
                            margin: 20rpx 0 10rpx;
                        }
                        .price {
                            display: flex;
                        }
                    }
                }
            }
            &-praise {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 30rpx;
                .praise {
                    &-lf {
                        display: flex;
                        align-items: center;
                    }
                }
                .icon-avatar {
                    width: 40rpx;
                    height: 40rpx;
                    border-radius: 50%;
                    margin-right: 10rpx;
                }
                .icon-zan {
                    margin-right: 10rpx;
                }
            }
        }
    }
}
</style>

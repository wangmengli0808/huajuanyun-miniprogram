<template>
    <div class="container">
        <nav-bar :navTitle="'用户协议'" :backShow="true"></nav-bar>
        <div class="rule-box" v-html="ruleData.content"></div>
    </div>
</template>

<script>
import Http from "../../../utils/http";
import NavBar from "../../../components/Navbar";
export default {
    components: {
        NavBar
    },
    data() {
        return {
            ruleData: {}
        }
    },
    mounted: function() {
        this.getRules()
    },
    methods: {
        getRules() {
            wx.showLoading({
                title: '加载中',
            });
            let that = this;
            Http.POST({
                url: Http.API_URL.RULECONTENT,
                data: {
                    type: 'agreement'
                }
            }).then((res) => {
                if (res.code === 1) {
                    that.ruleData = res.data
                }
                wx.hideLoading();
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    background: #fff;
}
.rule-box {
    font-size: 26rpx;
    line-height: 50rpx;
    padding: 15rpx 30rpx;
}
</style>

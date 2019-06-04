<script>
import { getUser, getApp } from "./utils/util";

export default {
    created() {
        wx.setStorageSync("systemInfo", wx.getSystemInfoSync());
        wx.setStorageSync("menuBounding", wx.getMenuButtonBoundingClientRect());

        let systemInfo = wx.getSystemInfoSync();
        let navH = systemInfo.screenHeight - systemInfo.windowHeight;
        let navHeight = navH > 0 ? navH : 48;
        wx.setStorageSync("navHeight", navHeight);
    }
};
</script>

<script>
import { getUser } from "./utils/util";

export default {
    mounted() {
        wx.setStorageSync("systemInfo", wx.getSystemInfoSync());
        wx.setStorageSync("menuBounding", wx.getMenuButtonBoundingClientRect());

        let systemInfo = wx.getSystemInfoSync();
        let navH = systemInfo.screenHeight - systemInfo.windowHeight;
        let navHeight = navH > 0 ? navH : 48;
        wx.setStorageSync("navHeight", navHeight);

        // getUser().then(function(res) {
        //     console.log(res);
        // });
    }
};
</script>

<script>
import Http from "./utils/http";
    
export default {
  created() {
    wx.setStorageSync('systemInfo', wx.getSystemInfoSync())
    wx.setStorageSync('menuBounding', wx.getMenuButtonBoundingClientRect())
  }
};
</script>

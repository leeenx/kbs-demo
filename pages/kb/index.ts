// app.ts
import { KbsPage } from "../../utils/kbs-sdk";
KbsPage({
  watch: true,
  defaultKbsRoute: 'page-b',
  dslBase: 'http://127.0.0.1:9000/',
  defaultContainer: '/pages/kb/index',
  headlessContainer: '/pages/kb-headless/index',
  onShow() {
    wx.hideHomeButton();
    console.log('------带头部的页面窗口');
  }
});

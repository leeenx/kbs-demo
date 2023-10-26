// app.ts
import { KbsPage } from "kbs-sdk";
import { defaultPageConfig } from "../../utils/common";

KbsPage({
  data: {
    loading: true,
    error: false
  },
  ...defaultPageConfig,
  onShow() {
    wx.hideHomeButton();
    console.log('------带头部的页面窗口');
  },
  handleLoad() {
    this.setData({ loading: false });
  },
  handleError() {
    this.setData({ loading: false, error: true });
  }
});

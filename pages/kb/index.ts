// app.ts
import { KbsPage } from "kbs-sdk";
import { defaultPageConfig } from "../../utils/common";

KbsPage({
  ...defaultPageConfig,
  onShow() {
    wx.hideHomeButton();
    console.log('------带头部的页面窗口');
  }
});

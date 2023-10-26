import { KbsPage } from "kbs-sdk";
import { defaultPageConfig } from "../../utils/common";

KbsPage({
  data: {
    loading: true
  },
  ...defaultPageConfig,
  onShow() {
    console.log('------没有头部的页面窗口');
  },
  handleLoad() {
    this.setData({ loading: false });
  }
});

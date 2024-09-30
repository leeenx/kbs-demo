import { KbsPage } from "kbs-sdk";

KbsPage({
  data: {
    loading: true,
    error: false,
    props: {
      enableCache: true,
      // cacheTime, // 缓存时间默认为7天，单位毫秒
      // cacheMaxSize, // 缓存 size，单位 mb，默认50M
    },
  },
  onShow() {
    console.log('------没有头部的页面窗口');
  },
  handleLoad() {
    this.setData({ loading: false });
  },
  handleError() {
    this.setData({ loading: false, error: true });
  }
});

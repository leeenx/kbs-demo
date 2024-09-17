import { navigate, getDslUrl, importModule, fromHtml } from "kbs-sdk";

Page({
  gotoEchartsDemo() {
    wx.navigateTo({ url: '/pages/echarts-demo/index' });
  },
  gotoDemo() {
    navigate('/echarts-demo/', { pageTitle: 'demo' });
  },
  gotoPageA() {
    navigate('/page-b/', { pageTitle: '外部页面A' });
  },
  gotoPageB() {
    navigate('/page-a/', { pageTitle: '外部页面B' }, { headless: true });
  },
  gotoInjectComponent() {
    wx.navigateTo({ url: '/pages/inject-component/index' });
  },
  async loadSdk() {
    /**
     * 通过 fromHtml 可以提取到 url
     */
    const path = await fromHtml(getDslUrl('/sdk/'));
    const { default: sdk } = await importModule({ path });
    sdk();
  }
});

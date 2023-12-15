import { navigate } from "kbs-sdk";
import load from 'kbs-dsl-loader';
import resolve from 'kbs-dsl-resolver';
import { getDslUrl } from 'kbs-sdk';

Page({
  gotoEchartsDemo() {
    wx.navigateTo({ url: '/pages/echarts-demo/index' });
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
    // @ts-ignore
    const sdk = await load({
      url: getDslUrl('/sdk/'),
      fromHtml: true
    });
    resolve(sdk).default();
  }
});

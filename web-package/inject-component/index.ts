import { getDslUrl, fromHtml } from 'kbs-sdk';

Page({
  data: {
    props: null
  },
  onShow() {
    wx.hideHomeButton();
    console.log('------带头部的页面窗口');
  },
  async onLoad() {
    const url = await fromHtml(getDslUrl('/little-component/'));
    this.setData({
      props: { url }
    });
  }
});

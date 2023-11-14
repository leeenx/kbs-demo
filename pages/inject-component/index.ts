import { getDslUrl } from 'kbs-sdk';

Page({
  data: {
    props: null
  },
  onShow() {
    wx.hideHomeButton();
    console.log('------带头部的页面窗口');
  },
  onLoad() {
    this.setData({
      props: {
        url: getDslUrl('/little-component/')
      }
    });
  }
});

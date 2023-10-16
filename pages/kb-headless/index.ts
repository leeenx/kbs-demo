import { KbsPage } from "../../utils/kbs-sdk";

KbsPage({
  watch: true,
  dslBase: 'http://127.0.0.1:9000/',
  defaultContainer: '/pages/kb/index',
  headlessContainer: '/pages/kb-headless/index',
  onShow() {
    console.log('------没有头部的页面窗口');
  }
});

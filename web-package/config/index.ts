import { registerToGlobleScope } from "kbs-dsl-resolver";
/**
 * 统一的 web 分包配置
 */
registerToGlobleScope({
  // watch: false, // 热更新监听，暂不支持
  // dslBase: 'https://www.leeenx.cn/dist',
  dslBase: 'http://127.0.0.1:9000',
  defaultContainer: '/web-package/page/index',
  headlessContainer: '/web-package/page-headless/index',
});

Page({});

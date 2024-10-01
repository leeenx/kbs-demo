import { registerToGlobleScope } from "kbs-dsl-resolver";
/**
 * 统一的 web 分包配置
 */
registerToGlobleScope({
  // watch: false, // 热更新监听，暂不支持
  // dslBase: 'https://www.leeenx.cn/dist',
  /**
   * 从 html 提取 dsl 的地址，缺省值
   * 如果传入值为 false，则表示获取到的地址为 dsl链接
   */
  alwaysFromHtml: true,
  enableCache: true, // 是否开启缓存
  cacheCount: 2, // 页面的缓存个数
  dslBase: 'http://127.0.0.1:9000',
  defaultContainer: '/taro-web-package/pages/index/index',
  headlessContainer: '/taro-web-package/pages/headless/index',
  // loadingComponent: '加载中...', // 页面加载组件，可以组件替代
  // errorComponent: '失败', // 加载失败组件
});

Page({});

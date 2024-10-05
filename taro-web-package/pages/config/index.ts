import { registerToGlobleScope } from "kbs-dsl-resolver";
/**
 * 统一的 web 分包配置
 */
registerToGlobleScope({
  // watch: false, // 热更新监听，暂不支持
  /**
   * 从 html 提取 dsl 的地址，缺省值
   * 如果传入值为 false，则表示获取到的地址为 dsl链接
   */
  alwaysFromHtml: true,
  enableCache: true, // 是否开启缓存
  /**
   * 页面的缓存个数，推荐值为2。
   * 分包页面在页面栈同时存在的个数小于或等cacheCount时，
   * 页面通过通过缓存产生不需要重新初始化页面，
   * 如果大于 cacheCount 时，打开的页面需要重新初始化，体验会下降。
   * 业务分包可以通过「increaseMemoCache(nameSpace, increaseCount)」方法做动态扩容
   */
  cacheCount: 2,
  // dslBase: 'http://127.0.0.1:9000', // 本地 dsl 服务
  dslBase: 'https://www.leeenx.cn', // 生产环境 dsl 服务
  defaultContainer: '/taro-web-package/pages/index/index',
  headlessContainer: '/taro-web-package/pages/headless/index',
  // loadingComponent: '加载中...', // 页面加载组件，可以组件替代
  // errorComponent: '失败', // 加载失败组件
});

Page({});

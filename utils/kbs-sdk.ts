import { registerToGlobleScope, globalScope } from 'kbs-dsl-resolver';

// 获取当前页面
export const getCurrentPage = () => {
  const pages = getCurrentPages();
  const lastIndex = pages.length - 1;
  return pages[lastIndex];
};

// 获取当前的 options
export const getParams = () => {
  const page = getCurrentPage();
  return page.options;
};

// 返回指定 key 的 param
export const getParam = (key: string) => {
  const params = getParams();
  return params[key];
};

// 返回 dsl 地址
const getDslUrl = (route: string) => {
  const { dslBase } = globalScope;
  let page = route;
  if (dslBase && !/^http(s?):/.test(route)) {
    page = `${dslBase}${route}`
  }
  return page;
}

// 返回微信小程的路由
const getWxRoute = (route: string, params: any, headless: boolean) => {
  const {
    defaultContainer,
    headlessContainer
  } = globalScope;
  const url = headless ? headlessContainer : defaultContainer;
  if (!url) {
    // 表示「headlessContainer」&「defaultContainer」没有默认值
    throw new Error('「headlessContainer」或「defaultContainer」未指定路由');
  }
  const page = getDslUrl(route);
  if (params && typeof params === 'object') {
    let paramsStr = '';
    paramsStr = Object.entries(params)
      .map(([key, value]) => {
        const type = typeof value;
        if (['number', 'string', 'boolean'].includes(type)) {
          return `${key}=${value}`;
        }
        if (type === 'object') {
          return `${key}=${encodeURIComponent(JSON.stringify(value))}`
        }
        return `${key}=`;
      })
      .join('&');
    if (paramsStr) {
      return `${url}?route=${page}&${paramsStr}`;
    }
  }
  return `${url}?route=${page}`;
}

interface NavigateConfig {
  replace: boolean;
  headless: boolean;
}

// 跳转
registerToGlobleScope({
  navigate: (
    route: string,
    params: any,
    config?: NavigateConfig
  ): Promise<void> => new Promise((resolve, reject) => {
    const { replace = false, headless = false } = config || {};
    const options = {
      url: getWxRoute(route, params, headless),
      success: () => resolve(void 0),
      fail() {
        reject(new Error(`navigate 失败: + ${JSON.stringify({ route, params, replace })}`));
      }
    };
    if (replace) {
      wx.redirectTo(options);
    } else {
      wx.navigateTo(options);
    }
  })
});

interface WatchOptions {
  protocol?: 'ws';
  host?: string;
  port?: number;
  entry?: string;
  update?: (json: any) => void;
};

/**
 * KbsPage 是封装后的 Page 组件
 * options 上的 route 和 params 被视为 kbs 的路由和路由参数
 */
interface KbsPageOptions extends WechatMiniprogram.Page.DataOption {
  defaultKbsRoute?: string;
  dslBase?: string;
  watch?: boolean;
  watchOptions?: WatchOptions;
  defaultContainer?: string;
  headlessContainer?: string;
};
export const KbsPage = (options: KbsPageOptions) => {
  const {
    onShow,
    watch = false,
    watchOptions = null,
    defaultKbsRoute = '',
    defaultContainer,
    headlessContainer,
    dslBase
  } = options;
  if (dslBase) {
    registerToGlobleScope({
      defaultContainer,
      headlessContainer,
      dslBase
    });
  }
  Object.assign(options, {
    onShow() {
      const { route, pageTitle } = getParams();
      if (pageTitle) {
        wx.setNavigationBarTitle({ title: pageTitle });
      }
      onShow?.bind(this)();
      this.setData({
        watch,
        watchOptions,
        url: getDslUrl(route || defaultKbsRoute)
      });
    }
  });
  return Page(options);
};

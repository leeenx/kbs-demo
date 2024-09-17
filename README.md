# 小程序 web 分包

建议以「独立分包」的形式嵌入到对应的项目中。具体可以参考 **web-package**。
独立分包的注意事项：需要把依赖都放到独立分包中。以「web-package」目录为例，创建了单独的依赖 package.json，并且在「project.config.json」中配置：

```
"setting": {
  "packNpmManually": true,
  "packNpmRelationList": [
      {
          "packageJsonPath": "./web-package/package.json",
          "miniprogramNpmDistDir": "/web-package/"
      }
  ]
}
```

上面的配置是保证独立分包在构建时会把依赖安装到独立分包中。

# 动态加载 dsl-sdk

由于 web 分包的完整依赖的体积比较大，并不适合安装到主包中去。但是如果主包需要加载 dsl-sdk 可以安装 web分包的3个依赖：

```
npm install kbs-dsl-loader
npm install kbs-dsl-resolver
```

通过以下语句载入 dsl-sdk
```
import { importModule } from 'kbs-dsl-loader';
const echarts = await importModule({ path: 'path-to-dsljs' });
```

通过 kbs-dsl-maker 生成的可以这样写：
```
import { importModule, fromHtml } from 'kbs-dsl-loader';
const path = await fromHtml(getDslUrl('/echarts-sdk/'));
const echarts = await importModule({ path });
```

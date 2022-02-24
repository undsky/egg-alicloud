# egg-alicloud

> alicloud plugin for egg

## 安装

```bash
$ npm i egg-alicloud --save
# or
$ yarn add egg-alicloud
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[@alicloud/dyvmsapi20170525](https://www.npmjs.com/package/@alicloud/dyvmsapi20170525)
[@alicloud/fc2](https://www.npmjs.com/package/@alicloud/fc2)
[@alicloud/fnf-2019-03-15](https://www.npmjs.com/package/@alicloud/fnf-2019-03-15)
[@alicloud/openapi-client](https://www.npmjs.com/package/@alicloud/openapi-client)
[@alicloud/pop-core](https://github.com/aliyun/openapi-core-nodejs-sdk)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.alicloud = {
  enable: true,
  package: 'egg-alicloud',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.alicloud = {

};
```

## 示例

## [查看更多项目](https://www.undsky.com)

## License

[MIT](LICENSE)
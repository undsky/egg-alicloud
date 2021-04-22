<!--
 * @Author: 姜彦汐
 * @Date: 2021-04-22 09:09:19
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-04-22 09:51:43
 * @Description: 
 * Contact: jiangyanxi@live.com
 * @FilePath: /egg-alicloud/README.md
-->
# egg-alicloud
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
## License

[MIT](LICENSE)
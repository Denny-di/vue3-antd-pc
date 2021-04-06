# Vue 3

## 准备工作
- [node.js](https://nodejs.org/zh-cn/)
- [vue-cli (4.5.x)](https://cli.vuejs.org/zh/)
- [axios (ajax)](https://www.kancloud.cn/yunye/axios/234845)
- [Ant Design Vue (2.x 支持 Vue 3)](https://2x.antdv.com/docs/vue/introduce-cn)

## 开发
```bash
    # 安装依赖
    yarn install
    #OR
    npm install

    # 本地开发 开启服务
    yarn serve
    #OR
    npm run serve

    # 打包
    yarn buled
    #OR
    npm run build

    # lint
    yarn lint
    #OR
    npm run lint
```

## 目录结构

```shell
├── public                     // html出口模板
├── src                        // 源代码
│   ├── assets                 // 静态资源
│   ├── common                 // 全局公用方法
│   ├── components             // 全局公用组件
│   ├── store                  // 全局store管理
│   ├── App.vue                // 入口页面
│   ├── view                   // view
│   ├── router                 // 路由
│   └── main.js                // 入口
├── .browserslistrc            // 浏览器的支持情况
├── .editorconfig              // 通用的编辑器配置格式
├── .babel.config.js           // babel-loader 配置
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── package.json               // package.json
└── vue.config.js              // webpack自定义配置
```

## 本项目 git Commit message 统一规范(优雅的提交 Commit 信息)

使用[Angular 团队提交规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

主要有以下组成
- 标题行: 描述主要修改类型和内容
- 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
- 页脚注释: 放 Breaking Changes 或 Closed Issues

常用的修改项
- type: commit 的类型
- feat: 新特性
- fix: 修改问题
- refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）
- docs: 文档修改
- style: 格式（不影响代码运行的变动）
- test: 测试用例修改
- chore: 构建过程或辅助工具的变动
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述
- body: commit 具体修改内容, 可以分为多行
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

### 使用`Commitizen`代替 git commit

可以使用[cz-cli](https://github.com/commitizen/cz-cli)工具代替 `git commit`

**[⬆ 返回顶部](#准备工作)**

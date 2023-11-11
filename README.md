# Akari Site

AkariBot 的帮助文档。

此网站使用 [Docusaurus 3](https://docusaurus.io/) 构建，一个现代静态网站生成器。

改编自[小可 · Wiki](https://bot.teahouse.team/)。

## 安装

```
$ yarn
```

## 本地开发

```
$ yarn start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都是实时反映的，而无需重新启动服务器。

## 构建

```
$ yarn build
```

此命令将静态内容生成到 `build` 目录中，并且可以使用任何静态内容托管服务来提供。

## 部署

### GitHub pages

使用 SSH：

```
$ USE_SSH=true yarn deploy
```

不使用 SSH：

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用 GitHub pages 进行托管，此命令是构建网站并推送到 `gh pages` 分支的方便方法。

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSilianZ%2Fakari-site)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2FSilianZ%2Fakari-site)

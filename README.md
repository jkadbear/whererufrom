# WhereRUFrom

本工具为一个网页APP，用于对论文所署地址进行学院系别程度的分类，接收的上传文件格式为`.xlsx`，见`test`目录下样例格式。

## 使用架构

Vue + Express + Nginx + Docker

## 开发环境

VSCode + EditorConfig（插件）

## 开发模式

```
cd /path/to/whererufrom
docker-compose up --build
```

访问`http://localhost`即可。

首次安装可能需要较长时间。开发模式下client端和server端都是热更新的。

## 部署模式

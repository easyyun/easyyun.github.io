---
sidebar_position: 1
description: 开发流程对接，app_key、配置存储和回调地址等参数配置说明
---

# 基础

## 开发接口对接流程

### 测试环境对接流程

![测试环境对接流程](/img/base_test.png)

### 正式环境对接流程

![正式环境对接流程](/img/base_product.png)

## 基本参数

### request_url
**请求地址**

| 环境 |  https |
| --- | --- |
| 测试 | `https://test-rest-api.easyyun.com/v1/router/rest` |
| 正式 | `https://rest-api.easyyun.com/v1/router/rest` |



### app_key

`app_key`代表应用的key，测试环境和正式环境的`app_key`不一样，权限也不一样，测试环境有请求频率、文件大小等限制。申请`app_key`请[公众号留言](/docs/guide/faq#如何申请app-key)


### token

应用请求需要设置token，每个`app_key`只有1个有效token，token_period默认有效期为24小时（86400秒），最长时间30天（2592000秒）；请妥善保管token。以下示例中提供的`app_key`无法更新token，请使用自己的 `app_key`。建议应用合理设置token请求的频率。

**设置token方式**
```bash
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=config.token' \
-d 'token_period=86400' \
-d 'app_key=xxx'
```


### 其他说明
为兼容不同开发语言问题，请求和响应参数字段默认为**字符串**，不同开发语言处理字段的时候请自行加引号或自身开发语言处理，比如"1","true"等


## 系统配置config

### storage 存储

**配置自己storage的好处**
EasyYun本身只提供转换服务，不提供文件存储服务，文件1天后自动删除。你设置`storage`后，
接口转换的文件file_url你无需另外写代码下载和存储功能，可直接存储到你的服务器资源上，减少开发步骤。此配置接口执行一次即可永久有效，再次执行会覆盖原先的值。

目前支持阿里云OSS、腾讯云COS。
- `storage_type` 可选值阿里云：`aliyun.oss`、腾讯云：`tencent.cos`、
- `storage_config`值实例：阿里云OSS：`{"bucket":"xxx","host":"http://xxx.xxx.com","endpoint":"oss-cn-xxx.aliyuncs.com","access_key_id":"xxx","access_key_secret":"xxx"}`

腾讯COS：`{"host": "http://xxx.xxx.com", "bucket": "xxx", "endpoint": "cos.xxx.myqcloud.com", "access_key_id": "xxx", "access_key_secret": "xxx"}`
```bash
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=config.storage' \
-d 'token=xxx' \
-d 'storage_type=aliyun.oss' \
-d 'storage_config={"bucket":"xxx","host":"http://xxx.xxx.com","endpoint":"oss-cn-xxx.aliyuncs.com","access_key_id":"xxx","access_key_secret":"xxx"}'
```


### notify_url 回调地址 

当使用异步通知的时候设计的回调地址，比如你有大量的任务，不想等待任务结果，使用异步方式，程序会立即返回1个request_id。[主动查询异步结果](/docs/api/pdf.task-result)
```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=config.notify_url' \
-d 'token=xxx' \
-d 'notify_url=xxx' \
-d 'notify_token=xxx'
```



如果你的服务器有白名单限制，你可以通过request_id主动查询任务结果。

## 应用options字段

### pages格式

| 支持格式 | 实例 | 说明 |
| --- | --- | --- |
| 单个数字 | 1 |  |
| ,间隔 | 1,2,4 |  |
| n-m | 2-4 | 从n到m |
| even | even | 单数  |
| odd | odd | 复数  |


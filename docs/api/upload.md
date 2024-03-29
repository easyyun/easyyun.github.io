---
sidebar_position: 2
description: 如何上传文件?
---

# 文件上传

**接口说明**
通过文件上传接口，你获得1个可对外访问的互联网文件地址。


## 什么时候需要此接口?

PDF、图片等文件地址统一为互联网可访问url。

:::tip

本地文件需先上传到EasyYun，比如本地开发环境，或者内网（限制外网IP）等。

如果**文件地址已经可以对外访问，无需此接口**。

默认上传的文件有大小限制，外网文件地址的大小暂时没有限制，推荐使用外网文件地址直接使用在API接口。

::: 



## 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/docs/api/base#request-url)

**请求参数，POST请求**

| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | upload，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/docs/api/base#token)|
| file | String | 是 | 本地文件地址，以@开头|

**响应参数，类型为JSON**

| 名称 | 类型 | 示例值 | 描述 |
| --- | --- | --- | --- |
| code | String | 200 | 见[code说明](/docs/api/code) |
| data | String | {"file_url": "xxx"} | json格式消息内容 |
| code_msg | String | "成功" | code描述 |

**请求示例**
```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-F 'method=upload' \
-F 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-F 'file=@/Users/easyyun/files/one_page.pdf'
```

**响应示例**
```shell
{
	"code": "200",
	"data": {
		"file_url": "https://static.easyyun.com/static/example/files/one_page.pdf"
	},
	"code_msg": "true"
}
```

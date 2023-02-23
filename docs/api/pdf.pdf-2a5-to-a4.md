---
sidebar_position: 19
description: 发票合并打印API，将2个电子发票（A5）PDF合并成到1个A4页面，方便打印
---

# 发票合并打印


**说明**
将2个电子发票（A5）PDF合并成到1个A4页面，方便打印


#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/docs/api/base#request-url)

**请求参数，POST请求**

| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.pdf2A5ToA4，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/docs/api/base#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/docs/api/pdf.task-result) |
| input | String | 是 | {"file_url":["https://static.easyyun.com/static/example/files/a5_1.pdf","https://static.easyyun.com/static/example/files/a5_2.pdf"]} ，json格式，只能传2个PDF文件|


**响应参数，类型为JSON**

| 名称 | 类型 | 示例值 | 描述 |
| --- | --- | --- | --- |
| request_id | String | xxx | 任务id |
| code | String | 200 | 见[code说明](/docs/api/code) |
| data | String | {"file_url": "xxx"} | json格式消息内容 |
| code_msg | String | "成功" | code描述 |

**请求示例**
```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.pdf2A5ToA4' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input={"file_url":["https://static.easyyun.com/static/example/files/a5_1.pdf","https://static.easyyun.com/static/example/files/a5_2.pdf"]}'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": "https://static.easyyun.com/static/example/out/pdf2A5ToA4.pdf"
	},
	"code_msg": "请求成功"
}
```

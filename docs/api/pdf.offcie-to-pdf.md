---
sidebar_position: 16
description: Office转PDF API， 支持word(docx, doc)、excel(xlsx, xls)、ppt(pptx)格式
---

# Office转PDF

**说明**
- 支持word(docx, doc)、excel(xlsx, xls)、ppt(pptx)格式



#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/docs/api/base#request-url)

**请求参数，POST请求**

| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.officeToPdf，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/docs/api/base#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/docs/api/pdf.task-result) |
| input | String | 是 | 输入文件，可访问互联网url，比如 https://static.easyyun.com/static/example/files/1.docx  |



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
-d 'method=pdf.officeToPdf' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=https://static.easyyun.com/static/example/files/1.docx'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": "https://static.easyyun.com/static/example/out/1.pdf"
	},
	"code_msg": "请求成功"
}
```

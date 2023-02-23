---
sidebar_position: 10
description: PDF拆分成PDF API，将1个PDF文件按照每隔多少页进行拆分，默认按照每1页拆分。比如1个PDF有10页，将产生10个PDF，可指定options.span 来设置间隔页数
---

# PDF拆分成PDF


**说明**
将1个PDF文件按照每隔多少页进行拆分，默认按照每1页拆分。比如1个PDF有10页，将产生10个PDF，可指定options.span 来设置间隔页数


#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/docs/api/base#request-url)

**请求参数，POST请求**

| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.splitToPdf，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/docs/api/base#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/docs/api/pdf.task-result) |
| input | String | 是 | 输入文件，可访问互联网url，比如 https://static.easyyun.com/static/example/files/four_pages.pdf |
| options | String | 是 | json格式，比如{"span": "2","zip": "0"} |

**options字段说明**

- span 必须，指定间隔页数。默认1。如"1"，按照每1页分割，“2”，按照每2页分割。
- zip 非必须，是否压缩，0不压缩，1压缩


**响应参数，类型为JSON**

| 名称 | 类型 | 示例值 | 描述 |
| --- | --- | --- | --- |
| request_id | String | xxx | 任务id |
| code | String | 200 | 见[code说明](/docs/api/code) |
| data | String | {"file_url": ["",""]} | json格式消息内容 |
| code_msg | String | "成功" | code描述 |

**请求示例**
```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.splitToPdf' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=https://static.easyyun.com/static/example/files/four_pages.pdf' \
-d 'options={"span": "2","zip":"1"}'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": ["https://static.easyyun.com/static/example/out/four_pages_1-2.pdf","https://static.easyyun.com/static/example/out/four_pages_3-4.pdf"],
		"zip_url": "https://eyfile.oss-cn-hangzhou.aliyuncs.com/eaysyun/20220923/yuna6b877026687488597772f3142c960c5fourpages.zip"
	},
	"code_msg": "请求成功"
}
```

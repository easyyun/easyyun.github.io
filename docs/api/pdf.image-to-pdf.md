# 图片转PDF

**说明**
- 单张图片或多张图片转换成1个pdf



#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/api/base.html#request-url)

**请求参数，POST请求**
| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.imageToPdf，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/api/base.html#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/api/pdf.task-result.html) |
| input | String | 是 | {"file_url":["http://www.easyyun.com/static/example/files/1.jpg","http://www.easyyun.com/static/example/files/2.png"]} ，json格式|

**响应参数，类型为JSON**
| 名称 | 类型 | 示例值 | 描述 |
| --- | --- | --- | --- |
| request_id | String | xxx | 任务id |
| code | String | 200 | 见[code说明](/api/code.html) |
| data | String | {"file_url": "xxx"} | json格式消息内容 |
| code_msg | String | "成功" | code描述 |

**请求示例**
```shell
curl -X POST 'http://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.imageToPdf' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input={"file_url":["http://www.easyyun.com/static/example/files/1.jpg","http://www.easyyun.com/static/example/files/2.png"]}'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": "http://www.easyyun.com/static/example/out/imageToPdf_1.pdf"
	},
	"code_msg": "请求成功"
}
```

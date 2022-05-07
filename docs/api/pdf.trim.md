# PDF提取修剪


**说明**
1个PDF文件提取其中的页面，重新组合成新的1个PDF。

> 此接口可以将PDF的页面减少，不能重新排列页面顺序。


#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/api/base.html#request-url)

**请求参数，POST请求**
| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.tirm，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/api/base.html#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/api/pdf.task-result.html) |
| input | String | 是 | 输入文件，可访问互联网url，比如 http://www.easyyun.com/static/example/files/four_pages.pdf |
| options | String | 是 | json格式，比如{"pages": "1,2"} |

**options字段说明**

- [pages](/api/base.html#pages格式) 必须，指定页数，如"1"，第1页；如"1,2"，第1和2页；如"n-m"，从n到m页；支持even、odd



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
-d 'method=pdf.tirm' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=http://www.easyyun.com/static/example/files/four_pages.pdf' \
-d 'options={"pages": "1,3"}'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": "http://www.easyyun.com/static/example/out/trim_1_3.pdf"
	},
	"code_msg": "请求成功"
}
```

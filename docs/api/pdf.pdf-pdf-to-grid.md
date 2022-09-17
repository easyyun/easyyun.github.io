# 九宫格PDF


**说明**
将 1个PDF，按照9宫格方式排列，或将1个PDF文件变成缩略格式，排列格式支持2=2x1, 3=3x1, 4=2x2, 8=4x2, 9=3x3, 12=4x3, 16=4x4。如1个PDF有22页，采用就9宫格，变成3页，其中每页9个页面。


#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/api/base.html#request-url)

**请求参数，POST请求**
| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.pdfToGrid，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/api/base.html#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/api/pdf.task-result.html) |
| input | String | 是 | 输入文件，可访问互联网url，比如 http://www.easyyun.com/static/example/files/22_pages.pdf  |
| options | String | 是 | json格式，比如{"grid": "9","direction":"vertical"} |

**options字段说明**

- grid 必须，每页排列数量，可选值：2、3、4、8、9、12、16，（2=2x1, 3=3x1, 4=2x2, 8=4x2, 9=3x3, 12=4x3, 16=4x4），默认9
- direction 非必须，可选值：vertical、horizontal。（vertical纵向,A4纸张， horizontal 横向，Ledger纸张），默认vertical纵向



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
-d 'method=pdf.pdfToGrid' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=http://www.easyyun.com/static/example/files/22_pages.pdf' \
-d 'options={"grid": "9","direction": "horizontal"}'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": "http://www.easyyun.com/static/example/out/pdfToGrid.pdf"
	},
	"code_msg": "请求成功"
}
```

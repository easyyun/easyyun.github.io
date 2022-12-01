# PDF转图片


**说明**
将1个PDF中指定的页面拆分成单个图片(PNG)格式或长图(JPG)格式，并可以设置图片的质量大小。




#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/api/base.html#request-url)


**请求参数，POST请求**
| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.splitToImage，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/api/base.html#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/api/pdf.task-result.html) |
| input | String | 是 | 输入文件，可访问互联网url，比如 http://www.easyyun.com/static/example/files/one_page.pdf |
| options | String | 是 | json格式，比如{"quality": "middle", "page": "1"} |

**options字段说明**

- quality 必须。图片质量，可选值：high、middle、low
- page 必须。支持1；1-3；2,3；1-N，N代表最后一页，默认1-N；-1，长图



**响应参数，类型为JSON**
| 名称 | 类型 | 示例值 | 描述 |
| --- | --- | --- | --- |
| request_id | String | xxx | 任务id |
| code | String | 200 | 见[code说明](/api/code.html) |
| data | String | {"file_url": "xxx"} | json格式消息内容 |
| code_msg | String | "成功" | code描述 |

**请求示例**
```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.splitToImage' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'async=0' \
-d 'input=http://www.easyyun.com/static/example/files/four_pages.pdf' \
-d 'options={"quality": "middle", "page": "1-N"}'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": ["http://www.easyyun.com/static/example/out/splitImage_1.png","http://www.easyyun.com/static/example/out/splitImage_2.png","http://www.easyyun.com/static/example/out/splitImage_3.png","http://www.easyyun.com/static/example/out/extract/splitImage_4.png"]
	},
	"code_msg": "请求成功"
}
```

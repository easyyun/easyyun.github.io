# PDF旋转


**说明**
- 将1个PDF文件旋转，度数值可选-270、-180、-90、90、180、270度
- 1个PDF文件指定的页数旋转



#### 接口说明

**请求地址**

`request_url` 参考[基础 > request_url](/api/base.html#request-url)

**请求参数，POST请求**
| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.rotate，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/api/base.html#token)|
| async | String | 否 | 任务方式，默认0，代表同步；1代表异步，异步需要设置回调地址，或者[主动查询结果](/api/pdf.task-result.html) |
| input | String | 是 | 输入文件，可访问互联网url，比如 http://www.easyyun.com/static/example/files/one_page.pdf  |
| options | String | 是 | json格式，比如{"rotation": "90","pages":"1,2"} |

**options字段说明**

- rotation 必须，旋转度数，值可选-270、-180、-90、90、180、270度，
- [pages](/api/base.html#pages格式) 非必须，指定页数，如"1"，第1页旋转；如"1,2"，第1和2页旋转。如果为空，或者无此字段，代表整个文件旋转。


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
-d 'method=pdf.rotate' \
-d 'token=xxx' \
-d 'input=http://www.easyyun.com/static/example/files/one_page.pdf' \
-d 'options={"rotation": "90"}'
```

**响应示例**
```shell
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": "http://www.easyyun.com/static/example/out/rotation_90.pdf"
	},
	"code_msg": "请求成功"
}
```

# code说明



### 正常返回
```
{
	"request_id": "xxx",
	"code": "200",
	"data": {
		"file_url": "http://www.easyyun.com/static/example/out/merge_one_page_two_pages.pdf"
	},
	"code_msg": "请求成功"
}
```

### 异常返回
```
{
	"request_id": "xxx",
	"code": "2001",
	"code_msg": "请求超时"
}
```

| code | 类型 | 描述 |
| --- | --- | --- |
| 200 | String | 请求成功 |
| 404 | String | 找不到请求 |
| 500 | String | 未知或异常错误 |
| 2001 | String | 请求超时 |
| 2002 | String | API权限无足 |
| 2003 | String | API次数已调完 |
| 2004 | String | API参数非法 |
| 2005 | String | app_key错误 |
| 2006 | String | token过期 |
| 2007 | String | 当前任务还未执行完，请稍后获取 |
| 3001 | String | 文件超过大小 |
| 3002 | String | 文件格式不符合 |
| 3003 | String | 文件已损坏或加密 |
| 9999 | String | 未知或其他错误 |



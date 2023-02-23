---
sidebar_position: 3
---

# 获取异步结果

**说明**
获取异步结果


#### 接口说明
当 async="1"，获取异步结果

**请求地址**

`request_url` 参考[基础 > request_url](/docs/api/base#request-url)

**请求参数，POST请求**

| 名称 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| method | String | 是 | pdf.taskResult，固定值 |
| token | String | 是 | 可自行创建或更新，参考[基础 > token](/docs/api/base#token)|
| task_id | String | 是 | 任务ID |



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
-d 'method=pdf.taskResult' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'task_id=xxx'
```

**响应示例**
```shell
{
	"code": "200",
	"code_msg": "请求成功",
	"data": {
		"code": "200",
		"data": "{\"file_url\":\"http://eyfile.easyyun.com/eaysyun/2022-05-05/pdf.merge_71a784e5-2881-45c9-af3c-6a0829f31a00-323036026-164750495801000003.pdf\"}"
	},
	"request_id": "xxx"
}
```

:::tip

如果你没有设置[存储配置项](/docs/api/base#storage-存储)，原文件1天后自动过期，请及时下载转换完的文件。

::: 

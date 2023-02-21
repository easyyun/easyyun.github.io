---
sidebar_position: 1
---

# 快速开始


**PDF文件合并**

```bash
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.merge' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input={"file_url":["https://static.easyyun.com/static/example/files/one_page.pdf","https://static.easyyun.com/static/example/files/two_pages.pdf"]}'
```


**PDF文件压缩**

```bash
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.compress' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=https://static.easyyun.com/static/example/files/big.pdf' \
-d 'options={"quality": "low"}'
```

更多：[API参考](/docs/api/base)
# 快速开始


**PDF文件合并**

```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.merge' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input={"file_url":["http://www.easyyun.com/static/example/files/one_page.pdf","http://www.easyyun.com/static/example/files/two_pages.pdf"]}'
```


**PDF文件压缩**

```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.compress' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=http://www.easyyun.com/static/example/files/big.pdf' \
-d 'options={"quality": "low"}'
```

更多：[API参考](/api/base.html)
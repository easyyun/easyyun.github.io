## EasyYun

**企业级PDF API，基于K8S，坚如磬石**

EasyYun，企业级 PDF API，提供各种在线转换接口,不限定开发语言，Java、PHP、Golang、Python、Ruby、Node、C#通通可以用。

云端API处理，告别安装各种软件，不占计算机资源，开发者新手、高手都可以完成。


**PDF云转换客户端**

小程序、Mac和Windows全舞台，无广告，使用不限次数

### **主要功能**


- [PDF转图片](https://www.easyyun.com/docs/api/pdf.split-to-image)
- [图片转PDF](https://www.easyyun.com/docs/api/pdf.image-to-pdf)
- [PDF提取图片](https://www.easyyun.com/docs/api/pdf.pdf-extract-image)
- [PDF合并](https://www.easyyun.com/docs/api/pdf.merge)
- [PDF压缩](https://www.easyyun.com/docs/api/pdf.compress)
- [PDF拆分](https://www.easyyun.com/docs/api/pdf.split-to-pdf)
- [PDF修剪](https://www.easyyun.com/docs/api/pdf.trim)
- [PDF加密](https://www.easyyun.com/docs/api/pdf.encrypt)
- [PDF旋转](https://www.easyyun.com/docs/api/pdf.rotate)
- [PDF修复](https://www.easyyun.com/docs/api/pdf.pdf-repair)
- [Office转PDF](https://www.easyyun.com/docs/api/pdf.offcie-to-pdf)
- [PDF转Word](https://www.easyyun.com/docs/api/pdf.pdf-to-doc)
- [PDF转PPT](https://www.easyyun.com/docs/api/pdf.pdf-to-pptx)
- [电子发票合并打印](https://www.easyyun.com/docs/api/pdf.pdf-2a5-to-a4)
- [九宫格PDF](https://www.easyyun.com/docs/api/pdf.pdf-to-grid)
- [图片旋转](https://www.easyyun.com/docs/api/img.img-rotate)

### **快速开始**

**PDF文件合并**

```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.merge' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input={"file_url":["https://static.easyyun.com/static/example/files/one_page.pdf","https://static.easyyun.com/static/example/files/two_pages.pdf"]}'
```


**PDF文件压缩**

```shell
curl -X POST 'https://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.compress' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=https://static.easyyun.com/static/example/files/big.pdf' \
-d 'options={"quality": "low"}'
```

更多：[API参考](https://www.easyyun.com/docs/category/api)

文档官网：[https://www.easyyun.com](https://www.easyyun.com)

**联系**

![PDF云转换](https://static.easyyun.com/static/xcx/gongzhonghao.jpg)

### License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)



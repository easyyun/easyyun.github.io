## EasyYun

**企业级 PDF API**

EasyYun，企业级 PDF API，提供各种在线转换接口,不限定开发语言，Java、PHP、Golang、Python、Ruby、Node、C#通通可以用。

云端API处理，告别安装各种软件，不占计算机资源，开发者新手、高手都可以完成。

### **主要功能**


- [PDF转图片](https://easyyun.github.io/api/pdf.split-to-image.html)
- [图片转PDF](https://easyyun.github.io/api/pdf.image-to-pdf.html)
- [PDF提取图片](https://easyyun.github.io/api/pdf.pdf-extract-image.html)
- [PDF合并](https://easyyun.github.io/api/pdf.merge.html)
- [PDF压缩](https://easyyun.github.io/api/pdf.compress.html)
- [PDF拆分](https://easyyun.github.io/api/pdf.split-to-pdf.html)
- [PDF修剪](https://easyyun.github.io/api/pdf.trim.html)
- [PDF加密](https://easyyun.github.io/api/pdf.encrypt.html)
- [PDF旋转](https://easyyun.github.io/api/pdf.rotate.html)
- [PDF修复](https://easyyun.github.io/api/pdf.pdf-repair.html)
- [Office转PDF](https://easyyun.github.io/api/pdf.offcie-to-pdf.html)
- [PDF转Word](https://easyyun.github.io/api/pdf.pdf-to-doc.html)
- [PDF转PPT](https://easyyun.github.io/api/pdf.pdf-to-pptx.html)
- [电子发票合并打印](https://easyyun.github.io/api/pdf.pdf-2a5-to-a4.html)
- [九宫格PDF](https://easyyun.github.io/api/pdf.pdf-to-grid.html)
- [图片旋转](https://easyyun.github.io/api/img.img-rotate.html)

### **快速开始**

**PDF文件合并**

```shell
curl -X POST 'http://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.merge' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input={"file_url":["http://www.easyyun.com/static/example/files/one_page.pdf","http://www.easyyun.com/static/example/files/two_pages.pdf"]}'
```


**PDF文件压缩**

```shell
curl -X POST 'http://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.compress' \
-d 'token=395a25d6fa758bfb6c0d3da007a8b189' \
-d 'input=http://www.easyyun.com/static/example/files/big.pdf' \
-d 'options={"quality": "low"}'
```

更多：[API参考](https://easyyun.github.io/api/base.html)

文档官网：[https://easyyun.github.io](https://easyyun.github.io)

**联系**

![PDF云转换](https://www.easyyun.com/static/xcx/gongzhonghao.jpg)

### License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)



## EasyYun

**PDF云接口**

EasyYun，在线PDF转换API,不限定开发语言，Java、PHP、Golang、Python、Ruby、Node、C#通通可以用。

云端处理，告别安装各种软件，不占计算机资源，开发者新手、高手都可以完成。

### **主要功能**

- [PDF修剪PDF](https://easyyun.github.io/api/pdf.trim.html)
- [PDF合并](https://easyyun.github.io/api/pdf.merge.html)
- [PDF旋转](https://easyyun.github.io/api/pdf.rotate.html)
- [PDF拆分为单页或多页，格式为PDF](https://easyyun.github.io/api/pdf.split-to-pdf.html)
- [PDF拆分为单页图片](https://easyyun.github.io/api/pdf.split-to-image.html)
- [PDF提取图片](https://easyyun.github.io/api/pdf.pdf-extract-image.html)
- [PDF压缩](https://easyyun.github.io/api/pdf.compress.html)
- [PDF加密](https://easyyun.github.io/api/pdf.encrypt.html)
- [图片转PDF](https://easyyun.github.io/api/pdf.image-to-pdf.html)


### **快速开始**

**PDF文件合并**

```shell
curl -X POST 'http://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.merge' \
-d 'token=xxx' \
-d 'input={"file_url":["http://www.easyyun.com/static/example/files/one_page.pdf","http://www.easyyun.com/static/example/files/two_pages.pdf"]}'
```


**PDF文件压缩**

```shell
curl -X POST 'http://test-rest-api.easyyun.com/v1/router/rest' \
-d 'method=pdf.compress' \
-d 'token=xxx' \
-d 'input=http://www.easyyun.com/static/example/files/big.pdf' \
-d 'options={"quality": "low"}'
```

更多：[API参考](https://easyyun.github.io/api/base.html)

[文档官网](https://easyyun.github.io/)

### License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)



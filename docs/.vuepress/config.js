module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'EasyYun',
  description: 'EasyYun提供稳定、极速的PDF转换API，使用http接口协议，Java、PHP、Golang、Python、Ruby、Node、C#等语言都可以完成PDF、图片、Word、Excel、PPT文件转换等编辑功能。',

  head: [
      // 设置 favor.ico，.vuepress/public 下
      [
          'link', { rel: 'icon', href: 'https://www.easyyun.com/static/logo/favicon.ico' }
      ]
  ],


  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://www.easyyun.com/static/logo/logo.png',
    contributors: false,
    lastUpdated: false,
    navbar: [
      // 字符串 - 页面文件路径
      '/README.md',

      // NavbarItem
      {
        text: '指南',
        link: '/guide/README.md',
      },
      // NavbarGroup
      {
        text: 'API参考',
        children: [
            '/api/base.md',
            '/api/upload.md',
            '/api/pdf.trim.md', 
            '/api/pdf.merge.md',
            '/api/pdf.rotate.md',
            '/api/pdf.split-to-pdf.md', 
        
            '/api/pdf.split-to-image.md',
            '/api/pdf.pdf-extract-image.md',
            '/api/pdf.compress.md',
            '/api/pdf.encrypt.md',
            '/api/pdf.image-to-pdf.md',
            '/api/pdf.info.md',
            '/api/pdf.offcie-to-pdf.md',
            '/api/pdf.pdf-to-doc.md',
            '/api/pdf.pdf-to-pptx.md',

            '/api/pdf.pdf-2a5-to-a4.md',
            '/api/pdf.pdf-to-grid.md',


            '/api/img.img-rotate.md',

            '/api/pdf.task-result.md',
            '/api/code.md'
        ],
      },
      {
        text: 'Github',
        link: 'https://github.com/easyyun/easyyun.github.io/',
      },
    ], 
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md', 
            '/guide/getting-started.md',
            '/guide/faq.md'
            ],
        },
      ],
      '/api/': [
        {
          text: 'API参考',
          children: [
            '/api/base.md',
            '/api/upload.md',
            '/api/pdf.trim.md', 
            '/api/pdf.merge.md',
            '/api/pdf.rotate.md',
            '/api/pdf.split-to-pdf.md', 

            '/api/pdf.split-to-image.md',
            '/api/pdf.pdf-extract-image.md',
            '/api/pdf.compress.md',
            '/api/pdf.encrypt.md',
            '/api/pdf.image-to-pdf.md',
            '/api/pdf.info.md',
            '/api/pdf.offcie-to-pdf.md',
            '/api/pdf.pdf-to-doc.md',
            '/api/pdf.pdf-to-pptx.md',

            '/api/pdf.pdf-2a5-to-a4.md',
            '/api/pdf.pdf-to-grid.md',
            '/api/img.img-rotate.md',

            '/api/pdf.task-result.md',            
            '/api/code.md'
          ],
        },
      ],
    },      
  },



}


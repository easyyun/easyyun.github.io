module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'EasyYun',
  description: '提供PDF云转换API',

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
            '/api/pdf.task-result.md',
            '/api/code.md'
          ],
        },
      ],
    },      
  },



}


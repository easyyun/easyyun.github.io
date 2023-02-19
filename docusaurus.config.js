// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EasyYun',
  tagline: '企业级PDF API & PDF云转换App',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://easyyun.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'easyyun', // Usually your GitHub org/user name.
  projectName: 'easyyun-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      // 如果你不需要覆盖默认值，你可以忽略这个语言（比如 zh-Hans）
    },

  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EasyYun',
        logo: {
          alt: 'EasyYun Logo',
          src: 'static/logo/logo_300.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '日志', position: 'left'},

          {
            href: 'https://github.com/easyyun/easyyun.github.io/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',

        copyright: `Copyright © 2021 - ${new Date().getFullYear()} Easyyun, Inc. 
        <a href="" target="_blank">隐私</a>  | <a href="" target="_blank">服务</a> 
        <br /><a href="http://beian.miit.gov.cn/" target="_blank"><small>浙ICP备19040696号-6</small></a> | 
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802012279" target="_blank">
            <img src="img/ba.png"/> <small>浙公网安备 33010802012279号</small></a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

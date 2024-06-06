import { DefaultTheme, defineConfig } from 'vitepress'

// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: 'Vben Admin',
  lang: 'zh-CN',
  description: '一个开箱即用的前端框架',
  lastUpdated: true,
  // head: createHead(),
  head: [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vben, vitejs, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: createNav(),
    
    // https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/zh.ts#L14-L17
    // FIX： 分成两个 sidebar 按照官方文档示例来 生成的sidebar链接有问题
    // sidebar: {
    //   '/guide/': { base: '/guide/', items: sidebarGuide() },
    //   '/components/': { base: '/components/', items: sidebarReference() }
    // },

    sidebar: [
      ...sidebarGuide(),
      ...sidebarReference(),
    ],

    outline: {
      level: [2, 4],
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    editLink: {
      pattern: 'https://github.com/vbenjs/vue-vben-admin-doc/edit/main/:path',
      text: '为此页提供修改建议'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    },
  },
})



/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    // ['meta', { name: 'author', content: 'Vbenjs Team' }],
    // [
    //   'meta',
    //   {
    //     name: 'keywords',
    //     content: 'vben, vitejs, vite, ant-design-vue, vue',
    //   },
    // ],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
    // [
    //   'meta',
    //   {
    //     name: 'viewport',
    //     content:
    //       'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
    //   },
    // ],
    // ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}


function sidebarGuide (): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        {
          text: '介绍',
          link: '/guide/introduction',
        },
        {
          text: '开始',
          link: '/guide/',
        },
        {
          text: '项目配置',
          link: '/guide/settings',
        },
        {
          text: '路由',
          link: '/guide/router',
        },
        {
          text: '菜单',
          link: '/guide/menu',
        },
        {
          text: '权限',
          link: '/guide/auth',
        },
        {
          text: 'Mock&联调',
          link: '/guide/mock',
        },
        {
          text: '组件注册',
          link: '/guide/component',
        },
        {
          text: '样式',
          link: '/guide/design',
        },
        {
          text: '外部模块',
          link: '/guide/lib',
        },
        {
          text: '构建&部署',
          link: '/guide/deploy',
        },
        {
          text: 'Electron',
          link: '/guide/electron',
        },
      ],
    },
    {
      text: '深入',
      items: [
        {
          text: '跨域处理',
          link: '/dep/cors',
        },
        {
          text: '图标',
          link: '/dep/icon',
        },
        {
          text: '国际化',
          link: '/dep/i18n',
        },
        {
          text: '项目规范',
          link: '/dep/lint',
        },
        {
          text: '黑暗主题',
          link: '/dep/dark',
        },
      ],
    },
    {
      text: '其他',
      items: [
        {
          text: '常见问题',
          link: '/other/faq',
        },
        {
          text: '常见疑点',
          link: '/other/doubt',
        },
        {
          text: '测试服务',
          link: '/other/server',
        },
        {
          text: '相关项目',
          link: '/other/project',
        },
      ],
    },
 
  ]
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '指南',
      // link: '/guide/',
      items: [
        {
          text: '指南',
          link: '/guide/introduction',
        },
        {
          text: '深入',
          link: '/dep/icon',
        },
        {
          text: '其他',
          link: '/other/faq',
        },
      ],
    },
    {
      text: '组件',
      // link: '/components/',
      items: [
        {
          text: '介绍',
          link: '/components/introduction',
        },
        {
          text: '全局组件',
          link: '/components/glob/button',
        },
        {
          text: '常用组件',
          link: '/components/basic',
        },
        {
          text: '函数式组件',
          link: '/components/functional/context-menu',
        },
      ],
    },
    {
      text: '相关链接',
      items: [
        {
          text: '完整版预览',
          link: 'https://vben.vvbin.cn',
        },
        {
          text: '完整版源码',
          link: 'https://github.com/vbenjs/vue-vben-admin',
        },
        // {
        //   text: '精简版预览',
        //   link: 'https://vvbin.cn/thin/next',
        // },
        {
          text: '精简版分支',
          link: 'https://github.com/vbenjs/vue-vben-admin/tree/thin',
        },
        {
          text: '文档源码',
          link: 'https://github.com/vbenjs/vue-vben-admin-doc',
        },
        {
          text: '更新日志',
          link: 'https://github.com/vbenjs/vue-vben-admin/blob/main/CHANGELOG.md',
        },
      ],
    },
    {
      text: '社区',
      items: [
        {
          text: 'QQ频道【vben admin】',
          link: 'https://pd.qq.com/s/ahgh62mni',
        },
        {
          text: 'KOOK(新)',
          link: 'https://kaihei.co/6ZPFKi',
        },
        // {
        //   text: 'QQ群：569291866',
        //   link: 'https://qm.qq.com/cgi-bin/qm/qr?k=VI7WhOn0VeeWnX58eODxzF_X3digtJRL&jump_from=webapi',
        // },
        {
          text: 'Discord Chat',
          link: 'https://discord.gg/VU62jTecad',
        },
        // {
        //   text: '赞助',
        //   link: '/other/donate',
        // },
      ],
    },
    {
      text: 'vben3',
      items: [
        {
          text: '仓库（beta-1）',
          link: 'https://github.com/jinmao88/vben3',
        },
        {
          text: '文档',
          link: 'https://vbenjs.github.io/vben3-doc/',
        },
      ],
    }
  ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '组件',
      items: [
        {
          text: '前言',
          link: '/components/introduction',
        },
      ],
    },
    {
      text: '全局组件',
      items: [
        {
          text: 'Button',
          link: '/components/glob/button',
        },
      ],
    },
    {
      text: '常用组件',
      items: [
        {
          text: 'Basic',
          link: '/components/basic',
        },
        {
          text: 'Page',
          link: '/components/page',
        },
        {
          text: 'Icon',
          link: '/components/icon',
        },
        {
          text: 'Authority',
          link: '/components/auth',
        },
        {
          text: 'Form',
          link: '/components/form',
        },
        {
          text: 'Table',
          link: '/components/table',
        },
        {
          text: 'PopConfirmButton',
          link: '/components/pop-confirm-button',
        },
        {
          text: 'CollapseContainer',
          link: '/components/collapse-container',
        },
        {
          text: 'ScrollContainer',
          link: '/components/scroll-container',
        },
        {
          text: 'LazyContainer',
          link: '/components/lazy-container',
        },
        {
          text: 'CodeEditor',
          link: '/components/code-editor',
        },
        {
          text: 'JsonPreview',
          link: '/components/json-preview',
        },
        {
          text: 'CountDown',
          link: '/components/count-down',
        },

        {
          text: 'ClickOutSide',
          link: '/components/click-out-side',
        },
        {
          text: 'CountTo',
          link: '/components/count-to',
        },
        {
          text: 'Cropper',
          link: '/components/cropper',
        },
        {
          text: 'Description',
          link: '/components/desc',
        },
        {
          text: 'Drawer',
          link: '/components/drawer',
        },
        {
          text: 'Modal',
          link: '/components/modal',
        },
        {
          text: 'FlowChart',
          link: '/components/flow-chart',
        },
        {
          text: 'Upload',
          link: '/components/upload',
        },
        {
          text: 'Tree',
          link: '/components/tree',
        },
        {
          text: 'Excel',
          link: '/components/excel',
        },
        {
          text: 'Qrcode',
          link: '/components/qrcode',
        },
        {
          text: 'Markdown',
          link: '/components/markdown',
        },
        {
          text: 'Loading',
          link: '/components/loading',
        },
        {
          text: 'Tinymce',
          link: '/components/tinymce',
        },
        {
          text: 'Time',
          link: '/components/time',
        },
        {
          text: 'StrengthMeter',
          link: '/components/strength-meter',
        },
        {
          text: 'Verify',
          link: '/components/verify',
        },
        {
          text: 'Transition',
          link: '/components/transition',
        },
        {
          text: 'VirtualScroll',
          link: '/components/virtual-scroll',
        },
      ],
    },
    {
      text: '函数式组件',
      items: [
        {
          text: 'ContextMenu',
          link: '/components/functional/context-menu',
        },
        {
          text: 'Loading',
          link: '/components/functional/loading',
        },
        {
          text: 'Preview',
          link: '/components/functional/preview',
        },
      ],
    },

  ]




  return {
    '/components/': [
    ],
    '/': [
    ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }

module.exports = {
  base: '/vuepress-blog/',
  title: '随笔',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': require('path').resolve(__dirname, 'public/imgs'),
      }
    }
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3'],
  },
  theme: 'vdoing',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端核心',
        link: '/nav1/',
        items: [
          { text: 'HTML', link: '/pages/6610c3/' },
          { text: 'CSS', link: '/pages/ebc097/' },
          { text: 'JavaScript', link: '/pages/023981/' },
          { text: 'TypeScript', link: '/pages/b02d31/' },
          { text: '浏览器', link: '/pages/bfc8a9/' },
          { text: 'HTTP', link: '/pages/008666/' },
          { text: '可视化', link: '/pages/260e3a/' },
        ]
      },
      {
        text: '前端框架',
        link: '/nav2/',
        items: [
          { text: 'NodeJS', link: '/pages/ca7770/' },
          { text: 'Vue', link: '/pages/c68f27/' },
          { text: 'Angular', link: '/pages/9b2b82/' },
          { text: 'React', link: '/pages/e96283/' },
          { text: 'RN', link: '/pages/e29c13/' },
          { text: 'Flutter', link: '/pages/d2fba8/' },
          { text: 'Nginx', link: '/pages/5bfd77/' },
        ]
      },
      {
        text: 'Java后端',
        link: '/nav3/',
        items: [
          { text: 'SpringBoot2', link: '/pages/ac114b/' },
          { text: '微服务', link: '/pages/017f58/' },
          { text: '数据库', link: '/pages/15e1f1/' },
          { text: 'Docker', link: '/pages/46db40/' },
        ]
      },
      {
        text: '内功篇',
        link: '/nav4/',
        items: [
          { text: '数据结构与算法', link: '/pages/8c75c3/' },
          { text: '设计模式', link: '/pages/b9afd2/' },
        ]
      },
      { text: '练功房', link: '/pages/04309c/' },
      { text: '收藏', link: '/pages/bceabe/' },
      { text: 'Github', link: 'https://github.com/' },
    ],

    searchMaxSuggestions: 10,

    category: false,
    tag: false,
    archive: false,
    pageStyle: 'line',
    contentBgStyle: 6,
    sidebar: {
      mode: 'structuring',
      collapsable: true,
    },
    sidebarDepth: 4,
    updateBar: {
      showToArticle: false,
    },
    footer: {
      createYear: 2022,
      copyrightInfo: `<a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE">MIT Licence</a>`
    },
    author: {
      name: '行尸走肉',
      link: 'https://github.com/',
    },

    lastUpdated: '上次更新',
  },
  plugins: [
    [
      '@vuepress/medium-zoom',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      }
    ],
    [
      'one-click-copy',
      {
        copyMessage: '复制成功',
      }
    ],
    [
      'fulltext-search',
    ]
  ],
  extraWatchFiles: [
    '.vuepress/config.js'
  ],
}

module.exports = {
  title: 'zhuxy\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/cat.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/xueyanz/xueyanz.github.io',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',

    nav:[ // 导航栏配置
      {text: '读书笔记', link: '/book/' },
      {text: '计算机视觉', link: '/cv/'},
      {text: 'Unity', link: '/unity/'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};

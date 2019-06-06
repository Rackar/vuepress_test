module.exports = {
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "博文",
        items: [
            { text: "默认", link: "/android/" },
          { text: "Android", link: "/android/" },
          { text: "ios", link: "/ios/" },
          { text: "Web", link: "/web/" },
          
        ]
      },
      { text: "语言", items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]},
      { text: "Github", link: "https://www.github.com/codeteenager" },
      { text: "Gitee", link: "https://www.github.com/codeteenager" }
    ],
    sidebar: {
      "/": ["first", "test.md"],
      "/android/": ["/android/android"],
      "/ios/": ["first"],
      "/web/": ["first"]
    },
    sidebarDepth: 2,
    lastUpdated: "Last Updated"
  }
};

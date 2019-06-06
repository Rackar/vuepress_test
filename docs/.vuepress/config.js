module.exports = {
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "博文",
        items: [
          { text: "Android", link: "/android/" },
          { text: "ios", link: "/ios/" },
          { text: "Web", link: "/web/" }
        ]
      },
      { text: "关于", link: "/about/" },
      { text: "Github", link: "https://www.github.com/codeteenager" }
    ],
    sidebar: {
      "/": ["", "test.md"],
      "/android/": ["", "/android/android"],
      "/ios/": [""],
      "/web/": [""]
    },
    sidebarDepth: 2,
    lastUpdated: "Last Updated"
  }
};

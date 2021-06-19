const sidebar = require("./siderbar.js");
module.exports = {
  title: "白桃気泡水🍑",
  description: "白桃気泡水🍑",
  theme: "reco",
  themeConfig: {
    type: "blog"
  },
  dest: "public",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/hero.png"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
    "@vuepress-reco/vuepress-plugin-comments",
    "vuepress-plugin-meting",
    "@vuepress-reco/vuepress-plugin-kan-ban-niang"
  ],
  themeConfig: {
    mode: "light",
    subSidebar: "auto",
    valineConfig: {
      appId: "aCSipIDPBNQTreNNNr4bT5R4-gzGzoHsz",
      appKey: "zuQELzuRINaCxHgIozNrnwKO"
    },
    // 添加导航按钮
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
      },
      { text: "留言板", link: "/blogs/views/messageBoard.html", icon: "reco-suggestion" },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/wangxiaoer5200",
            icon: "reco-github"
          }
        ]
      }
    ],
    sidebar,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "目录索引"
      },
      tag: {
        location: 3,
        text: "标签索引"
      }
    },
    friendLink: [
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    logo: "/logo.jpeg", //导航栏左侧可以显示logo
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    authorAvatar: "/logo.jpeg", //侧边栏头像
    author: "白桃気泡水🍑", //设置全局作者姓名
    record: "首页",
    startYear: "2020",
    locales: {
      "/": {
        recoLocales: {
          pagation: {
            prev: "上一页",
            next: "下一页",
            go: "前往",
            jump: "跳转至"
          }
        }
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
};

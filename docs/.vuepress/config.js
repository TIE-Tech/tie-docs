module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TIE 开发文档',
      description: 'Vue-powered Static Site Generator',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Tie development documentation',
      description: 'Tie development documentation',
    },
  },
  themeConfig: {
    logo: '/img/TIE-LOGO-white.png',
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        sidebar: [
          {
            title: 'Tie-Chain',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/zh/Tie-Chain/get-started/',
              '/zh/Tie-Chain/cli-commands/',
              '/zh/Tie-Chain/json-rpc/',
              '/zh/Tie-Chain/introduce/',
            ]
          },
          {
            title: 'Tie-Bridge',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/zh/Tie-Bridge/tie-help/',
              '/zh/Tie-Bridge/monitor/',
              '/zh/Tie-Bridge/polygon-cross-tie/',
              '/zh/Tie-Bridge/bsc-cross-tie/',
            ]
          },
          {
            title: 'Tie-SDK',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/zh/Tie-SDK/start/',
              '/zh/Tie-SDK/method-list/',
              '/zh/Tie-SDK/contract/',
              '/zh/Tie-SDK/sdk-example/',
              '/zh/Tie-SDK/struct/',
              '/zh/Tie-SDK/download/',
            ]
          }
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          {
            title: 'Tie-Chain',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/en/Tie-Chain/get-started/',
              '/en/Tie-Chain/cli-commands/',
              '/en/Tie-Chain/json-rpc/',
              '/en/Tie-Chain/introduce/',
            ]
          },
          {
            title: 'Tie-Bridge',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/en/Tie-Bridge/tie-help/',
              '/en/Tie-Bridge/monitor/',
              '/en/Tie-Bridge/polygon-cross-tie/',
              '/en/Tie-Bridge/bsc-cross-tie/',
            ]
          },
          {
            title: 'Tie-SDK',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/en/Tie-SDK/start/',
              '/en/Tie-SDK/method-list/',
              '/en/Tie-SDK/contract/',
              '/en/Tie-SDK/sdk-example/',
              '/en/Tie-SDK/struct/',
              '/en/Tie-SDK/download/',
            ]
          }
        ]
      }
    }
  }
}
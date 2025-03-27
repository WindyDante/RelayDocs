import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Relay',
  description: '数据流转中枢平台',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '功能', link: '/features' },
      { text: '快速开始', link: '/quickstart' },
      { text: 'GitHub', link: 'https://github.com/your-relay-repo' }
    ],
    sidebar: [
      {
        text: '核心指南',
        items: [
          { text: '架构设计', link: '/architecture' },
          { text: '安全规范', link: '/security' }
        ]
      },
      {
        text: '开发者',
        items: [
          { text: 'REST API规范', link: '/api-spec' },
          { text: '插件开发', link: '/plugins' }
        ]
      }
    ]
  },
  appearance: true,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // Add Mermaid support
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args
        const token = tokens[idx]
        if (token.info === 'mermaid') {
          return `<div class="mermaid">${token.content}</div>`
        }
        return fence(...args)
      }
    }
  },
  vite: {
    ssr: {
      noExternal: ['mermaid', '@mermaid-js/mermaid-mindmap']
    }
  }
})
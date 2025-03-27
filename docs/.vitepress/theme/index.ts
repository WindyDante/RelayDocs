import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { onMounted } from 'vue'
import mermaid from 'mermaid'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose'
      })
    }
  },
  setup() {
    onMounted(() => {
      mermaid.contentLoaded()
    })
  }
}
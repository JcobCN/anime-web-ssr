import { createSSRApp, h } from 'vue'
// import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import my from './MyLayout.vue'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        my,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  }

  const app = createSSRApp(PageWithLayout)

  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}

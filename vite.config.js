import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue(), ssr()],
  build: {
    target: 'es2015'
  }
}

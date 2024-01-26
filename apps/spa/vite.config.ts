// apps/spa/vite.config.js
import path from 'path'
import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, '../../postcss.config.js'),
  },
}

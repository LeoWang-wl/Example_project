import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: './', 
  plugins: [vue()],
  build: {
    outDir: 'dist', // 输出目录
    // 确保资源文件放在相对路径
    assetsDir: './assets',
  },
  define: {
    // 添加这行配置
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
  }
})

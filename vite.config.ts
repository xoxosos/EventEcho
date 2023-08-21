/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-21 23:41:13
 * @Description:
 */
import uni from '@dcloudio/vite-plugin-uni'
// import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [uni()],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },
})

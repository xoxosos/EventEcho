/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-21 23:41:13
 * @Description:
 */
import { createSSRApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app,
  }
}

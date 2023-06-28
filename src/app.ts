import {createApp} from "vue"
import "./app.css"
import "windi.css"
import router from "./router"
import {createPinia} from "pinia"

const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())
App.use(router)

export default App

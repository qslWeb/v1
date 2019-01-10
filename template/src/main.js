{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
import router from './router'


/* 引用饿了么前端ui框架 */
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

/* 全局引用重置样式 */
import '@/assets/css/rest.css'
Vue.use(Mint)

/* 全局注册组件的方法 */
import '@/components/install.js'

/* 全局引用模测数据 */
// import '../../mock/mock'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})

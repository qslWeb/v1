import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

{{#demo}}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'actives',
  linkExactActiveClass: 'active',
  routes: [
    {name: 'home', path: '/', component: (resolve) => require(['@/demo/home.vue'], resolve)},
    {name: 'actionsheet', path: '/actionsheet', component: (resolve) => require(['@/demo/actionsheet.vue'], resolve)},
    {name: 'badge', path: '/badge', component: (resolve) => require(['@/demo/badge.vue'], resolve)},
    {name: 'button', path: '/button', component: (resolve) => require(['@/demo/button.vue'], resolve)},
    {name: 'cellswipe', path: '/cellswipe', component: (resolve) => require(['@/demo/cell-swipe.vue'], resolve)},
    {name: 'cell', path: '/cell', component: (resolve) => require(['@/demo/cell.vue'], resolve)},
    {name: 'checklist', path: '/checklist', component: (resolve) => require(['@/demo/checklist.vue'], resolve)},
    {name: 'datatimepicker', path: '/datatimepicker', component: (resolve) => require(['@/demo/datatime-picker.vue'], resolve)},
    {name: 'field', path: '/field', component: (resolve) => require(['@/demo/field.vue'], resolve)},
    {name: 'header', path: '/header', component: (resolve) => require(['@/demo/header.vue'], resolve)},
    {name: 'indexlist', path: '/indexlist', component: (resolve) => require(['@/demo/index-list.vue'], resolve)},
    {name: 'indicator', path: '/indicator', component: (resolve) => require(['@/demo/indicator.vue'], resolve)},
    {name: 'infinitescroll', path: '/infinitescroll', component: (resolve) => require(['@/demo/infinite-scroll.vue'], resolve)},
    {name: 'lazyload', path: '/lazyload', component: (resolve) => require(['@/demo/lazyload.vue'], resolve)},
    {name: 'messagebox', path: '/messagebox', component: (resolve) => require(['@/demo/message-box.vue'], resolve)},
    {name: 'navbar', path: '/navbar', component: (resolve) => require(['@/demo/navbar.vue'], resolve)},
    {name: 'palettebutton', path: '/palettebutton', component: (resolve) => require(['@/demo/palette-button.vue'], resolve)},
    {name: 'picker', path: '/picker', component: (resolve) => require(['@/demo/picker.vue'], resolve)},
    {name: 'popup', path: '/popup', component: (resolve) => require(['@/demo/popup.vue'], resolve)},
    {name: 'progress', path: '/progress', component: (resolve) => require(['@/demo/progress.vue'], resolve)},
    {name: 'pulldown', path: '/pulldown', component: (resolve) => require(['@/demo/pull-down.vue'], resolve)},
    {name: 'pullup', path: '/pullup', component: (resolve) => require(['@/demo/pull-up.vue'], resolve)},
    {name: 'radio', path: '/radio', component: (resolve) => require(['@/demo/radio.vue'], resolve)},
    {name: 'range', path: '/range', component: (resolve) => require(['@/demo/range.vue'], resolve)},
    {name: 'search', path: '/search', component: (resolve) => require(['@/demo/search.vue'], resolve)},
    {name: 'spinner', path: '/spinner', component: (resolve) => require(['@/demo/spinner.vue'], resolve)},
    {name: 'swipe', path: '/swipe', component: (resolve) => require(['@/demo/swipe.vue'], resolve)},
    {name: 'switch', path: '/switch', component: (resolve) => require(['@/demo/switch.vue'], resolve)},
    {name: 'tabbar', path: '/tabbar', component: (resolve) => require(['@/demo/tabbar.vue'], resolve)},
    {name: 'toast', path: '/toast', component: (resolve) => require(['@/demo/toast.vue'], resolve)},
    {name: 'tabcontainer', path: '/tabcontainer', component: (resolve) => require(['@/demo/tab-container.vue'], resolve)}

  ]
 })
{{else}}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'actives',
  linkExactActiveClass: 'active',
  routes: [
  {name: 'home', path: '/', component: (resolve) => require(['@/views/index.vue'], resolve)}
  ]
 })

{{/demo}}

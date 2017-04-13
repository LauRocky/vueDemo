
import "ratchet-npm/dist/css/ratchet.css"
import "font-awesome/css/font-awesome.css"
import "animate.css/animate.css"

import FastClick from 'fastclick';
FastClick.attach(document.body);// init fastclick

import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件

import VueResource from 'vue-resource';// get $http
import VueProgressBar from 'vue-progressbar'; // get vue-progressbar
import infiniteScroll from  'vue-infinite-scroll';// get vue-infinite-scroll

Vue.use(VueResource);
var options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(infiniteScroll);

import './css/common.css'
import './less/common.less'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

new Vue({ store, router }).$mount('#app')

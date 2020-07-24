import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mint-ui 
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)


// mint头部

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


// mintui tabnav

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);



// mintui home 轮播图

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/// axios 管理

import axios from 'axios'
Vue.prototype.$axios = axios


// mui

import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'


// mint 右侧弹出登陆
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
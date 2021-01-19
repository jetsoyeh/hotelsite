import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'


//載入Vue2-leaflet
import { LMap, LTileLayer, LMarker, LPopup, LIcon, LTooltip } from "vue2-leaflet";
//載入Css
import "leaflet/dist/leaflet.css";

//啟用載入的各組件
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-icon', LIcon);
Vue.component('l-tooltip', LTooltip);

//設定預設Icon
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(Vuelidate);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuex);

//axios interceptors request

axios.interceptors.request.use(
  config => {
    config.headers = {
      'Authorization': JSON.parse(localStorage.getItem("accesstoken")) == '' ? '' : 'Bearer ' + JSON.parse(localStorage.getItem("accesstoken")),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  err => {
    Promise.reject(err);
  }
);

//axios interceptors response refresh token 
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response) {
    //判斷web api 返回的狀態碼
    switch (error.response.status) {
      case 400:
        {
          const message = error.response.data;
          alert( message + " || 資料錯誤");
        }
        break;
      case 401:
        
        if (error.config.url !== '/api/ApplicationUser/refresh') {
          const originalRequest = error.config;
          return store.dispatch('auth/refresh_token')
            .then((res) => {
              //更因token成功
              //刷新token
              localStorage.setItem('accesstoken', JSON.stringify(res.data.accesstoken));
              localStorage.setItem('refreshtoken', JSON.stringify(res.data.refreshtoken));

              //更新原始originalRequest的token

              originalRequest.headers.Authorization = 'Bearer ' + res.data.accesstoken;

              //重新送request
              return axios(originalRequest);
            })
            .catch((err) => {
              //更新token失敗
              localStorage.clear();
              alert("請重新登入");
              return Promise.reject(err);
            })
        }
        break;
      case 404:
        alert('資料來源不存在');
        break;
      case 500:
        alert('內部系統發生錯誤');
        break;
      default:
        alert('系統維護中，造成您的不便，敬請見諒。');
        break;
    }
  } else {
    if (error.code === 'ECONNABORTED' ) {
      // request time out will be here
      alert('網路連線逾時，請點「確認」鍵後繼續使用。')
    } else {
      // shutdonw api server
      alert('網路連線不穩定，請稍候再試')
    }
  }
  return Promise.reject(error);
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

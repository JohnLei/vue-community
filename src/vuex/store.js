import Vue from 'vue'
import Vuex from 'vuex'
// 注册vuex
Vue.use(Vuex)
// 创建store对象
export default new Vuex.Store({
    // ...存储token
    state: {
        token: '',
        loginInfo: {},
        userInfo: '',
        ifLogin: false,
        loading: false,
        readCount: 0
    }
})

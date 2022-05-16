import Vue from "vue"
import axios from "axios"

axios.defaults.baseURL = 'http://api.comparador.local/api'
axios.defaults.headers.common['Content-type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})
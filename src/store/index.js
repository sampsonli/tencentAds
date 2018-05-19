/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    version: '1.2.14',
    toast: {
        msg: '',
        visible: false
    }

}
const mutations = {

}
const actions = {



}



// const cache = {};
// ((r) => {
//     r.keys().forEach(key => {
//         if (!~key.indexOf('index.js')) {
//             cache[key.split('/')[1].split('.')[0]] = r(key).default;
//         }
//     });
// })(require.context('./', true, /\.js$/));

export default () => new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        app
    }
})

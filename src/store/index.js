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

export default () => new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        app
    }
})

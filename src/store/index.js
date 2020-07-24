import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isp_list: 0,
        idetalis: 0,
        itemarr: [],
        isign: false,
    },
    mutations: {
        ispclik(state, ind) {
            this.state.isp_list = ind;
        },
        idetalisclick(state, ind) {
            state.idetalis = ind
        },
        itemarrpush(state, e) {
            var flag = true
            state.itemarr.some(item => {
                if (item.item.id === e.item.id) {
                    item.shu += e.shu
                    flag = false
                }
            })
            if (flag) {
                state.itemarr.push(e)
            }
            localStorage.setItem('car', JSON.stringify(state.itemarr))
        },
        ijcli(state, e, i) {
            state.itemarr.splice[i, 1, e]
        },
        cararr(state) {
            state.itemarr = JSON.parse(localStorage.getItem('car'))
        },
        isarrdelete(state, i) {
            state.itemarr.splice(i, 1)
            localStorage.setItem('car', JSON.stringify(state.itemarr))
        }
    },
    actions: {},
    modules: {}
})
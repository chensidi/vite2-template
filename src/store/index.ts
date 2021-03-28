import { createStore, ActionContext, } from 'vuex'

interface state {
    username: string,
    age: number,
    childs: Array<string>
}

const state: state = {
    username: 'Jacky Chueng',
    age: 25,
    childs: ['YangLei', 'ZhaoYi', 'WanHaoyu']
}

const mutations = {
    older(state: state, num: number) {
        state.age += num;
    },
    appendChild(state: state, member: string) {
        state.childs.push(member)
    },
}

const actions = {
    older({commit}: ActionContext<state, state>, num: number) {
        commit('older', num)
    }
}

const getters = {

}

interface customInf {
    name: string,
    city: string
}

const customModule = {
    namespaced: true,
    state: {
        name: 'custom',
        city: 'ChengDu'
    },
    mutations: {
        changeCity(state: customInf, city: string) {
            state.city = city;
        }
    },
    actions: {
        changeCity({commit}: any, city: string) {
            commit('changeCity', city)
        }
    }
}

const store = createStore({
    state,
    mutations,
    actions,
    getters,
    modules: {
        customModule
    }
})

export default store;
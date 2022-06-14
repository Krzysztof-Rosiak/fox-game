import { createStore } from 'vuex'

export default createStore({
    state: {
        current: 'INIT',
        clock: 1,
    },
    getters: {
        getCurrent(state) {
            return state.current
        },
        getClock(state) {
            return state.clock
        },
    },
    mutations: {
        setCurrent(state, payload: string) {
            state.current = payload
        },
        setClock(state, payload: number) {
            state.clock = payload
        },
    },
    actions: {
        tick(context) {
            context.commit('setClock', context.state.clock + 1)
            return context.state.clock
        },
    },
})

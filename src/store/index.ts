import { createStore } from 'vuex'

export default createStore({
    state: {
        current: 'INIT',
        clock: 1,
        wakeTime: -1,
        foxStatus: '',
        sceneStatus: 'day',
        rainChance: 0.2,
        dayLength: 5,
        nightLength: 2,
        sleepTime: -1,
    },
    getters: {
        getCurrent(state) {
            return state.current
        },
        getClock(state) {
            return state.clock
        },
        getWakeTime(state) {
            return state.wakeTime
        },
        getFoxStatus(state) {
            return state.foxStatus
        },
        getSceneStatus(state) {
            return state.sceneStatus
        },
    },
    mutations: {
        setCurrent(state, payload: string) {
            state.current = payload
        },
        setClock(state, payload: number) {
            state.clock = payload
        },
        setWakeTime(state, payload: number) {
            state.wakeTime = payload
        },
        setFoxStatus(state, payload: string) {
            state.foxStatus = payload
        },
        setSceneStatus(state, payload: string) {
            state.sceneStatus = payload
        },
        setSleepTime(state, payload: number) {
            state.sleepTime = payload
        },
    },
    actions: {
        tick(context) {
            context.commit('setClock', context.state.clock + 1)

            if (context.state.clock === context.state.wakeTime) {
                context.dispatch('wake')
            } else if (context.state.clock === context.state.sleepTime) {
                context.dispatch('sleep')
            }
        },
        startGame(context) {
            context.commit('setCurrent', 'HATCHING')
            context.commit('setWakeTime', context.state.clock + 3)
            context.commit('setFoxStatus', 'egg')
            context.commit('setSceneStatus', 'day')
        },
        wake(context) {
            context.commit('setCurrent', 'IDLING')
            context.commit('setWakeTime', -1)
            context.commit('setFoxStatus', 'idling')
            const isRaining = Math.random() > context.state.rainChance ? 0 : 1

            context.commit('setSceneStatus', isRaining ? 'rain' : 'day')
            context.commit(
                'setSleepTime',
                context.state.clock + context.state.dayLength
            )
        },
        sleep(context) {
            context.commit('setCurrent', 'SLEEP')
            context.commit('setFoxStatus', 'sleep')
            context.commit('setSceneStatus', 'night')
            context.commit(
                'setWakeTime',
                context.state.clock + context.state.nightLength
            )
        },
        handleUserAction(context, action) {
            const iddleActions = ['SLEEP', 'FEEDING', 'CELEBRATING', 'HATCHING']
            const forceStartActions = ['INIT', 'DEAD']

            if (iddleActions.includes(context.state.current)) {
                //do nothing
                return
            }
            if (forceStartActions.includes(context.state.current)) {
                context.dispatch('startGame')
            }

            switch (action) {
                case 'weather':
                    context.dispatch('changeWeather')
                    break
                case 'poop':
                    context.dispatch('cleanupPoop')
                    break
                case 'fish':
                    context.dispatch('feed')
                    break
            }
        },
        changeWeather() {
            console.log('changeWeather')
        },
        cleanupPoop() {
            console.log('cleanupPoop')
        },
        feed() {
            console.log('feed')
        },
    },
})

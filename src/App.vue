<template>
    <MainWindow />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainWindow from './components/MainWindow.vue'
import { mapActions } from 'vuex'

export default defineComponent({
    name: 'App',
    components: {
        MainWindow,
    },

    data() {
        return {
            TICK_RATE: 3000,
        }
    },
    created() {
        this.init()
    },
    methods: {
        ...mapActions({ tick: 'tick' }),
        init() {
            console.log('start game')

            let nextTimeToTick = Date.now()

            const nextAnimationFrame = () => {
                const now = Date.now()

                if (nextTimeToTick <= now) {
                    this.tick()
                    nextTimeToTick = now + this.TICK_RATE
                }
                requestAnimationFrame(nextAnimationFrame)
            }

            requestAnimationFrame(nextAnimationFrame)
        },
    },
})
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-image: url(./assets/bg/Canvas.png);
}
</style>

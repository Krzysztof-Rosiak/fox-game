<template>
    <div class="container">
        <div class="inner">
            <GameWindow />
            <GameFox />
            <div class="foreground-rain"></div>
            <div class="frame"></div>
            <GameButtons @click-button="selectIcon" />
            <GameIcons :selected-icon="selectedIcon" />
            <GameModal />
        </div>
    </div>
</template>

<script lang="ts">
import GameWindow from './GameWindow.vue'
import GameFox from './GameFox.vue'
import GameButtons from './GameButtons.vue'
import GameIcons from './GameIcons.vue'
import GameModal from './GameModal.vue'
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

type Buttons = 'left' | 'middle' | 'right'
export default defineComponent({
    components: { GameWindow, GameFox, GameButtons, GameIcons, GameModal },
    data() {
        return {
            selectedIcon: 'fish',
            icons: ['fish', 'poop', 'weather'],
        }
    },
    methods: {
        ...mapActions({ handleUserAction: 'handleUserAction' }),
        selectIcon(button: Buttons) {
            const currentIconIndex = this.icons.indexOf(this.selectedIcon)

            if (button === 'left') {
                const newIconIndex =
                    currentIconIndex === 0
                        ? this.icons.length - 1
                        : currentIconIndex - 1
                this.selectedIcon = this.icons[newIconIndex]
            } else if (button === 'right') {
                const newIconIndex =
                    currentIconIndex === this.icons.length - 1
                        ? 0
                        : currentIconIndex + 1
                this.selectedIcon = this.icons[newIconIndex]
            } else if (button === 'middle') {
                this.handleUserAction(this.selectedIcon)
            }
        },
    },
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.inner {
    position: relative;
}

.frame {
    height: 762px;
    width: 762px;
    position: relative;
    background-image: url(./../assets/bg/FRAME.png);
}

.foreground-rain {
    display: none;
    background-image: url(./../assets/bg/rain.png);
    animation: raining 0.5s steps(3) infinite;
    width: 606px;
    height: 516px;
    overflow: hidden;
    position: absolute;
    top: 56px;
    left: 60px;
}

.rain ~ .foreground-rain {
    display: block;
}

@keyframes raining {
    to {
        background-position: -1818px;
    }
}

.hidden {
    display: none;
}
</style>

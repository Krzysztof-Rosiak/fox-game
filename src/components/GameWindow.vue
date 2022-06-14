<template>
    <div class="game" :class="sceneStatus" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    computed: {
        ...mapGetters({ sceneStatus: 'getSceneStatus' }),
    },
})
</script>

<style lang="scss" scoped>
.game {
    width: 628px;
    height: 577px;
    position: absolute;
    top: 62px;
    left: 67px;
    background-image: url(./../assets/bg/DAY.png);

    &.night {
        width: 716px;
        top: 62px;
        left: -19px;
        background-image: url(./../assets/bg/NIGHT.png);
    }

    &.dead {
        background-image: url(./../assets/bg/DEAD.png);
    }

    &.rain {
        background-image: url(./../assets/bg/RAINY.png);
    }
}
</style>

<template>
    <div class="fox" :class="foxStatus ? `fox-${foxStatus}` : ''" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    computed: {
        ...mapGetters({ foxStatus: 'getFoxStatus' }),
    },
})
</script>

<style lang="scss" scoped>
.fox {
    position: absolute;
    top: 336px;
    left: 285px;
    overflow: hidden;

    &-pooping {
        top: 319px;
        left: 159px;
        background-image: url(./../assets/pet/Pooping.png);
        background-position: -1836px;
        background-repeat: no-repeat;
        width: 204px;
        height: 202px;
        animation: pooping 5s steps(10);
    }
    &-pooped {
        background-image: url(./../assets/pet/Pooping.png);
        background-position: -1836px;
        background-repeat: no-repeat;
        width: 204px;
        height: 202px;
    }
    &-celebrate {
        top: 290px;
        left: 290px;
        background-image: url(./../assets/pet/Yay.png);
        background-repeat: no-repeat;
        width: 130.8px;
        height: 213px;
        animation: celebrate 2s steps(5) infinite;
    }
    &-rain {
        top: 362px;
        background-image: url(./../assets/pet/Rain.png);
        background-repeat: no-repeat;
        width: 134px;
        height: 153px;
        animation: sit-in-the-rain 2s steps(5) infinite alternate;
    }
    &-hungry {
        top: 362px;
        background-image: url(./../assets/pet/Hungry.png);
        background-repeat: no-repeat;
        width: 130px;
        height: 160px;
        top: 339px;
        animation: hungry 1s steps(2) infinite;
    }
    &-eating {
        top: 362px;
        background-image: url(./../assets/pet/Eating.png);
        background-position: -1865.7px;
        background-repeat: no-repeat;
        width: 207.3px;
        height: 148px;
        top: 358px;
        left: 81px;
        animation: eating 3s steps(10);
    }
    &-egg {
        top: 289px;
        left: 248px;
        background-image: url(./../assets/pet/Egg.png);
        background-repeat: no-repeat;
        background-position: -1050px;
        width: 175px;
        height: 217px;
        animation: hatching 4s steps(7);
    }
    &-sleep {
        top: 351px;
        left: 445px;
        background-image: url(./../assets/pet/Sleeping.png);
        background-repeat: no-repeat;
        width: 250px;
        height: 155px;
        animation: sleeping 4s steps(4) infinite;
    }
    &-dead {
        top: 380px;
        left: 243px;
        background-image: url(./../assets/pet/TombStone.png);
        background-repeat: no-repeat;
        width: 118px;
        height: 119px;
        animation: being-dead 1s steps(3) infinite;
    }

    &-static {
        background-image: url(./../assets/pet/FoxBase.png);
        width: 117px;
        height: 165px;
    }

    &-idling {
        background-image: url(./../assets/pet/AtRest.png);
        background-repeat: no-repeat;
        width: 117px;
        height: 165px;
        animation: idle 2s steps(3) infinite;
    }

    @keyframes idle {
        to {
            background-position: -372px;
        }
    }

    @keyframes pooping {
        from {
            background-position: 0;
        }
        to {
            background-position: -2040px;
        }
    }

    @keyframes celebrate {
        to {
            background-position: -654px;
        }
    }

    @keyframes sit-in-the-rain {
        to {
            background-position: -670px;
        }
    }

    @keyframes hungry {
        to {
            background-position: -260px;
        }
    }

    @keyframes eating {
        from {
            background-position: 0;
        }
        to {
            background-position: -2073px;
        }
    }

    @keyframes hatching {
        from {
            background-position: 0;
        }
        to {
            background-position: -1225px;
        }
    }

    @keyframes being-dead {
        to {
            background-position: -354px;
        }
    }

    @keyframes sleeping {
        to {
            background-position: -1000px;
        }
    }
}
</style>

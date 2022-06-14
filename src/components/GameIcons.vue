<template>
    <div class="icons">
        <div
            class="icon fish-icon"
            :class="{ highlighted: selectedIcon === 'fish' }"
        />
        <div
            class="icon poop-icon"
            :class="{ highlighted: selectedIcon === 'poop' }"
        />
        <div
            class="icon weather-icon"
            :class="{ highlighted: selectedIcon === 'weather' }"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        selectedIcon: {
            type: String,
            default: 'poop',
        },
    },
})
</script>

<style lang="scss" scoped>
.icons {
    position: absolute;
    top: 572px;
    left: 194px;
    height: 67px;
    width: 374px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        background-image: url(./../assets/bg/ICONS/NotSelected.png);
        background-position: 0px;
        width: 56px;
        height: 65px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-color: transparent;
        border-color: transparent;

        &.poop-icon {
            background-position: -162px 0px;
        }

        &.weather-icon {
            background-position: -323px 0px;
        }

        &.highlighted {
            background-image: url(./../assets/bg/ICONS/Hover.png);
        }

        &.active {
            background-image: url(./../assets/bg/ICONS/Selected.png);
        }
    }
}
</style>

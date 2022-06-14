<template>
    <div class="buttons">
        <button @click="$emit('click-button', 'left')" class="btn left-btn" />
        <button
            @click="$emit('click-button', 'middle')"
            class="btn middle-btn"
        />
        <button @click="$emit('click-button', 'right')" class="btn right-btn" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.buttons {
    position: absolute;
    top: 674px;
    left: 266px;
    height: 71px;
    width: 228px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
        background-image: url(./../assets/bg/BUTTONS/NotSelected.png);
        background-position: 0px;
        width: 62px;
        height: 65px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;

        &.middle-btn {
            background-position: -84px 0px;
        }

        &.right-btn {
            background-position: -167px 0px;
        }

        &:hover,
        &:focus {
            background-image: url(./../assets/bg/BUTTONS/Hover.png);
        }

        &:active {
            background-image: url(./../assets/bg/BUTTONS/Selected.png);
        }
    }
}
</style>

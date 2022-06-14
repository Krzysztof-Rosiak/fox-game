<template>
    <div class="modal">
        <div class="modal-inner">Press the middle button to start</div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    &:empty {
        display: none;
    }

    &-inner {
        background-color: blueviolet;
        color: white;
        padding: 20px;
        font-size: 20px;
        border-radius: 5px;

        &:empty {
            display: none;
        }
    }
}
</style>

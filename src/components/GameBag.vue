<template>
    <div class="bag hidden"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bag {
    position: absolute;
    top: 300px;
    left: 160px;

    background-image: url(./../assets/pet/PoopBag.png);
    animation: swing-poop-bag 1s steps(3) infinite alternate;
    width: 99px;
    height: 104px;
    overflow: hidden;
}

@keyframes swing-poop-bag {
    to {
        background-position: -297px;
    }
}
</style>

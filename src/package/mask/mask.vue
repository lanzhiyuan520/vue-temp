<template>
    <div
        class="mask"
        id="mask__"
        :class="[visibility?'mask-enter-active':'mask-leave-active']"
    ></div>
</template>

<script>
  export default {
    name: "mask__",
    data () {
      return {
        visibility : false
      }
    }
  }
</script>

<style scoped lang="scss">
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #000;
    opacity: .5;
}
.mask.mask-enter-active {
    animation: v-modal-in .3s;
}
.mask.mask-leave-active {
    animation: v-modal-out .3s;
}
@keyframes v-modal-in {
    0%{
        opacity: 0;
    }
    100%{}
}
@keyframes v-modal-out {
    0%{}
    100% {
        opacity: 0;
    }
}
</style>

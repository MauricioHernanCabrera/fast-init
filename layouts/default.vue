<template lang="pug">
  .Layout
    .Layout-loader(v-if="loadingApp")
      .lds-circle
        div
    drawer.Layout-drawer
    nuxt.Layout-body
</template>

<script>
import Drawer from '@/components/Drawer'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Drawer
  },

  computed: {
    ...mapState(['loadingApp'])
  },

  methods: {
    ...mapMutations(['SET_LOADING_APP'])
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Layout {
  display: flex;

  .Layout-drawer {
  }

  .Layout-body {
    flex: 1;
  }

  .Layout-loader {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: $color_light;
    @include z-index(loader);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: $color_primary;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes lds-circle {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>

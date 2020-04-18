<template lang="pug">
  .Layout
    drawer.Layout-drawer
    nuxt.Layout-body
</template>

<script>
import Drawer from '@/components/Drawer'
export default {
  components: {
    Drawer
  }
}
</script>

<style lang="scss" scoped>
.Layout {
  display: flex;

  .Layout-drawer {
  }

  .Layout-body {
    flex: 1;
  }
}
</style>

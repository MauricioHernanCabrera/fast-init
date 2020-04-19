<template lang="pug">
  header.Toolbar
    .Toolbar-content
      .Toolbar-title
        i.fas.fa-arrow-left(v-if="$route.name != 'index'" @click="$router.back()")
        | {{title}}
        
      .Toolbar-items
        slot(name="toolbar-items")
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Toolbar {
  background-color: $color_primary;
  height: 64px;
  // display: flex;
  // align-items: center;
  padding: 0 16px;
  color: $color_light;
  position: sticky;
  top: 0;
  z-index: 1000;

  .Toolbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .Toolbar-title {
      font-size: 20px;
      display: flex;
      align-items: center;

      i {
        font-size: 16px;
        margin-right: 8px;
        cursor: pointer;
        padding: 10px;
        padding-left: 0;
      }
    }

    .Toolbar-items {
      height: 100%;
      display: flex;
      align-items: center;

      button {
        color: $color_light;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 700;
        height: 100%;

        i {
          font-size: 14px;
          cursor: pointer;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>

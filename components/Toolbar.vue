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
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: $color_light;
  // border-left: 1px solid $color_light;

  .Toolbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .Toolbar-title {
      font-size: 16px;
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
      button {
        color: $color_light;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 700;

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

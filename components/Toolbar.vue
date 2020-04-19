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
  @include z-index(toolbar);

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
        cursor: pointer;
        padding: 18px;
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
        min-width: 64px;
        display: flex;
        justify-content: center;

        i {
          font-size: 14px;
          cursor: pointer;

          @include breakpoint(lg) {
            margin-right: 8px;
          }
        }

        span {
          display: none;
          @include breakpoint(lg) {
            display: block;
          }
        }
      }
    }
  }
}
</style>

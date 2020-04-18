<template lang="pug">
  .Commands
    .Command-item(v-for="command in 10" :key="command")
      .Command-content
        h4 Geco 
        //- {{command.name}}
        p c://asdasd/asd/asdasdas/dasd.png
      
      .Command-actions
        button
          i.fas.fa-pen

        button
          i.fas.fa-trash-alt
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Commands {
  background-color: $color_light;

  .Command-item {
    border-bottom: 1px solid $color_grey2;
    padding: 16px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:last-child {
      margin: 0;
      border-bottom: 0;
    }

    &:hover {
      background-color: $color_secondary;
      color: $color_light;

      .Command-actions {
        button {
          color: $color_light;
        }
      }
    }

    .Command-link {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 5;
      cursor: pointer;
    }

    .Command-content {
      h4 {
        font-weight: 600;
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }

    .Command-actions {
      flex: 0 0 72px;
      button {
        position: relative;
        z-index: 10;
        cursor: pointer;
        padding: 6px;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        color: $color_dark;
        border: 1px solid $color_grey;
        margin-left: 4px;
        transition: 0.3s;

        &:hover {
          border: 1px solid $color_light;
          background-color: $color_light;
          color: $color_secondary;
        }
      }
    }
  }
}
</style>

<template lang="pug">
  .Projects
    .Project-item(v-for="project in 10" :key="project")
      .Project-link(@click="$router.push('/commands')")

      .Project-content
        h4 Geco 
        //- {{project.name}}
        ul.Project-commands
          li.Project-command-item( v-for="command in 11" :key="command")
            | chrome
        //- {{project.url}}
      
      .Project-actions
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

.Projects {
  background-color: $color_light;

  .Project-item {
    border-bottom: 1px solid $color_grey2;
    padding: 16px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    // flex-wrap: wrap;

    &:last-child {
      margin: 0;
      border-bottom: 0;
    }

    &:hover {
      background-color: $color_secondary;
      color: $color_light;

      .Project-actions {
        button {
          color: $color_light;
        }
      }
    }

    .Project-link {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 5;
      cursor: pointer;
    }

    .Project-content {
      h4 {
        font-weight: 600;
        font-size: 16px;
      }

      .Project-commands {
        display: flex;
        flex-wrap: wrap;

        .Project-command-item {
          font-size: 14px;
          &:last-child {
            &:after {
              display: none;
            }
          }

          &:after {
            content: '|';
          }
        }
      }
    }

    .Project-actions {
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

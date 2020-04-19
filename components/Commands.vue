<template lang="pug">
  .Commands
    .Command-item(v-if="getCommands.length == 0")
      .Command-content
        h4 There no commands

    .Command-item.hover(v-else v-for="command in getCommands" :key="command._id")
      .Command-content
        h4 {{command.program.name}} 
        p {{command.param}}
      
      .Command-actions
        button(@click="SET_DIALOG({ title: 'Edit command', nameBtnSubmit: 'Edit', active: 'create-or-update', data: { ...command, program: command.program._id } })")
          i.fas.fa-pen

        button(@click="SET_DIALOG({ title: 'Delete project', nameBtnSubmit: 'Delete', active: 'delete', data: { _id: command._id, name: command.program.name } })")
          i.fas.fa-trash-alt
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCommands'])
  },

  methods: {
    ...mapMutations(['SET_DIALOG', 'CANCEL_DIALOG'])
  }
}
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

    &.hover {
      &:hover {
        background-color: $color_secondary;
        color: $color_light;

        .Command-actions {
          button {
            color: $color_light;
          }
        }
      }
    }

    .Command-link {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      @include z-index(command-link);
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
        cursor: pointer;
        padding: 6px;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        color: $color_dark;
        border: 1px solid $color_grey;
        margin-left: 4px;
        transition: 0.3s;
        @include z-index(command-actions-button);

        &:hover {
          border: 1px solid $color_light;
          background-color: $color_light;

          i {
            color: $color_secondary;
          }
        }
      }
    }
  }
}
</style>

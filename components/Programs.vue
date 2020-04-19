<template lang="pug">
  .Programs
    .Program-item(v-if="programs.length == 0")
      .Program-content
        h4 There no programs
    
    .Program-item.hover(v-else v-for="program in programs" :key="program._id")
      .Program-content
        h4 {{program.name}}
        p {{program.url}}
      
      .Program-actions
        button(@click="SET_DIALOG({ title: 'Edit program', nameBtnSubmit: 'Edit', active: 'create-or-update', data: program })")
          i.fas.fa-pen

        button(@click="SET_DIALOG({ title: 'Delete program', nameBtnSubmit: 'Delete', active: 'delete', data: { _id: program._id, name: program.name } })")
          i.fas.fa-trash-alt
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['programs'])
  },

  methods: {
    ...mapMutations(['SET_DIALOG', 'CANCEL_DIALOG'])
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Programs {
  background-color: $color_light;

  .Program-item {
    word-break: break-all;
    border-bottom: 1px solid $color_grey2;
    padding: 16px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:last-child {
      border-bottom: 0;
    }

    &.hover {
      &:hover {
        background-color: $color_secondary;
        color: $color_light;

        .Program-actions {
          button {
            color: $color_light;
          }
        }
      }
    }

    .Program-content {
      h4 {
        font-weight: 600;
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }

    .Program-actions {
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

        @include z-index(program-actions-button);

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

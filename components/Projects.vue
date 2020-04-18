<template lang="pug">
  .Projects
    .Project-item(v-for="project in getProjects" :key="project._id")
      .Project-link(@click="navigateAndFillStore(project)")

      .Project-content
        h4 {{project.name}} 
        ul.Project-commands
          li.Project-command-item( v-for="command in project.commands" :key="command._id" v-if="command.program")
            | {{command.program.name}}
        //- {{project.url}}
      
      .Project-actions
        button(@click="SET_DIALOG({ title: 'Edit project', nameBtnSubmit: 'Edit', active: 'create-or-update', data: project })")
          i.fas.fa-pen

        button(@click="SET_DIALOG({ title: 'Delete project', nameBtnSubmit: 'Delete', active: 'delete', data: { _id: project._id, name: project.name } })")
          i.fas.fa-trash-alt
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getProjects'])
  },

  methods: {
    ...mapMutations([
      'SET_DIALOG',
      'CANCEL_DIALOG',
      'SET_PROJECT',
      'SET_COMMANDS'
    ]),

    navigateAndFillStore({ commands, ...project }) {
      this.SET_PROJECT(project)
      this.SET_COMMANDS(
        commands
          .filter(command => command.program && command.program._id)
          .map(command => ({
            ...command,
            program: command.program._id
          }))
      )
      this.$router.push('/commands')
    }
  }
}
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

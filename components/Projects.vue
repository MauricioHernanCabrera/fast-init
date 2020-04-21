<template lang="pug">
  .Projects
    .Project-item(v-if="getProjects.length == 0")
      .Project-content
        h4 There no projects
      
    .Project-item.hover(v-else v-for="project in getProjects" :key="project._id")
      .Project-link(@click="$router.push(`/commands?project_id=${project._id}`)")

      .Project-content
        h4 {{project.name}} 
        ul.Project-commands
          li.Project-command-item( v-for="command in project.commands" :key="command._id" v-if="command.program")
            | {{command.program.name}}
      
      .Project-actions
        //- button(title="Download .bat" @click="downloadBat(project.commands)")
        //-   i.fas.fa-download

        button(title="Copy clipboard" @click="copyClipboard(project.commands)")
          i.fas.fa-clipboard

        button(title="Edit project" @click="SET_DIALOG({ title: 'Edit project', nameBtnSubmit: 'Edit', active: 'create-or-update', data: project })")
          i.fas.fa-pen

        button(title="Remove project" @click="SET_DIALOG({ title: 'Delete project', nameBtnSubmit: 'Delete', active: 'delete', data: { _id: project._id, name: project.name } })")
          i.fas.fa-trash-alt

    textarea(
      style="z-index: -1; position: absolute; top: -1000%;"
      v-model="clipboard"
      ref="customNotesClipboard"
      cols="30"
      rows="10")
    
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      clipboard: 'asdsa'
    }
  },

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

    copyClipboard(commands) {
      const commandsFiltered = commands.filter(
        command => command.program && command.program._id
      )

      const str = commandsFiltered
        .reduce(
          (acum, { program, param = '' }) =>
            `${acum} "${program.url}" ${param} &&`,
          ''
        )
        .slice(1, -3)

      const json = str
      this.clipboard = json

      this.$nextTick(() => {
        this.$refs.customNotesClipboard.select()
        document.execCommand('copy')
      })
    }

    // downloadBat() {
    //   const text = `@echo off\n"c:\Users\algui\AppData\Local\Programs\Microsoft VS Code\bin\code" "C:\Users\algui\Desktop\hernan\geco\geco-back"\nexit`
    //   const filename = `holamundo-${Date.now()}.bat`
    //   const element = document.createElement('a')
    //   element.setAttribute(
    //     'href',
    //     'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    //   )
    //   element.setAttribute('download', filename)

    //   element.style.display = 'none'
    //   document.body.appendChild(element)

    //   element.click()

    //   document.body.removeChild(element)
    //   console.log('.bat')
    // }
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

    &.hover {
      &:hover {
        background-color: $color_secondary;
        color: $color_light;

        .Project-actions {
          button {
            color: $color_light;
          }
        }
      }
    }

    .Project-link {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      @include z-index(project-link);
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
      // flex: 0 0 144px;
      flex: 0 0 108px;

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
        @include z-index(project-actions-button);

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

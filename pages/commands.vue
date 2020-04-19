<template lang="pug">
  div
    Toolbar(:title="`Commands of ${project && project.name? project.name : 'project'}`")
      template(slot="toolbar-items")
        button(@click="SET_DIALOG({ title: 'Create command', active: 'create-or-update' })")
          i.fas.fa-plus
          span command
    Card
      Commands

    FormCommand(
      :data="dialog.data"
      :title="dialog.title"
      :nameBtnSubmit="dialog.nameBtnSubmit"
      @submit="submitForm"
      :value="dialog.active == 'create-or-update'"
      @input="CANCEL_DIALOG"
    )

    FormDelete(
      :data="dialog.data"
      :title="dialog.title"
      :nameBtnSubmit="'delete'"
      :value="dialog.active == 'delete'"
      @submit="deleteItem"
      @input="CANCEL_DIALOG"
    )
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Card from '@/components/Card'
import Commands from '@/components/Commands'

import FormCommand from '@/components/FormCommand'
import FormDelete from '@/components/FormDelete'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Toolbar,
    Card,
    Commands,
    FormCommand,
    FormDelete
  },

  data() {
    return {
      existProject: false
    }
  },

  mounted() {
    const { project_id } = this.$route.query

    const projectFound = this.projects.find(
      project => project._id == project_id
    )

    this.existProject = projectFound ? true : false

    if (projectFound) {
      const isSame = projectFound._id === this.project._id

      if (!isSame) {
        const { commands, ...project } = JSON.parse(
          JSON.stringify(projectFound)
        )
        this.SET_PROJECT(project)
        this.SET_COMMANDS(commands)
      }
    } else {
      this.$router.push('/')
    }
  },

  beforeDestroy() {
    if (this.existProject) {
      const projectUpdated = {
        ...this.project,
        commands: this.getCommands
      }

      this.UPDATE_PROJECT(projectUpdated)
      this.SET_PROJECT({})
      this.SET_COMMANDS([])
    }
  },

  computed: {
    ...mapState(['projects', 'project', 'dialog']),
    ...mapGetters(['getCommands'])
  },

  methods: {
    ...mapMutations([
      'SET_DIALOG',
      'CANCEL_DIALOG',
      'ADD_COMMAND',
      'REMOVE_COMMAND',
      'UPDATE_COMMAND',
      'UPDATE_PROJECT',
      'SET_PROJECT',
      'SET_COMMANDS'
    ]),

    submitForm({ newValue, updateValue }) {
      if (newValue) {
        this.ADD_COMMAND(newValue)
      }

      if (updateValue) {
        this.UPDATE_COMMAND(updateValue)
      }
    },

    deleteItem(item) {
      this.REMOVE_COMMAND(item)
    }
  }
}
</script>

<style scoped lang="scss"></style>

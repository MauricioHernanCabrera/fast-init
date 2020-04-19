<template lang="pug">
  div
    Toolbar(title="Programs")
      template(slot="toolbar-items")
        button(@click="SET_DIALOG({ title: 'Create program', active: 'create-or-update' })")
          i.fas.fa-plus
          span program
    Card()
      Programs

    FormProgram(
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
import Programs from '@/components/Programs'
import FormProgram from '@/components/FormProgram'
import FormDelete from '@/components/FormDelete'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Toolbar,
    Card,
    Programs,
    FormProgram,
    FormDelete
  },

  computed: {
    ...mapState(['dialog', 'projects'])
  },

  methods: {
    ...mapMutations([
      'SET_DIALOG',
      'CANCEL_DIALOG',
      'ADD_PROGRAM',
      'REMOVE_PROGRAM',
      'UPDATE_PROGRAM',
      'SET_PROJECTS'
    ]),

    submitForm({ newValue, updateValue }) {
      if (newValue) {
        this.ADD_PROGRAM(newValue)
      }
      if (updateValue) {
        this.UPDATE_PROGRAM(updateValue)
      }
    },

    deleteItem(item) {
      this.REMOVE_PROGRAM(item)
      // const projectWithoutProgramDependency = this.projects.map(project => ({
      //   ...project,
      //   commands: project.commands.filter(
      //     command => command.program == item._id
      //   )
      // }))
      // this.SET_PROJECTS(projectWithoutProgramDependency)
    }
  }
}
</script>

<style scoped lang="scss"></style>

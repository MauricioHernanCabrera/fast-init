<template lang="pug">
  div
    Toolbar(:title="`Commands of ${project.name}`")
      template(slot="toolbar-items")
        button(@click="SET_DIALOG({ title: 'Create command', active: 'create-or-update' })")
          i.fas.fa-plus
          | command
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

  beforeDestroy() {
    const projectUpdated = {
      ...this.project,
      commands: this.getCommands
    }

    this.UPDATE_PROJECT(projectUpdated)
  },

  computed: {
    ...mapState(['project', 'dialog']),
    ...mapGetters(['getCommands'])
  },

  methods: {
    ...mapMutations([
      'SET_DIALOG',
      'CANCEL_DIALOG',
      'ADD_COMMAND',
      'REMOVE_COMMAND',
      'UPDATE_COMMAND',
      'UPDATE_PROJECT'
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

<template lang="pug">
  div
    Toolbar(title="Projects")
      template(slot="toolbar-items")
        button(@click="SET_DIALOG({ title: 'Create project', active: 'create-or-update' })")
          i.fas.fa-plus
          span project
    Card()
      Projects
    
    FormProject(
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
import Toolbar from '~/components/Toolbar'
import Card from '~/components/Card'
import Projects from '~/components/Projects'
import FormProject from '@/components/FormProject'
import FormDelete from '@/components/FormDelete'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Toolbar,
    Card,
    Projects,
    FormProject,
    FormDelete
  },

  computed: {
    ...mapState(['dialog', 'projects'])
  },

  methods: {
    ...mapMutations([
      'SET_DIALOG',
      'CANCEL_DIALOG',
      'ADD_PROJECT',
      'REMOVE_PROJECT',
      'UPDATE_PROJECT'
    ]),

    submitForm({ newValue, updateValue }) {
      if (newValue) {
        this.ADD_PROJECT(newValue)
        const [projectCreated] = this.projects.slice(this.projects.length - 1)
        this.$router.push(`/commands?project_id=${projectCreated._id}`)
      }
      if (updateValue) {
        this.UPDATE_PROJECT(updateValue)
      }
    },

    deleteItem(item) {
      this.REMOVE_PROJECT(item)
    }
  }
}
</script>

<style scoped lang="scss"></style>

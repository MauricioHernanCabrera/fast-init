<template lang="pug">
  div
    Toolbar(:title="`Commands of ${project.name}`")
      template(slot="toolbar-items")
        button
          i.fas.fa-plus
          | command
    Card
      Commands
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Card from '@/components/Card'
import Commands from '@/components/Commands'
import { mapState } from 'vuex'

export default {
  components: {
    Toolbar,
    Card,
    Commands
  },

  computed: {
    ...mapState(['project'])
  }
}
</script>

<style scoped lang="scss"></style>

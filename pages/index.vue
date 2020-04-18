<template lang="pug">
  div
    Toolbar(title="Projects")
      template(slot="toolbar-items")
        button
          i.fas.fa-plus
          | project
    Card(title="Projects")
      Projects
    
</template>

<script>
import Toolbar from '~/components/Toolbar'
import Card from '~/components/Card'
import Projects from '~/components/Projects'

export default {
  components: {
    Toolbar,
    Card,
    Projects
  }
}
</script>

<style scoped lang="scss"></style>

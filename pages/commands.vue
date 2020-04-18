<template lang="pug">
  div
    Toolbar(title="Commands")
      template(slot="toolbar-items")
        button
          i.fas.fa-plus
          | command
    Card
      Commands
</template>

<script>
import Toolbar from '~/components/Toolbar'
import Card from '~/components/Card'
import Commands from '~/components/Commands'

export default {
  components: {
    Toolbar,
    Card,
    Commands
  }
}
</script>

<style scoped lang="scss"></style>

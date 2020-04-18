<template lang="pug">
  div
    Toolbar(title="Programs")
      template(slot="toolbar-items")
        button
          i.fas.fa-plus
          | program
    Card()
      Programs

    FormProgram(v-model="active" title="Add program" btnNameSubmit="accept")
    
    button(@click="active = !active") toggle
</template>

<script>
import Toolbar from '~/components/Toolbar'
import Card from '~/components/Card'
import Programs from '~/components/Programs'
import FormProgram from '~/components/FormProgram'
export default {
  components: {
    Toolbar,
    Card,
    Programs,
    FormProgram
  },

  data() {
    return {
      active: false
    }
  }
}
</script>

<style scoped lang="scss"></style>

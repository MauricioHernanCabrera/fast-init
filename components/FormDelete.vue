<template lang="pug">
  FormBase(
    :title="title"
    :value="value"
    :nameBtnSubmit="nameBtnSubmit"
    @input="handleInput"
    :disabled="false"
    @submit="submit"
  )
    template(v-if="value")
      FIInput(v-model="form.name" placeholder="Name (*)" autofocus)

</template>

<script>
import FIInput from '@/components/Input'
import utilsFormBase from '@/mixins/utilsFormBase'
import { required } from 'vuelidate/lib/validators'
export default {
  components: { FIInput },

  validations: {},

  mixins: [utilsFormBase],

  methods: {
    submit() {
      this.$emit('submit', this.data)
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>

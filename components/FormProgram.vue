<template lang="pug">
  FormBase(
    :title="title"
    :value="value"
    :nameBtnSubmit="nameBtnSubmit"
    @input="handleInput"
    :disabled="$v.$invalid"
    @submit="submit"
  )
    template(v-if="value")
      FIInput(v-model="form.name" placeholder="Name (*)" autofocus)
      FIInput(v-model="form.url" placeholder="Url (*)")

</template>

<script>
import FIInput from '@/components/Input'
import utilsFormBase from '@/mixins/utilsFormBase'
import { required } from 'vuelidate/lib/validators'
export default {
  components: { FIInput },

  mixins: [utilsFormBase],

  validations: {
    form: {
      name: { required },
      url: { required }
    }
  },

  data() {
    return {
      DEFAULT_FORM: {
        name: '',
        url: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

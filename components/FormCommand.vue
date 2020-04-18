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
      FISelect(
        v-model="form.program"
        :items="programs"
        placeholder="Program (*)"
        itemText="name"
        itemValue="_id")
      FIInput(v-model="form.param" placeholder="Param")

</template>

<script>
import FIInput from '@/components/Input'
import FISelect from '@/components/Select'
import utilsFormBase from '@/mixins/utilsFormBase'
import { required } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export default {
  components: { FIInput, FISelect },

  mixins: [utilsFormBase],

  validations: {
    form: {
      program: { required },
      param: {}
    }
  },

  data() {
    return {
      DEFAULT_FORM: {
        program: '',
        param: ''
      }
    }
  },

  computed: {
    ...mapState(['programs'])
  }
}
</script>

<style lang="scss" scoped></style>

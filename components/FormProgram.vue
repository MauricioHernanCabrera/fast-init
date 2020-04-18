<template lang="pug">
  FormBase(
    :title="title"
    :value="value"
    :btnNameSubmit="btnNameSubmit"
    @input="handleInput"
    :disabled="$v.$invalid"
  )
    FIInput(v-model="form.name" placeholder="Name (*)" autofocus)
    FIInput(v-model="form.url" placeholder="Url (*)")

</template>

<script>
import FormBase from '@/components/FormBase'
import FIInput from '@/components/Input'

import { required } from 'vuelidate/lib/validators'
export default {
  components: { FormBase, FIInput },

  validations: {
    form: {
      name: { required },
      url: { required }
    }
  },

  props: {
    title: {
      type: String,
      required: true
    },

    value: {
      type: Boolean,
      required: true
    },

    data: {
      type: Object,
      default: null
    },

    btnNameSubmit: {
      type: String,
      default: 'Accept'
    }
  },

  data() {
    return {
      form: {},

      DEFAULT_FORM: {
        name: 'nada',
        url: 'nada2'
      }
    }
  },

  watch: {
    active(newValue, oldValue) {
      if (newValue && this.data && this.data._id) {
        this.form = JSON.parse(JSON.stringify(this.data))
      } else {
        this.form = JSON.parse(JSON.stringify(this.DEFAULT_FORM))
      }

      this.$v.$reset()
    }
  },

  methods: {
    handleInput() {
      this.$emit('input', !this.value)
    },

    submit() {
      let newValue = null
      let updateValue = null

      if (this.data && this.data._id) {
        updateValue = this.form
      } else {
        newValue = this.form
      }

      this.$emit('submit', { updateValue, newValue })
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>

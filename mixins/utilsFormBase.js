import FormBase from '@/components/FormBase'

export default {
  components: { FormBase },

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

    nameBtnSubmit: {
      type: String,
      default: 'Accept'
    }
  },

  data() {
    return {
      form: {},
      DEFAULT_FORM: {}
    }
  },

  watch: {
    value(newValue, oldValue) {
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

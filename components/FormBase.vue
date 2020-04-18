<template lang="pug">
  Modal(:title="title" :value="value" @input="$emit('input', !value)")
    form.Form(@submit.prevent="$emit('submit')")
      slot

      .Form-actions
        button.Form-btn-close(type="reset" @click="$emit('input', !value)") Close
        button.Form-btn-submit(type="submit" :disabled="disabled") {{ nameBtnSubmit }}
</template>

<script>
import Modal from '@/components/Modal'

export default {
  components: {
    Modal
  },

  data() {
    return {
      form: {}
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

    disabled: {
      type: Boolean,
      required: true
    },

    nameBtnSubmit: {
      type: String,
      default: 'Accept'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Form {
  .Form-actions {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;

    button {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 500;
      padding: 8px 16px;
      color: inherit;
      transition: 0.3s;

      &.Form-btn-close {
        margin-right: 6px;
      }

      &.Form-btn-submit {
        background-color: $color-primary;
        color: $color_light;
      }

      &:disabled {
        color: inherit;
        background-color: inherit;
      }
    }
  }
}
</style>

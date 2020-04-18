<template lang="pug">
  input.Input(:value="value" @input="update" )
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },

  methods: {
    update(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid $color_grey2;
  font-size: 14px;
  padding: 16px 0;
  margin-bottom: 12px;
  outline: 0;
  transition: 0.1s;

  &:focus {
    border-bottom: 2px solid $color_primary;
  }

  &:focus {
    &::placeholder {
      color: $color_primary;
    }
  }
}
</style>

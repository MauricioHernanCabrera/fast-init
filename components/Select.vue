<template lang="pug">
  select.Select(:value="value" @input="update" )
    option(value="") {{placeholder}}
    option(v-for="item in items" :key="item[itemValue]" :value="item[itemValue]")
      | {{item[itemText]}}

</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },

    items: {
      type: Array,
      default: []
    },

    placeholder: {
      type: String,
      default: ''
    },

    itemText: {
      type: String,
      default: 'text'
    },

    itemValue: {
      type: String,
      default: 'value'
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

.Select {
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

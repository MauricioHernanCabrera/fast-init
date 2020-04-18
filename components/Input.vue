<template lang="pug">
  input.Input()
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid $color_grey2;
  font-size: 16px;
  padding: 12px 0;
  margin-bottom: 8px;
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

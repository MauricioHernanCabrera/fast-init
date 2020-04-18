<template lang="pug">
  .Card
    .Card-container
      .Card-body
        slot
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Card {
  padding: 20px 16px 16px 16px;
  border-radius: 3px;

  .Card-container {
    .Card-body {
    }
  }
}
</style>

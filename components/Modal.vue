<template lang="pug">
  .Modal(v-show="value")
    .Modal-overlay(@click="$emit('input', !value)")
    .Modal-container()
      .Modal-header
        h4 {{ title }}
      .Modal-body
        slot
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  watch: {
    value(newValue, oldValue) {
      this.changeBodyOverflow()
    }
  },

  methods: {
    changeBodyOverflow() {
      if (this.value) {
        document.body.style['overflow-y'] = 'hidden'
      } else {
        document.body.style['overflow-y'] = 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  @include z-index(modal);

  .Modal-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.46);
    @include z-index(modal-overlay);
  }

  .Modal-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 2px;
    padding: 24px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    top: 50%;
    transform: translateY(-50%);
    max-height: calc(100vh - 80px);
    background-color: $color_light;
    overflow-y: auto;

    @include z-index(modal-container);

    .Modal-header {
      h4 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 14px;
      }
    }
  }
}
</style>

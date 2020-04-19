<template lang="pug">
  .Drawer
    .Drawer-container
      .Drawer-logo
        img(src="/logo.png")
        h1 Fast Init


      ul.Drawer-list  
        li.Drawer-list-item(v-for="item in routes" :key="item.name")
          nuxt-link(exact :to="item.to") 
            i(:class="item.icon")
            span {{ item.name }}
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: 'projects',
          to: '/',
          icon: 'fas fa-clipboard'
        },
        {
          name: 'programs',
          to: '/programs',
          icon: 'fas fa-terminal'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/utils.scss';

.Drawer {
  background-color: $color_primary;
  color: $color_light;
  min-height: 100vh;

  width: 64px;
  flex: 0 0 64px;

  @include breakpoint(lg) {
    flex: 0 0 300px;
    width: 300;
  }

  .Drawer-container {
    position: sticky;
    top: 0;
  }

  .Drawer-logo {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 24px;

    img {
      width: 24px;
      // transform: rotate(23deg);
    }

    h1 {
      margin-left: 8px;
      font-size: 20px;
      font-weight: 900;

      display: none;
      @include breakpoint(lg) {
        display: block;
      }
    }
  }

  .Drawer-list {
    margin: 8px;

    .Drawer-list-item {
      a {
        padding: 12px 16px;
        margin-bottom: 8px;
        border-radius: 1px;
        transition: 0.3s;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        display: block;
        color: $color_light;
        display: flex;

        &.nuxt-link-active,
        &:hover {
          background-color: $color_light;
          color: $color_primary;
        }

        i {
          margin-right: 16px;
          width: 26px;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span {
          display: none;
          @include breakpoint(lg) {
            display: block;
          }
        }
      }
    }
  }
}
</style>

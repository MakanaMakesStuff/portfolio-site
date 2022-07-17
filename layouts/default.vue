<script lang="ts">
import { defineComponent, ref } from "vue"
import { useHead } from "@vueuse/head"

export default defineComponent({
  name: "DefaultLayout",
})
</script>

<script setup lang="ts">
const opened = ref(false)

function toggleMenu() {
  console.log("opened", opened.value)
  opened.value = !opened.value
}
</script>

<template>
  <Layout class="default-layout">
    <PublicMenuButton @openmenu="toggleMenu" :opened="opened" />
    <PublicNavbar :class="{ opened }" @openmenu="toggleMenu" />
    <RouterView class="layout-content" />
  </Layout>
</template>

<style lang="scss">
.default-layout {
  height: max-content;
  min-height: 100vh;
  scroll-behavior: smooth;

  .public-navbar {
    position: sticky;
    top: 0;
    z-index: 80;
    width: 100%;
    padding: 1em 4em;
  }

  @include mobile(550px) {
    .public-menu-button {
      display: block;
      position: fixed;
      top: 1em;
      right: 1em;
    }

    .public-navbar {
      height: max-content;
      overflow: hidden;
      padding: 0;

      .logo {
        display: none;
      }

      .bar {
        padding: 0;
        width: 100%;
        left: 0;
        top: 0;
        background-color: rgba(40, 40, 40, 1);
        height: 0;

        ul {
          width: 100%;
          height: 100%;
          @include flex(column, center, center);
          gap: 0;
          padding: 0;

          .public-navigation-link {
            width: 100%;
            text-align: center;
            padding: 1em 0;
            &:hover {
              background-color: rgb(130, 130, 130);
            }
          }
        }
      }

      &:not(.opened) {
        .bar {
          height: 0;
        }
      }

      &.opened {
        .bar {
          height: max-content;
        }
      }
    }
  }
}
</style>

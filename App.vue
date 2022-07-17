<script lang="ts">
import { useHead } from "@vueuse/head"
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
  inheritAttrs: false,
})
</script>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preload",
      as: "style",
      href: "./css/fontawesome/css/all.min.css",
    },
    {
      rel: "stylesheet",
      href: "./css/fontawesome/css/all.min.css",
    },
  ],
})
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
.app {
}
</style>

<script lang="ts">
import { useHead } from "@vueuse/head"
import { defineComponent } from "vue"

export default defineComponent({
  name: "Layout",
})
</script>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "/assets/styles/global.css",
    },
  ],
})
</script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="scss">
.layout {
}
</style>

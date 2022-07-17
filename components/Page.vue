<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Page",
})
</script>

<script setup lang="ts"></script>

<template>
  <div class="page">
    <slot />
  </div>
</template>

<style lang="scss">
.page {
}
</style>

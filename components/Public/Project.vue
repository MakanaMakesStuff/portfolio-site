<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "PublicProject",
})
</script>

<script setup lang="ts"></script>

<template>
  <div class="public-project">
    <div class="left">
      <slot name="left" />
    </div>

    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss">
.public-project {
  @include flex(row, space-between, center);

  &.reversed {
    flex-direction: row-reverse;
  }

  .left,
  .right {
    width: 50%;
    height: 100%;
    padding: 1em;
  }
}
</style>

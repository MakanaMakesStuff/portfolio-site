<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "PublicButton",
})
</script>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  icon?: string
}>()
</script>

<template>
  <button class="public-button">
    <slot>
      <span v-if="props.label">{{ props.label }}</span>
    </slot>
    <i v-if="props.icon" :class="props.icon" />
  </button>
</template>

<style lang="scss">
.public-button {
  padding: 1em;
  background-color: cornflowerblue;
  color: white;
  width: 100%;
  max-width: 150px;
  border: unset;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: lightslategray;
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>

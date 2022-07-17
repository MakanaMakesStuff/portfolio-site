<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "PublicUserCard",
})
</script>

<script setup lang="ts">
const props = defineProps<{
  src: string
  title?: string
  quote?: string
}>()
</script>

<template>
  <div class="public-user-card">
    <img :src="props.src" alt="" />
    <div class="user-info">
      <slot>
        <div v-if="props.title" class="title">{{ props.title }}</div>
        <blockquote v-if="props.quote" class="quote">
          {{ props.quote }}
        </blockquote>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.public-user-card {
}
</style>

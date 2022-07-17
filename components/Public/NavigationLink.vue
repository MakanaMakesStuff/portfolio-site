<script lang="ts">
import { defineComponent, computed } from "vue"
import { MenuItem } from "@client/includes/menu"
import { RouteLocationRaw } from "vue-router"
import { is } from "@client/includes/utils/is"

export default defineComponent({
  name: "PublicNavigationLink",
})
</script>

<script setup lang="ts">
const props = defineProps<{
  name?: string
  label?: string
  to: RouteLocationRaw
  target?: "_blank"
  icon?: string
  class?: string
}>()

const type = computed(() => {
  const notExternal = typeof props.to !== "string" || props.to.startsWith("/")
  return notExternal ? "RouterLink" : "a"
})

const link = computed(() => (type.value === "a" ? "href" : "to"))
</script>

<template>
  <component
    :is="type"
    :[link]="props.to"
    :target="props.target"
    class="public-navigation-link"
    :class="props.class"
  >
    <slot v-if="!props.icon">
      <span>{{ props.label }}</span>
    </slot>

    <i v-if="props.icon" :class="props.icon" />
  </component>
</template>

<style lang="scss">
.public-navigation-link {
}
</style>

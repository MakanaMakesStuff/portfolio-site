<script lang="ts">
import { MenuItem, useMenusStore } from "@client/includes/menu"
import { defineComponent, onMounted, ref, computed } from "vue"
import logo from "@client/assets/images/logo.png"

export default defineComponent({
  name: "PublicNavbar",
})
</script>

<script setup lang="ts">
const menus = useMenusStore()

const menuItems = computed(() => menus.get())

const emit = defineEmits<{
  (e: "openmenu", clicked: boolean): void
}>()

function openLink(to: string) {
  window.location.href = to
}
</script>

<template>
  <nav class="public-navbar">
    <img class="logo" :src="logo" @click="openLink('#home')" />

    <div class="bar">
      <ul v-if="menuItems.length">
        <PublicNavigationLink
          v-for="item of menuItems"
          :key="item.name"
          v-bind="item"
          @click="emit('openmenu', false)"
        >
          <li>{{ item.label }}</li>
        </PublicNavigationLink>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.public-navbar {
  @include flex(row, space-between, center);
  width: 100%;
  max-width: 1300px;
  height: 80px;
  margin: auto;

  .logo {
    height: 50px;
    width: auto;
    cursor: pointer;
  }

  .bar {
    ul {
      list-style: none;
      @include flex(row, center, center);
      gap: 1em;
      background-color: rgba(40, 40, 40, 1);
      width: max-content;
      padding: 0.75em 1em;
      border-radius: 5px;

      .public-navigation-link {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>

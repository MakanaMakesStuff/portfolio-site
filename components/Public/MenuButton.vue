<script lang="ts">
import * as vue from "vue"
export default vue.defineComponent({
  name: "PublicMenuButton",
})
</script>
<script lang="ts" setup>
type Props = {
  opened: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: "openmenu", clicked: boolean): void
}>()
</script>
<template>
  <button
    class="public-menu-button"
    :class="{ opened: props.opened }"
    @click="emit('openmenu', !props.opened)"
  >
    <div class="menu-icon top" />
    <div class="menu-icon middle" />
    <div class="menu-icon bottom" />
  </button>
</template>

<style lang="scss" scoped>
.public-menu-button {
  @include flex(column, center, center);
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 30px;
  background-color: unset;
  border: none;
  cursor: pointer;
  z-index: 1000;

  .menu-icon {
    width: 26px;
    height: 2px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 5px;
    transition: all 0.25s;
    $offset: 6px;
    &.top,
    &.bottom {
      z-index: 2;
    }
    &.top {
      top: $offset;
    }
    &.middle {
      z-index: 1;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0px;
    }
    &.bottom {
      bottom: $offset;
    }
  }
  &.opened .menu-icon {
    &.top {
      top: 50%;
      transform: translate(-50%, -50%) rotate(135deg);
    }
    &.middle {
      opacity: 0;
    }
    &.bottom {
      bottom: 42%;
      transform: translate(-50%, -50%) rotate(-135deg);
    }
  }
}
</style>

<script lang="ts">
import { is } from "@client/includes/utils/is"
import { computed, defineComponent } from "vue"

export default defineComponent({
  name: "PublicSplashSection",
})
</script>

<script setup lang="ts">
// top information
const coordinates_top =
  "M0,192L14.1,213.3C28.2,235,56,277,85,266.7C112.9,256,141,192,169,186.7C197.6,181,226,235,254,240C282.4,245,311,203,339,181.3C367.1,160,395,160,424,170.7C451.8,181,480,203,508,218.7C536.5,235,565,245,593,234.7C621.2,224,649,192,678,192C705.9,192,734,224,762,229.3C790.6,235,819,213,847,192C875.3,171,904,149,932,133.3C960,117,988,107,1016,133.3C1044.7,160,1073,224,1101,213.3C1129.4,203,1158,117,1186,106.7C1214.1,96,1242,160,1271,186.7C1298.8,213,1327,203,1355,202.7C1383.5,203,1412,213,1426,218.7L1440,224L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
const fill_top = "#ffffff"
const fillOpacity_top = 1

// bottom information
const coordinates_bottom =
  "M0,192L21.8,181.3C43.6,171,87,149,131,154.7C174.5,160,218,192,262,208C305.5,224,349,224,393,197.3C436.4,171,480,117,524,101.3C567.3,85,611,107,655,122.7C698.2,139,742,149,785,181.3C829.1,213,873,267,916,250.7C960,235,1004,149,1047,112C1090.9,75,1135,85,1178,96C1221.8,107,1265,117,1309,106.7C1352.7,96,1396,64,1418,48L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
const fill_bottom = "#ffffff"
const fillOpacity_bottom = 1

interface SVGData {
  fill: string
  fillOpacity: number
  coordinates: string
}

const localtop: SVGData = {
  fill: fill_top,
  fillOpacity: fillOpacity_top,
  coordinates: coordinates_top,
}

const localbottom: SVGData = {
  fill: fill_bottom,
  fillOpacity: fillOpacity_bottom,
  coordinates: coordinates_bottom,
}

const props = defineProps<{
  top?: SVGData
  bottom?: SVGData
}>()

const computedProps = computed(() => {
  const { top, bottom } = props
  return {
    top: top || localtop,
    bottom: bottom || localbottom,
  }
})
</script>

<template>
  <section class="public-splash-section">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="top">
      <path
        :fill="computedProps.top.fill"
        :fill-opacity="computedProps.top.fillOpacity"
        :d="computedProps.top.coordinates"
      ></path>
    </svg>

    <slot />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="bottom"
    >
      <path
        :fill="computedProps.bottom.fill"
        :fill-opacity="computedProps.bottom.fillOpacity"
        :d="computedProps.bottom.coordinates"
      ></path>
    </svg>
  </section>
</template>

<style lang="scss">
.public-splash-section {
  display: grid;

  &.no-top {
    .top {
      display: none;
    }
  }

  &.no-bottom {
    .bottom {
      display: none;
    }
  }
}
</style>

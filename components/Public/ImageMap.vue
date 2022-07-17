<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from "vue"
import { useGenerateMap } from "@client/includes/imageMap"
import minecraft from "@client/assets/images/minecraft.png"
import grass from "@client/assets/images/grass.webp"
import red from "@client/assets/images/red.png"
import white from "@client/assets/images/white.png"

export default defineComponent({
  name: "PublicImageMap",
})
</script>

<script setup lang="ts">
const generator = useGenerateMap()

const imageMap = computed(() => {
  generator.init(600, 400)
  const map = generator.generate(8, 5)
  return map
})

type Coords = {
  x: number
  y: number
}

const snapx = 75
const snapy = 80
const canvas = ref()
const image = ref()
const coords = reactive({
  x: 0,
  y: 0,
})

let blocks = ref<Coords[]>([
  { y: 320, x: 600 },
  { x: 0, y: 320 },
  { x: 150, y: 320 },
  { x: 225, y: 320 },
  { x: 300, y: 320 },
  { x: 375, y: 320 },
  { x: 525, y: 320 },
  { x: 225, y: 80 },
  { x: 300, y: 80 },
])

function drawBlock(
  coords: Coords,
  status: "red" | "white" | "grass" = "grass"
) {
  if (!canvas.value || !image.value)
    return console.info("No image or canvas found")
  const ctx = canvas.value.getContext("2d")
  ctx.shadowColor = "black"
  ctx.shadowBlur = 15
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 0
  ctx.shadowColor = "rgba(0,0,0,1)"
  const block = new Image()

  if (status === "red") {
    block.src = red
  } else if (status === "white") {
    block.src = white
  } else {
    block.src = grass
  }

  ctx.drawImage(block, coords.x, coords.y, snapx, snapy)
}

function drawBackground() {
  canvas.value.width =
    canvas.value.height * (canvas.value.clientWidth / canvas.value.clientHeight)
  canvas.value.height = image.value.height
  const ctx = canvas.value.getContext("2d")
  const background = new Image()
  background.src = image.value.src
  ctx.drawImage(background, 0, 0)
  blocks.value.forEach((block) => drawBlock(block, "grass"))
}

function renderBlock(coords: Coords) {
  const x = Math.floor(coords.x / snapx) * snapx
  const y = Math.floor(coords.y / snapy) * snapy
  drawBackground()
  if (blocks.value.find((block) => block.x === x && block.y === y))
    drawBlock({ x, y }, "red")
  else drawBlock({ x, y }, "white")
}

function addBlock(coords: Coords) {
  const x = Math.floor(coords.x / snapx) * snapx
  const y = Math.floor(coords.y / snapy) * snapy

  if (blocks.value.find((block) => block.x === x && block.y === y))
    return (blocks.value = blocks.value.filter(
      (block) => block.x !== x || block.y !== y
    ))

  blocks.value.push({ x, y })
  drawBlock({ x, y })
}

function clearCanvas() {
  const ctx = canvas.value.getContext("2d")
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  blocks.value = []
  drawBackground()
}

function getMousePos(evt: MouseEvent) {
  const rect = canvas.value.getBoundingClientRect() // abs. size of element
  const scaleX = canvas.value.width / rect.width // relationship bitmap vs. element for x
  const scaleY = canvas.value.height / rect.height // relationship bitmap vs. element for y

  coords.x = (evt.clientX - rect.left) * scaleX // scale mouse coordinates after element handling
  coords.y = (evt.clientY - rect.top) * scaleY // scale mouse coordinates after element handling

  renderBlock(coords)
}

function initCanvas() {
  if (!canvas.value || !image.value)
    return console.info("No image or canvas found")
  canvas.value.width = image.value.naturalWidth
  canvas.value.height = image.value.naturalHeight
  drawBackground()
}

onMounted(() => initCanvas())
</script>

<template>
  <canvas
    ref="canvas"
    class="public-image-map"
    @mousemove="getMousePos($event)"
    @click="addBlock(coords)"
  >
    <img ref="image" :src="minecraft" alt="Minecraft" @load="initCanvas()" />
  </canvas>
</template>

<style lang="scss">
.public-image-map {
  width: 100%;
  max-width: 800px;
  height: auto;
  background-color: white;

  img {
    width: 100%;
    height: auto;
  }
}
</style>

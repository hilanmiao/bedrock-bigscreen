<template>
  <div class="ScreenAdapter">
    <div class="ScreenAdapter__canvas" :style="style">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  designWidth: { type: [Number, String], default: 1920 },
  designHeight: { type: [Number, String], default: 1080 },
  boxWidth: { type: [Number, String], default: '' },
  boxHeight: { type: [Number, String], default: '' }
})

const viewport = ref({ width: 0, height: 0 })

const width = computed(() => Number(props.designWidth))
const height = computed(() => Number(props.designHeight))

const scale = computed(() => {
  const boxW = props.boxWidth ? Number(props.boxWidth) : viewport.value.width
  const boxH = props.boxHeight ? Number(props.boxHeight) : viewport.value.height
  if (!boxW || !boxH) return 1
  return Math.min(boxW / width.value, boxH / height.value)
})

const style = computed(() => ({
  width: width.value + 'px',
  height: height.value + 'px',
  transform: `scale(${scale.value})`
}))

function updateViewport() {
  viewport.value = { width: window.innerWidth, height: window.innerHeight }
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
})
</script>

<style lang="scss" scoped>
.ScreenAdapter {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #000;
}
.ScreenAdapter__canvas {
  flex: none;
  transform-origin: center center;
}
</style>

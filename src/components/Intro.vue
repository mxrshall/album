<script setup>
import { ref, onMounted } from 'vue'
import { animate } from 'motion'

const leftPanel = ref(null)
const rightPanel = ref(null)
const centerLine = ref(null)

onMounted(() => {
  animate(
    leftPanel.value,
    { opacity: 0, x: '-100%' },
    { duration: 0.6, delay: 1 }
  )

  animate(
    centerLine.value,
    { height: '100vh' },
    { duration: 0.3, delay: 0.5 }
  )

  animate(
    centerLine.value,
    { opacity: 0 },
    { duration: 0.2, delay: 0.9 }
  )

  animate(
    rightPanel.value,
    { opacity: 0, x: '100%' },
    { duration: 0.6, delay: 1 }
  )
})
</script>

<template>
  <div
    class="fixed flex top-0 left-0 w-full h-screen overflow-hidden z-50 pointer-events-none"
  >
    <div
      ref="leftPanel"
      class="w-1/2 h-screen bg-black"
    />

    <div
      ref="centerLine"
      class="w-[1px] bg-white absolute left-1/2 top-0 z-10 origin-top"
      style="height: 0"
    />

    <div
      ref="rightPanel"
      class="w-1/2 h-screen bg-black"
    />
  </div>
</template>

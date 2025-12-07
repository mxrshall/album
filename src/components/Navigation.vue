<script setup>
import { ref } from 'vue'

const { photo } = defineProps({
  photo: Array
})

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <nav class="w-full h-20 bg-black z-20 flex items-center justify-end px-5 fixed top-0">
    <v-icon 
      name="co-hamburger-menu" 
      class="w-10 h-10 text-white cursor-pointer"
      @click="toggleMenu"
    />
  </nav>

  <div 
    v-if="isOpen"
    class="w-full h-screen bg-black text-white text-xl flex flex-col items-center pt-28 z-10 fixed top-0"
  >
    <p 
      class="py-2"
      v-for="(item, index) in photo" 
      :key="index"
    >
      {{ item.title }}
    </p>
  </div>
</template>

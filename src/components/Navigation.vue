<script setup>
import { ref } from 'vue'
import { animate } from 'motion'
import { useRouter } from 'vue-router'
import { photos } from '../assets/data.js'
import logo from '../../public/logo.png'

const router = useRouter()
const isOpen = ref(false)
const openNav = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value

  animate(
    openNav.value,
    { opacity: isOpen.value ? 1 : 0 },
    { duration: 0.2 }
  )
}

const goToPage = (id) => {
  isOpen.value = !isOpen.value
  router.push({
    name: 'event',
    params: { id }
  })
}
</script>

<template>
  <nav class="w-full h-20 bg-black z-20 flex items-center justify-between px-5 fixed top-0">
    <img
      :src="logo"
      alt="Logo"
      class="w-12 h-12 cursor-pointer"
      @click="router.push({ name: 'Homepage' })"
    />
    <v-icon
      name="co-hamburger-menu"
      class="w-10 h-10 text-white cursor-pointer"
      @click="toggleMenu"
    />
  </nav>

  <div
    ref="openNav"
    v-show="isOpen"
    class="w-full h-screen bg-black text-white text-xl flex flex-col items-center pt-28 z-10 fixed top-0 opacity-0"
  >
    <p
      class="py-2 cursor-pointer"
      v-for="item in photos"
      :key="item.id"
      @click="goToPage(item.id)"
    >
      {{ item.title }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { animate } from 'motion'
import { useRouter } from 'vue-router'

import photo1 from '../assets/images/photo1.jpeg'
import photo2 from '../assets/images/photo2.jpeg'
import photo3 from '../assets/images/photo3.jpeg'
import photo4 from '../assets/images/photo4.jpeg'
import photo5 from '../assets/images/photo5.jpeg'
import photo6 from '../assets/images/photo6.jpeg'
import photo7 from '../assets/images/photo7.jpg'
import photo8 from '../assets/images/photo8.jpg'

const photos = [
  { id: 1, title: "Bye Bye Semester MTF", date: "9.dec 2025", image: photo8, position: 5 },
  { id: 2, title: "Goodbye Party UCM", date: "2.dec 2025", image: photo7, position: -5 },
  { id: 3, title: "OOZI for students", date: "25.nov 2025", image: photo4, position: 5 },
  { id: 4, title: "Východňarovica", date: "11.nov 2025", image: photo3, position: -5 },
  { id: 5, title: "10Bar Rave", date: "15.okt 2025", image: photo5, position: 5 },
  { id: 6, title: "Rozlúčka s letom Chtelnica", date: "6.sep 2025", image: photo6, position: -5 },
  { id: 7, title: "Privítanie leta Chtelnica", date: "28.jún 2025", image: photo2, position: 5 },
  { id: 8, title: "APE halloween", date: "31.okt 2024", image: photo1, position: -5 }
]

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
  <nav class="w-full h-20 bg-black z-20 flex items-center justify-end px-5 fixed top-0">
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

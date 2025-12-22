<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import PhotosOverlay from './components/PhotosOverlay.vue'
import photo1 from './assets/images/photo1.jpeg'
import photo2 from './assets/images/photo2.jpeg'
import photo3 from './assets/images/photo3.jpeg'
import photo4 from './assets/images/photo4.jpeg'
import photo5 from './assets/images/photo5.jpeg'
import photo6 from './assets/images/photo6.jpeg'
import photo7 from './assets/images/photo7.jpg'
import photo8 from './assets/images/photo8.jpg'
import photo9 from './assets/images/photo9.jpg'
import photo10 from './assets/images/photo10.jpg'
import photo11 from './assets/images/photo11.jpg'
import photo12 from './assets/images/photo12.jpg'
import photo13 from './assets/images/photo13.jpg'
import photo14 from './assets/images/photo14.jpg'
import photo15 from './assets/images/photo15.jpg'

const photos = [
  { id: 1, title: "Bye Bye Semester MTF", date: "9.dec 2025", image: photo8, position: 5 },
  { id: 2, title: "Goodbye Party UCM", date: "2.dec 2025", image: [photo7, photo9] },
  { id: 3, title: "OOZI for students", date: "25.nov 2025", image: photo4, position: 5 },
  { id: 4, title: "Východňarovica", date: "11.nov 2025", image: photo3, position: -5 },
  { id: 5, title: "Prvákovica semafor MTF", date: "4.nov 2025", image: [photo10, photo11, photo12, photo13, photo14], position: 5 },
  { id: 6, title: "10Bar Rave", date: "15.okt 2025", image: photo5, position: -5 },
  { id: 7, title: "Open semester - Právnická", date: "30.sep 2025", image: photo15, position: 5 },
  { id: 8, title: "Rozlúčka s letom Chtelnica", date: "6.sep 2025", image: photo6, position: -5 },
  { id: 9, title: "Privítanie leta Chtelnica", date: "28.jún 2025", image: photo2, position: 5 },
  { id: 10, title: "APE halloween", date: "31.okt 2024", image: photo1, position: -5 }
]

const route = useRoute()

const event = computed(() =>
  photos.find(p => p.id === Number(route.params.id))
)
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center py-32">
    <div v-if="event" class="max-w-2xl mx-auto p-6 space-y-6">
      <PhotosOverlay
        v-for="(img, index) in (Array.isArray(event.image) ? event.image : [event.image])"
        :image="img" 
      />
    </div>

    <div v-else class="text-center mt-10">
      <h1 class="text-3xl font-bold">Event not found</h1>
    </div>
  </div>
</template>

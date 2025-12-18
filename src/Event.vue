<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import photo1 from './assets/images/photo1.jpeg'
import photo2 from './assets/images/photo2.jpeg'
import photo3 from './assets/images/photo3.jpeg'
import photo4 from './assets/images/photo4.jpeg'
import photo5 from './assets/images/photo5.jpeg'
import photo6 from './assets/images/photo6.jpeg'
import photo7 from './assets/images/photo7.jpg'
import photo8 from './assets/images/photo8.jpg'

const photos = [
  { id: 1, title: "Bye Bye Semester MTF", date: "9.dec 2025", image: photo8 },
  { id: 2, title: "Goodbye Party UCM", date: "2.dec 2025", image: photo7 },
  { id: 3, title: "OOZI for students", date: "25.nov 2025", image: photo4 },
  { id: 4, title: "Východňarovica", date: "11.nov 2025", image: photo3 },
  { id: 5, title: "10Bar Rave", date: "15.okt 2025", image: photo5 },
  { id: 6, title: "Rozlúčka s letom Chtelnica", date: "6.sep 2025", image: photo6 },
  { id: 7, title: "Privítanie leta Chtelnica", date: "28.jún 2025", image: photo2 },
  { id: 8, title: "APE halloween", date: "31.okt 2024", image: photo1 }
]

const route = useRoute()

const event = computed(() =>
  photos.find(p => p.id === Number(route.params.id))
)
</script>

<template>
  <div v-if="event" class="max-w-2xl mx-auto p-6">
    <img :src="event.image" class="rounded-xl mb-4" />
    <h1 class="text-3xl font-bold">{{ event.title }}</h1>
    <p class="text-gray-500">{{ event.date }}</p>
  </div>

  <div v-else class="text-center mt-10">
    <h1 class="text-3xl font-bold">Event not found</h1>
  </div>
</template>

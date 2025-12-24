<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { photos } from "./assets/data.js"

import PhotosOverlay from './components/PhotosOverlay.vue'
import VideoOverlay from './components/VideoOverlay.vue'

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
    <div v-if="event?.video" class="max-w-2xl mx-auto p-6 space-y-6">
      <VideoOverlay
        v-for="(vid, index) in (Array.isArray(event.video) ? event.video : [event.video])"
        :video="vid" 
      />
    </div>

    <div v-else class="text-center mt-10" />
  </div>
</template>

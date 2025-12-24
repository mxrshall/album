<script setup>
import Photo from './components/Photo.vue'
import Navigation from './components/Navigation.vue'
import { photos } from './assets/data.js'

</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center py-32">
    <Photo 
      v-for="(photo, index) in photos" 
      :key="index"
      :id="photo.id"
      :title="photo.title" 
      :date="photo.date"
      :thumbnail="photo.thumbnail"
      :image="photo.image" 
      :position="photo.position" 
    />
  </div>
</template>

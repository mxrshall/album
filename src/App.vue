<script setup>
  import Navigation from "./components/Navigation.vue"
  import Intro from "./components/Intro.vue"
</script>

<template>
  <div>
    <Intro />
    <Navigation 
      :photo="photos" 
    />
    <router-view />
  </div>
</template>

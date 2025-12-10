<script setup>
  import Navigation from "./components/Navigation.vue"

  import photo1 from './assets/images/photo1.jpeg'
  import photo2 from './assets/images/photo2.jpeg'
  import photo3 from './assets/images/photo3.jpeg'
  import photo4 from './assets/images/photo4.jpeg'
  import photo5 from './assets/images/photo5.jpeg'
  import photo6 from './assets/images/photo6.jpeg'
  import photo7 from './assets/images/photo7.jpg'
  import photo8 from './assets/images/photo8.jpg'

  const photos = [
    {title: "Bye Bye Semester MTF", date: "9.dec 2025", image: photo8, position: 5},
    { title: "Goodbye Party UCM", date: "2.dec 2025", image: photo7, position: -5 },
    { title: "OOZI for students", date: "25.nov 2025", image: photo4, position: 5 },
    { title: "Východňarovica", date: "11.nov 2025", image: photo3, position: -5 },
    { title: "10Bar Rave", date: "15.okt 2025", image: photo5, position: 5 },
    { title: "Rozlúčka s letom Chtelnica", date: "6.sep 2025", image: photo6, position: -5 },
    { title: "Privítanie leta Chtelnica", date: "28.jún 2025", image: photo2, position: 5 },
    { title: "APE halloween", date: "31.okt 2024", image: photo1, position: -5 }
  ]
</script>

<template>
  <div>
    <Navigation 
      :photo="photos" 
    />
    <router-view />
  </div>
</template>

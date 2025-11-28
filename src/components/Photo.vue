<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    date: String,
    image: String,
    position: Number
})
</script>

<template>
    <div 
        class="w-[75%] flex flex-col items-center justify-center bg-gray-100 p-5 text-center shadow-2xl relative"
        :style="{ transform: `rotate(${props.position}deg)` }"
    >
        <div class="w-full h-[25vh]">
            <img :src="props.image" :alt="props.title" class="w-full h-full object-cover"/>
        </div>
        <h1 class="text-2xl font-semibold mt-5">{{ props.title }}</h1>
        <p class="text-xl font-base mt-1">{{ props.date }}</p>
        <v-icon name="md-openinnew" class="w-6 h-6 text-black absolute bottom-4 right-4" />
    </div>
</template>
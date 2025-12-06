<script setup>
import { defineProps, ref, onMounted } from 'vue'
import { animate } from 'motion'

const props = defineProps({
    title: String,
    date: String,
    image: String,
    position: Number
})

const imgRef = ref(null)
const lineRef = ref(null)

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(imgRef.value, { opacity: [0, 1] }, { duration: 1, easing: 'ease-out' })
                animate(lineRef.value, { height: ['0%', '40%'] }, { duration: 1, easing: 'ease-out', delay: 0.5 })
                observer.unobserve(imgRef.value)
                observer.unobserve(lineRef.value)
            }
        })
    }, { threshold: 0.5 })

    if (imgRef.value) {
        observer.observe(imgRef.value)
        observer.observe(lineRef.value)
    }
})
</script>

<template>
    <div class="w-full h-[60vh] flex flex-col items-center justify-start pt-5">
        <div
            ref="imgRef"
            class="w-[75%] flex flex-col items-center justify-center bg-gray-100 p-5 text-center shadow-2xl relative"
            :style="{ transform: `rotate(${props.position}deg)`, opacity: 0 }"
        >
            <div class="w-full h-[25vh] overflow-hidden">
                <img 
                    :src="props.image" 
                    :alt="props.title" 
                    class="w-full h-full object-cover"
                />
            </div>
            <h1 class="text-2xl font-semibold mt-5">{{ props.title }}</h1>
            <p class="text-xl font-base mt-1">{{ props.date }}</p>
            <v-icon name="md-openinnew" class="w-6 h-6 text-black absolute bottom-4 right-4" />
        </div>
        <div 
            ref="lineRef"
            class="w-0.5 bg-black mt-5"
            :style="{ height: '0%' }"
        ></div>
    </div>
</template>

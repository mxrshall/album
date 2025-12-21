<script setup>
import { defineProps, ref } from 'vue'

const isOpen = ref(false)

const props = defineProps({
    image: String
})

const toggleImg = () => {
    isOpen.value = !isOpen.value
}

</script>

<template>
    <img
        @click="toggleImg"
        :src="image"
    />
    <div
        v-if="isOpen"
        class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click="toggleImg"
    >
        <img
            :src="image"
            class="max-w-full max-h-full"
        />
    </div>
</template>

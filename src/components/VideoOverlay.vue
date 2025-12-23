<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    video: String
})
</script>

<template>
    <video
        :src="video"
        controls
    />
</template>

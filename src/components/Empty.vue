<template>
    <div class="empty" :style="{ height: height_vh + 'vh' }"></div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    height_vh: {
        type: String,
        default: '100'
    }
});
</script>

<style scoped>
.empty {
    width: 100%;
    background-color: #0f0f0f;;
}
</style>

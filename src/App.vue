<script setup>
import BigLogo from './components/BigLogo.vue'
import Intro from './components/Intro.vue';
import Empty from './components/Empty.vue';
</script>

<template>

    <BigLogo style="position: fixed;" />
    <Empty height_vh="100" />
    <Intro />

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

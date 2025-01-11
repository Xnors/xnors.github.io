<script setup>
import BigLogo from './components/BigLogo.vue'
import Intro from './components/Intro.vue';
import Empty from './components/Empty.vue';
import SideBar from './components/SideBar.vue';
</script>

<template>
  <SideBar style="max-width: 100vw;" />

  <BigLogo style="position: fixed;" />
  <Empty height_vh="100" />
  <Intro />

</template>

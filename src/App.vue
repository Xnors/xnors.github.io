<script setup>
import BigLogo from './components/BigLogo.vue'
import Intro from './components/Intro.vue';
import Empty from './components/Empty.vue';
import SideBar from './components/SideBar.vue';

import { ref } from 'vue';

let showLogo = ref(true);

// 监听页面是否滚动到了 100vh , 控制logo的显示
window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight ) {
    showLogo.value = false;
  } else {
    showLogo.value = true;
  }
});
</script>

<template>
  <SideBar style="max-width: 100vw;" />

  <BigLogo style="position: fixed;" v-if="showLogo" />
  <Empty height_vh="100" />
  <Intro style="z-index: 999;" />

</template>

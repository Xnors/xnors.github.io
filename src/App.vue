<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BigLogo from './components/BigLogo.vue';
import Intro from './components/Intro.vue';
import Empty from './components/Empty.vue';
import SideBar from './components/SideBar.vue';

const cursor = ref(null);

// 鼠标移动事件
const handleMouseMove = (e) => {
  cursor.value.style.top = `${e.pageY - 15}px`;
  cursor.value.style.left = `${e.pageX - 15}px`;
};

// 鼠标点击事件
const handleClick = () => {
  cursor.value.classList.add('expand');
  setTimeout(() => {
    cursor.value.classList.remove('expand');
  }, 400);
};

// 鼠标进入 <a> 标签时触发动画
const handleMouseEnter = (e) => {
  if (e.target.tagName === 'A') {
    cursor.value.classList.add('when-meet-a');
  }
};

// 鼠标离开 <a> 标签时移除动画
const handleMouseLeave = (e) => {
  if (e.target.tagName === 'A') {
    cursor.value.classList.remove('when-meet-a');
  }
};

// 在组件挂载时添加事件监听
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('click', handleClick);
  document.addEventListener('mouseover', handleMouseEnter);
  document.addEventListener('mouseout', handleMouseLeave);
});

// 在组件卸载时移除事件监听
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('click', handleClick);
  document.removeEventListener('mouseover', handleMouseEnter);
  document.removeEventListener('mouseout', handleMouseLeave);
});
</script>

<template>
  <div ref="cursor" class="cursor"></div>

  <SideBar style="max-width: 100vw;" />

  <BigLogo style="position: fixed;" />
  <Empty height_vh="100" />
  <Intro style="z-index: 999;" />
</template>

<style type="text/scss" lang="scss">
.cursor {
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(-50%);
  border-radius: 50%;
  background: transparent;
  pointer-events: none;
  z-index: 9999;
  border: 1px solid #fff;

  animation: moveCursor1 0.5s infinite alternate;

  transition: all 0.2s ease-out;
}

.expand {
  background: transparent;
  animation: moveCursor2 0.6s forwards;
  
}

.when-meet-a {
  scale: 2.6;
  background-color: rgba(128, 127, 216, 0.1);
  border: 1px solid rgb(143, 127, 216);
  -webkit-backdrop-filter: blur(0.5px);
  backdrop-filter: blur(0.5px);
}

@keyframes moveCursor1 {
  from {
    transform: scale(1.2);
  }

  to {
    transform: scale(1);
  }
}

@keyframes moveCursor2 {
  0% {
    transform: scale(1);
    border: 1px solid #fff;
  }

  50% {
    transform: scale(3.4);
    border: 1px solid rgb(158, 145, 219);
    background-color: rgba(128, 127, 216, 0.1);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
  }
  100% {
    transform: scale(1);
    border: 1px solid #fff;
    // opacity: 0;
  }
}

//如果设备不用鼠标操控
@media (hover: none) {
 .cursor {
    display: none;
  }
}
</style>
<template>
  <div class="project-component">
    <!-- <div class="background-text">项目名</div> -->
    <div class="content">
      <div class="image-placeholder">
        {{ project.img }}
      </div>
      <div class="text">
        <h1>{{ project.name }}</h1>
        <p>
          {{ project.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// 组件接受参数 name="项目名" desc="项目介绍" img="图片"
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectComponent',
  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        name: '项目名',
        desc: '项目介绍',
        img: '图片',
      }),
    },
  },
})

</script>

<style scoped>
.project-component {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.background-text {
  position: absolute;
  font-size: 200px;
  /* color: #ff0000; */
  /* z-index: 1; */
  /* white-space: nowrap;
  opacity: 0.2;
  pointer-events: none; */
}

.content {
  position: relative;
  /* z-index: 2; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.62);
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #ccccccad;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background-color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-right: 20px;
}

.text {
  max-width: 500px;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 36px;
  font-weight: bold;
  color: black;
}

p {
  margin-top: 10px;
  line-height: 1.5;
  font-size: 16px;
  color: black;
}
</style>

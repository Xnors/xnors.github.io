<template>
  <div class="pj-title project-style">
    <h1>我们的项目</h1>
  </div>

  <div class="project-style" ><!-- class="project-style" -->
    <ProjectComponent :project="CRAIN_PJ_DATA" />

  </div>

</template>

<script>
import ProjectComponent from './ProjectComponent.vue';

export default {
  name: "AboutNext",
  components: {
    ProjectComponent
  },
  data() {
    return {
      CRAIN_PJ_DATA: {
        name: "CRAIN",
        desc: "这是一个软件,是的,一个软件!!! 而且这是一个名叫 CRAIN 的软件,是的一个名叫 CRAIN 的软件!更振奋人心的是,它还是一个可以运行软件!是的,可以运行的软件!!!简直不可思议!!!",
        img: "Crain",
      }
    }
  }
};
</script>

<style type="text/scss" scoped>
@import url("../styles/projects.scss");
</style>

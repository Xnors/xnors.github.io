<script setup>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import axios from "axios";
import { onMounted } from "vue";

const serverApiURL = "http://xnors.pythonanywhere.com/new_visit";

onMounted(() => {
  axios
    .get(serverApiURL)
    .then((response) => {
      console.log("Add visit status: ", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div class="home">
    <Home />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.home {
  background-color: #090b0d;
  height: auto;
}

.home2 {
  background-color: #fcfcfc;
  height: auto;
}
</style>

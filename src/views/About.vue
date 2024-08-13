<template>
  <div>
    <h1>About</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  msg: String,
});

</script>

<style></style>

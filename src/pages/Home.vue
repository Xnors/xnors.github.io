<script setup>
import TopNav from "../components/TopNav.vue";
import FirstPage from "../components/FirstPage.vue";
import Services from "../components/Services.vue";
import Team from "../components/Team.vue";
import Contact from "../components/Contact.vue";
import XFooter from "../components/XFooter.vue";

import { usePageEffects } from "../composables/usePageEffects";
usePageEffects();
</script>

<template>
  <TopNav />
  <FirstPage />
  <Services />
  <Team />
  <!-- <Contact /> -->
  <XFooter />
</template>

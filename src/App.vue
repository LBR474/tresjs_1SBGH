<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import TheExperience from './components/TheExperience.vue';
import LoadModelsPage from './components/LoadModelsPage.vue';
</script>

<template>
  <Suspense fallback="loading">
    <LoadModelsPage />
    <!-- <TheExperience /> -->
  </Suspense>
</template>

<style>

#app {
  height: 100vh;
  width: 100vw;
   margin: 0 auto;
  padding: 0;
}

</style>

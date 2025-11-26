<script setup lang="ts">
import Topbar from './components/Topbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Topbar />
    <main class="flex-grow">
      <Home />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>

<script setup lang="ts">
import TopbarComponent from './components/TopbarComponent.vue'
import HomeView from './components/HomeView.vue'
import FooterComponent from './components/FooterComponent.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TopbarComponent />
    <main class="flex-grow">
      <HomeView />
    </main>
    <FooterComponent />
    <ThemeToggle />
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>

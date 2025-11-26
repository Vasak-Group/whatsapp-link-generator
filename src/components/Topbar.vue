<script setup lang="ts">
// No reactive state needed for this component
</script>

<template>
  <header id="header" class="flex items-center bg-slate-200 dark:bg-slate-900 m-4 rounded-xl">
    <div class="w-full mx-12 px-4 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center vsk-text-gradient font-bold text-2xl">
        WhatsApp Link Generator
      </a>

      <nav class="navbar">
        <ul class="flex gap-6">
          <li>
            <a 
              class="hover:text-primary transition-colors duration-200"
              href="https://vasak.net.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vasak Group
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Additional component-specific styles if needed */
</style>

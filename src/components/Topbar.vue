<script setup lang="ts">
// No reactive state needed for this component
</script>

<template>
  <header id="header" class="flex items-center bg-gradient-to-r from-whatsapp to-whatsapp-dark shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center hover:opacity-90 transition-opacity">
        <img 
          src="/assets/img/wpp-logo.svg" 
          alt="WhatsApp Link Generator" 
          title="WhatsApp Link Generator"
          class="h-12 w-auto"
        />
      </a>

      <nav class="navbar">
        <ul class="flex gap-6">
          <li>
            <a 
              class="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-lg"
              href="https://vasak.net.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sobre Nosotros
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

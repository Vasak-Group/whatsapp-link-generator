<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive state
const text = ref<string>('')
const tel = ref<string>('')
const area = ref<string>('')

// Computed properties
const getNumber = computed(() => {
  return tel.value || ''
})

const getArea = computed(() => {
  return area.value || ''
})

const getText = computed(() => {
  return text.value.split(' ').join('%20')
})

const generateLink = computed(() => {
  return `https://wa.me/${getArea.value}${getNumber.value}?text=${getText.value}`
})

// Methods
const copyURL = async () => {
  try {
    await navigator.clipboard.writeText(generateLink.value)
    // Optional: Add a toast notification here
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Form Section -->
      <div class="contenedor text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-whatsapp mb-16">
          Genera tu Link personalizado
        </h1>
        
        <div class="px-5 py-4">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-3">
              <div class="mb-6">
                <label for="area" class="block text-left text-sm font-medium text-gray-700 mb-2">
                  Área
                </label>
                <input
                  id="area"
                  v-model="area"
                  type="number"
                  placeholder="54"
                  class="w-full px-4 py-2 border-2 border-whatsapp rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div class="col-span-9">
              <div class="mb-6">
                <label for="tel" class="block text-left text-sm font-medium text-gray-700 mb-2">
                  Número de Teléfono
                </label>
                <input
                  id="tel"
                  v-model="tel"
                  type="number"
                  placeholder="1123882753"
                  class="w-full px-4 py-2 border-2 border-whatsapp rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 py-4">
          <div class="mb-6">
            <label for="mensaje" class="block text-left text-sm font-medium text-gray-700 mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              v-model="text"
              rows="3"
              placeholder="Hola, me comunico desde tu web, me gustaría saber los precios de https://vasak.net.ar/"
              class="w-full px-4 py-2 border-2 border-whatsapp rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <div class="px-5 py-4">
          <p class="text-sm text-gray-500 mb-6">
            Verifique la forma de uso en la parte inferior de la página en caso de no saber qué poner en cada campo. 
            En caso de que no aclare sus dudas comuníquese con <span class="font-bold text-whatsapp">Vasak</span>.
          </p>
        </div>

        <div class="px-5 py-4">
          <button
            @click="copyURL"
            type="button"
            class="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Copiar Link
          </button>
        </div>
      </div>

      <!-- Device Preview Section -->
      <div class="flex items-center justify-center p-5">
        <div class="wslg-device">
          <div class="wslg-device-header">
            <div class="wslg-speaker"></div>
          </div>
          <div class="wslg-device-body">
            <div class="wslg-screen">
              <div class="wslg-screen-header">
                <div class="wpp-pre-head"></div>
                <div class="wpp-head">
                  <div class="grid grid-cols-12 text-white no-m items-center px-2">
                    <div class="col-span-1 text-center">
                      <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white text-lg" />
                    </div>
                    <div class="col-span-2">
                      <img 
                        src="/assets/img/no_profile.png" 
                        alt="Profile" 
                        class="wpp-img w-8 h-8"
                      />
                    </div>
                    <div class="col-span-4">
                      <p class="wpp-name">+ {{ getArea }} {{ getNumber }}</p>
                      <p class="wpp-status">Online</p>
                    </div>
                    <div class="col-span-1 text-center">
                      <font-awesome-icon :icon="['fas', 'video']" class="text-white text-lg" />
                    </div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1 text-center">
                      <font-awesome-icon :icon="['fas', 'phone']" class="text-white text-lg" />
                    </div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1 text-center">
                      <img 
                        src="/assets/img/elipsis-v.png" 
                        alt="Menu" 
                        class="h-4 inline-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="wslg-screen-body">
                <div class="wslg-screen-body-message">
                  <div class="wslg-screen-body-message--bubble">
                    <div class="wslg-text px-4">
                      <div class="grid grid-cols-12 gap-2 items-center">
                        <div class="col-span-2">
                          <img 
                            src="/assets/img/wslg-chat-emoji.png" 
                            class="w-full"
                            alt="Emoji"
                          />
                        </div>
                        <div class="col-span-8 text-sm">{{ text }}</div>
                        <div class="col-span-2">
                          <img 
                            src="/assets/img/wslg-chat-clip.png" 
                            class="max-h-5 w-full"
                            alt="Clip"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wslg-screen-body-send">
                  <img 
                    src="/assets/img/wslg-chat-send.png" 
                    alt="Send" 
                    class="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="wslg-device-footer">
            <div class="wslg-button"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>

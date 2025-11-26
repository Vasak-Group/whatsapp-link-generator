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
  <div class="mx-24 px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Form Section -->
      <div class="text-center bg-slate-200 dark:bg-slate-900 rounded-xl p-12">
        <h1 class="text-3xl md:text-4xl font-bold text-primary mb-16">
          Genera tu Link personalizado
        </h1>

        <div class="px-5 py-4">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-3">
              <div class="mb-6">
                <label for="area" class="block text-left text-sm font-medium mb-2">
                  Área
                </label>
                <input id="area" v-model="area" type="number" placeholder="54"
                  class="w-full px-4 py-2 bg-slate-100 dark:bg-slate-950 rounded-xl focus:outline-none" />
              </div>
            </div>
            <div class="col-span-9">
              <div class="mb-6">
                <label for="tel" class="block text-left text-sm font-medium mb-2">
                  Número de Teléfono
                </label>
                <input id="tel" v-model="tel" type="number" placeholder="1123882753"
                  class="w-full px-4 py-2 bg-slate-100 dark:bg-slate-950 rounded-xl focus:outline-none" />
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 py-4">
          <div class="mb-6">
            <label for="mensaje" class="block text-left text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea id="mensaje" v-model="text" rows="3"
              placeholder="Hola, me comunico desde tu web, me gustaría saber los precios de https://vasak.net.ar/"
              class="w-full px-4 py-2 bg-slate-100 dark:bg-slate-950 rounded-xl focus:outline-none resize-none"></textarea>
          </div>
        </div>

        <div class="px-5 py-4">
          <p class="text-sm text-gray-500 mb-6">
            Verifique la forma de uso en la parte inferior de la página en caso de no saber qué poner en cada campo.
            En caso de que no aclare sus dudas comuníquese con <a href="https://vasak.net.ar"
              class="font-bold text-primary">Vasak Group</a>.
          </p>
        </div>

        <div class="px-5 py-4">
          <button @click="copyURL" type="button" class="w-full vsk-gradient text-white font-bold py-3 px-6 rounded-xl">
            Copiar Link
          </button>
        </div>
      </div>

      <!-- Device Preview Section -->
      <div class="flex items-center justify-center p-5">
        <!-- Device Container -->
        <div class="bg-slate-200 dark:bg-slate-900 shadow-2xl w-full max-w-md rounded-[20px] mx-auto">
          <!-- Device Header -->
          <div class="rounded-t-[20px] py-6 flex justify-center items-center">
            <div class="h-2 border-2 border-slate-300 dark:border-slate-700 rounded-full w-24 shadow-inner"></div>
          </div>

          <!-- Device Body -->
          <div class="px-5 min-h-[600px] w-full flex box-border">
            <!-- Screen -->
            <div class="w-full h-auto flex flex-col box-border shadow-inner"
              style="background: url(https://vilmanunez.com/wp-content/plugins/wsap-link/images/wslg-chat-bg.png)">

              <!-- Screen Header -->
              <div class="w-full h-auto flex flex-col">
                <!-- WhatsApp Pre-Header -->
                <div class="h-5 w-full bg-slate-200 dark:bg-slate-900"></div>

                <!-- WhatsApp Header -->
                <div class="w-full h-12 bg-green-900">
                  <div class="grid grid-cols-12 text-white m-0 h-full items-center px-2">
                    <div class="col-span-1 text-center">
                      <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white text-lg" />
                    </div>
                    <div class="col-span-2 mb-2">
                      <img src="/assets/img/no_profile.png" alt="Profile" class="rounded-full mt-1.5 w-8 h-8" />
                    </div>
                    <div class="col-span-4">
                      <p class="text-xs font-bold mb-0 -ml-3">+ {{ getArea }} {{ getNumber }}</p>
                      <p class="text-xs text-gray-300 mb-0 -ml-3">Online</p>
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
                      <img src="/assets/img/elipsis-v.png" alt="Menu" class="h-4 inline-block mb-1" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Screen Body -->
              <div class="flex items-end h-full p-4">
                <!-- Message Bubble Container -->
                <div class="flex items-end flex-grow pr-4 ">
                  <!-- Message Bubble -->
                  <div class="bg-white rounded-2xl py-2 px-0 shadow-md w-full h-12 flex flex-col justify-end">
                    <div class="text-base leading-5 break-words px-4">
                      <div class="grid grid-cols-12 gap-2 items-center">
                        <div class="col-span-2">
                          <img src="/assets/img/wslg-chat-emoji.png" class="w-6 h-6 m-1" alt="Emoji" />
                        </div>
                        <div class="col-span-8 text-sm">{{ text }}</div>
                        <div class="col-span-2">
                          <img src="/assets/img/wslg-chat-clip.png" class="w-6 h-6 m-1" alt="Clip" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Send Button -->
                <div class="flex items-end h-full justify-end">
                  <img src="/assets/img/wslg-chat-send.png" alt="Send" class="h-12" />
                </div>
              </div>
            </div>
          </div>

          <!-- Device Footer -->
          <div class="rounded-t-[20px] py-6 flex justify-center items-center">
            <div class="border-2 border-slate-300 dark:border-slate-700 h-12 w-12 rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>

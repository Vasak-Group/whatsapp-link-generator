<script setup lang="ts">
// No reactive state needed for this component
</script>

<template>
  <footer id="footer" class="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
    <div class="footer-top py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-whatsapp">Método de Uso</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Area Section -->
          <div class="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
            <div class="mb-4">
              <font-awesome-icon 
                :icon="['fas', 'globe']" 
                class="text-whatsapp text-6xl"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4">Área</h3>
              <p class="text-gray-300 leading-relaxed">
                Donde dice el área deberás poner el código de tu país. Si el teléfono es de Argentina 
                tendrías que poner 54, para ver el código de tu país visita 
                <a 
                  href="https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-whatsapp hover:text-whatsapp-dark underline transition-colors"
                >
                  esta página
                </a>.
              </p>
            </div>
          </div>

          <!-- Phone Section -->
          <div class="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
            <div class="mb-4">
              <font-awesome-icon 
                :icon="['fas', 'phone']" 
                class="text-whatsapp text-6xl"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4">Teléfono</h3>
              <p class="text-gray-300 leading-relaxed">
                Donde dice el teléfono deberás poner el número de teléfono al cual quieres que se le 
                envíe el mensaje cuando hagan click en el enlace, por ejemplo 1123882753.
              </p>
            </div>
          </div>

          <!-- Message Section -->
          <div class="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
            <div class="mb-4">
              <font-awesome-icon 
                :icon="['fas', 'message']" 
                class="text-whatsapp text-6xl"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4">Mensaje</h3>
              <p class="text-gray-300 leading-relaxed">
                Escribe el texto que aparecerá en el mensaje para enviar, una vez que el usuario haga 
                click en el enlace. No se recomiendan mensajes largos pero sí identificativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 border-t border-gray-700">
      <div class="text-center">
        <div class="copyright text-gray-400 mb-2">
          &copy; <strong>WhatsApp Link Generator</strong>. Todos los derechos reservados.
        </div>
        <div class="credits">
          <a 
            target="_blank" 
            href="https://vasak.net.ar"
            rel="noopener noreferrer"
            class="text-whatsapp hover:text-whatsapp-dark font-bold transition-colors"
          >
            Vasak
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>

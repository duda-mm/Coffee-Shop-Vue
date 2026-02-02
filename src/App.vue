<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import TheFooter from './components/TheFooter.vue'

// Imagens dos grãos no topo (esquerda e direita)
import graosTopoEsq from '@/assets/img/background/GraosUpOFC.png'
import graosTopoDir from '@/assets/img/background/GraosOFC.png'

const route = useRoute()
</script>

<template>
  <div class="app-wrapper">

    <!-- Grãos no topo: aparecem em TODAS AS PÁGINAS EXCETO a home -->
    <img
      v-if="route.path !== '/'"
      :src="graosTopoEsq"
      class="bg-grain grain-top-left"
      alt="Grãos decorativos topo esquerdo"
    />
    <img
      v-if="route.path !== '/'"
      :src="graosTopoDir"
      class="bg-grain grain-top-right"
      alt="Grãos decorativos topo direito"
    />

    <NavBar />

    <main>
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #E6E2D9; /* cor de fundo principal do site */
}

/* ── GRÃOS DECORATIVOS NO TOPO ── */
.bg-grain {
  position: fixed;           /* fixed → fica preso na viewport, não rola */
  top: 0;
  z-index: -2;               /* bem atrás de navbar, conteúdo e footer */
  width: auto;
  max-width: 220px;          /* tamanho inicial – ajuste aqui se quiser maior/menor */
  pointer-events: none;      /* não interfere em cliques */
  user-select: none;
}

.grain-top-left {
  left: 0;
  /* Se sobrar 1-5px na borda esquerda (devido a transparência ou scaling): */
  /* margin-left: -15px; */   /* descomente para testar */
}

.grain-top-right {
  right: 0;
  /* margin-right: -15px; */  /* descomente se necessário na direita */
}

/* Ajustes para telas menores */
@media (max-width: 768px) {
  .bg-grain {
    max-width: 140px;        /* menor no celular */
    opacity: 0.75;           /* um pouco mais discreto (opcional) */
  }
}

main {
  flex: 1;
  width: 100%;
  padding: 0 20px;
  position: relative;
}
</style>
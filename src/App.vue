<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import TheFooter from './components/TheFooter.vue'
import graosTopoEsq from '@/assets/img/background/GraosUpOFC.png'
import graosTopoDir from '@/assets/img/background/GraosOFC.png'

const route = useRoute()
</script>

<template>
  <div class="app-wrapper">

    
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

<style>

.app-wrapper {
  background-image: url(assets/img/background/GraosUpOFC.png), url(assets/img/background/GraosOFC.png), url(assets/img/background/GraosBottomCafe.png);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, top right, bottom left;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #E6E2D9; 
}


.bg-grain {
  position: fixed;          
  top: 0;
  z-index: -2;              
  width: auto;
  max-width: 220px;          
  pointer-events: none;      
  user-select: none;
}

.grain-top-left {
  left: 0;
}

.grain-top-right {
  right: 0;
}


@media (max-width: 768px) {
  .bg-grain {
    max-width: 140px;        
    opacity: 0.75;        
  }
}

main {
  flex: 1;
  width: 100%;
  padding: 0 20px;
  position: relative;
}
</style>
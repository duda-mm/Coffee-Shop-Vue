<script setup>
import { RouterLink } from 'vue-router'
import homeImage from '@/assets/img/produtos/FotoCafeHome.png' 
import graosTopo from '@/assets/img/background/GraosUpHome.png'
import graosBaixo from '@/assets/img/background/GraoBottomHome.png'
</script>

<template>
  <div class="home-section">

    <!-- Grãos fixos na borda da viewport -->
    <img :src="graosTopo" class="grao grao-topo" alt="Grãos decorativos superior" />
    <img :src="graosBaixo" class="grao grao-baixo" alt="Grãos decorativos inferior" />

    <div class="content-wrapper">
      <div class="text-side">
        <h1>
          O CAFÉ CHEIRA A<br>PARAÍSO MOÍDO<br>NA HORA!
        </h1>
        <p class="subtitle">
          Grãos selecionados e ambiente<br>acolhedor para o seu dia.
        </p>
        <RouterLink to="/cafes" class="btn-primary">
          VER MENU COMPLETO
        </RouterLink>
      </div>

      <div class="image-side">
        <img :src="homeImage" alt="Café Destaque"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-section {
  position: relative;
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent; /* não interfere no body */
}

/* ── GRÃOS COLADOS NA BORDA ESQUERDA DA JANELA ── */
.grao {
  position: fixed;
  left: 0;
  z-index: 0;
  width: 190px;          
  max-width: 12vw;           /* relativo à largura da tela */
  pointer-events: none;
  user-select: none;
}

.grao-topo {
  top: 0;
  /* Se ainda sobrar 1–3px de espaço por causa de borda ou scaling: */
  /* margin-left: -4px; */   /* descomente se necessário */
}

.grao-baixo {
  bottom: 0;
  /* margin-left: -4px; */   /* descomente se necessário */
}

/* Conteúdo principal centralizado */
.content-wrapper {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 5vw;            /* padding relativo = mais adaptável */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;
  position: relative;
  z-index: 2;
}

.text-side { width: 45%; padding-top: 15px; margin-left: 50px;}

h1 {
  font-family: 'Unna', serif;
  font-weight: 700;
  font-size: 3.2rem;
  color: #3E2723;
  margin-bottom: 20px;
  line-height: 1.1;
}

.subtitle {
  font-family: 'Alata', sans-serif;
  font-size: 1.22rem;
  color: #000;
  font-weight: 550;
  margin-bottom: 30px;
  max-width: 400px;

}

.btn-primary {
  display: inline-block;
  background-color: #3E2723;
  color: #E6E2D9;
  padding: 0.9rem 2.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-family: 'Alata', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;
}

.btn-primary:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

.image-side {
  width: 50%;
  display: flex;
  justify-content: flex-end;

}

.image-side img {
  width: 85%;
  max-width: 600px;
  height: auto;
  margin-right: 80px;
  border-radius: 20px 0 0 20px;
  display: block;
}



/* ── MOBILE ── */
@media (max-width: 950px) {
  .content-wrapper {
    flex-direction: column-reverse;
    text-align: center;
    padding: 3vh 6vw 6vh;
    gap: 4vh;
  }

  .text-side {
    width: 100%;
    padding-top: 1vh;
  }

  .subtitle {
    margin: 0 auto 1.8rem;
    max-width: 90%;
  }

  .image-side {
    width: 100%;
    justify-content: center;
  }

  .image-side img {
    max-width: 82%;
    border-radius: 20px;
  }

  .grao {
    max-width: 160px;
    opacity: 0.45;           /* menos intrusivo em telas pequenas */
  }

}
</style>

<!-- Mantenha isso no arquivo global ou em App.vue se ainda não tiver -->
<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: #E6E2D9;
}
</style>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar-wrapper">
    <nav class="navbar-capsula">
      
      <RouterLink to="/" class="nav-link">INÍCIO</RouterLink>
      <RouterLink to="/cafes" class="nav-link">CAFÉS</RouterLink>
      <RouterLink to="/diversos" class="nav-link">DIVERSOS</RouterLink>
      <RouterLink to="/sobre" class="nav-link">SOBRE</RouterLink>

      <RouterLink to="/contato" class="nav-link btn-contato">
        CONTATO
      </RouterLink>

    </nav>
  </header>
</template>

<style scoped>
/* 1. Container externo para centralizar a cápsula na tela */
.navbar-wrapper {
  width: 100%;
  padding-top: 15px; /* Espaço do topo da página */
  display: flex;
  justify-content: center; /* Centraliza a barra no meio da tela */
}

/* 2. A barra em formato de cápsula (Bege) */
.navbar-capsula {
  background-color: #D0CBBF; /* Cor do fundo geral */
  border-radius: 50px; /* Borda bem redonda */
  padding: 5px 10px 5px 40px; /* Padding ajustado: mais espaço na esquerda, menos na direita pro botão caber */
  display: flex;
  align-items: center;
  gap: 30px; /* Espaço entre os textos */
  box-shadow: 0 4px 6px rgba(0,0,0,0.05); /* Sombra leve opcional */
}

/* 3. Estilo dos Links Normais */
.nav-link {
  text-decoration: none;
  font-family: 'Alata', sans-serif; /* Fonte pedida */
  font-size: 1.1rem;
  color: #4E2C09; /* Marrom escuro */
  text-transform: uppercase;
  font-weight: 400; /* Alata já é um pouco grossa */
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 0.7; /* Efeito suave ao passar o mouse */
}

/* 4. Estilo Específico do Botão Contato */
.btn-contato {
  background-color: #4E2C09; /* Fundo Marrom */
  color: #D0CBBF !important; /* Texto Bege (inverso) - !important garante que sobrescreva a cor padrão */
  padding: 12px 35px; /* Tamanho do botão */
  border-radius: 40px; /* Borda redonda do botão */
  display: inline-block;
  margin-left: 10px; /* Um espacinho extra antes do botão */
}



.btn-contato:hover {
  background-color: #361e06; /* Escurece um pouco no hover */
  opacity: 1;
}

/* Responsividade simples para telas pequenas */
@media (max-width: 768px) {
  .navbar-capsula {
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    border-radius: 20px;
    width: 90%;
  }
  
  .btn-contato {
    width: 100%;
    text-align: center;
    margin-left: 0;
  }
}
</style>
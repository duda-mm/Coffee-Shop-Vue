<script setup>
import { ref } from 'vue'
// Importe a imagem do café que fica ao lado
// Certifique-se de ter o arquivo correto na pasta
import imgLateral from '@/assets/img/produtos/FotoCafe.png' 
import graoBaixoContato from '@/assets/img/background/GraosBottomContato.png'

const nome = ref('')
const email = ref('')
const msg = ref('')

function enviar() {
  alert("Mensagem enviada!")
}
</script>

<template>
  <div class="page-wrapper">
    <img :src="graoBaixoContato" class="decoracao-baixo" alt="" />
    
    <div class="contato-card">

      <div class="image-side">
        <img :src="imgLateral" alt="Café" />
      </div>
      
      <div class="content-side">
        <h2>CONTATE-NOS</h2> <div class="info-text">
        </div>

        <form @submit.prevent="enviar">
          <label>NOME:</label>
          <input type="text" v-model="nome" placeholder="Seu nome">

          <label>EMAIL:</label>
          <input type="email" v-model="email" placeholder="Seu email">

          <label>MENSAGEM:</label>
          <textarea v-model="msg" rows="4" placeholder="Sua mensagem"></textarea>

          <button type="submit">ENVIAR</button>
        </form>
      </div>

    </div>

  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.contato-card {
  display: flex;
  background-color: #fff; /* Fundo branco do cartão */
  max-width: 1000px;
  width: 100%;
  border-radius: 20px; /* Arredondamento conforme o layout */
  overflow: hidden; /* Para a imagem respeitar o arredondamento */
  box-shadow: 0 5px 15px rgba(0,0,0,0.1); /* Sombra leve */
}

/* --- LADO DO CONTEÚDO --- */
.content-side {
  flex: 1; /* Ocupa metade */
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  color: #4B382A;
  margin-bottom: 20px;
  font-size: 2rem;
}

.info-text {
  margin-bottom: 30px;
  color: #666;
}

/* Estilo do Formulário igual ao pedido anteriormente */
label {
  display: block;
  margin-bottom: 5px;
  color: #4B382A;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #F9F9F9;
}

button {
  background-color: #4B382A;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}

/* --- LADO DA IMAGEM --- */
.image-side {
  flex: 1; /* Ocupa a outra metade */
  background-color: #eee;
}

.image-side img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Faz a imagem preencher todo o espaço sem deformar */
  display: block;
}

/* Responsivo (Celular) */
@media (max-width: 768px) {
  .contato-card {
    flex-direction: column; /* Um embaixo do outro */
  }
  .image-side {
    height: 250px; /* Altura fixa da imagem no celular */
  }
}

.page-wrapper {
  position: relative; /* OBRIGATÓRIO */
  /* ... resto do CSS ... */
  padding-bottom: 80px;
}

.decoracao-baixo {
  position: absolute;
  bottom: 0;
  right: 0; /* Ajuste conforme o Figma */
  max-width: 200px;
  z-index: -1;
}
</style>
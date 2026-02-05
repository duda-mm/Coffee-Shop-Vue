<script setup>
import { ref } from 'vue'
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
          <input type="text" v-model="nome" placeholder="NOME">
          <input type="email" v-model="email" placeholder="EMAIL">
          <textarea v-model="msg" rows="4" placeholder="MENSAGEM"></textarea>

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
  background-color: #D0CBBF; 
  max-width: 80rem;
  border-radius: 20px; 
  overflow: hidden; 
  box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
}


.content-side {
  flex: 1; 
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h2 {
  color: #290902;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.info-text {
  margin-bottom: 30px;
  color: #290902;
}

input, textarea {
  width: 80%;
  padding: 15px;
  font-size: 0.95em;
  font-family: "Alata", sans-serif;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #E6E2D9;
}

button {
  background-color: #4E2C09;
  color: #E6E2D9;
  padding: 12px 30px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  width: 30%;
  margin-top: 1rem;
}


.image-side {
  flex: 1;
}

.image-side img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

@media (max-width: 768px) {
  .contato-card {
    flex-direction: column; 
  }
  .image-side {
    height: 250px; 
  }
}

.page-wrapper {
  position: relative; 
  
  padding-bottom: 80px;
}

.decoracao-baixo {
  position: absolute;
  bottom: 0;
  right: 0; 
  max-width: 200px;
  z-index: -1;
}
</style>
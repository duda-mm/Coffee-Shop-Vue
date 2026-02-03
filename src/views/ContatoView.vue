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
  background-color: #fff; 
  max-width: 1000px;
  width: 100%;
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


.image-side {
  flex: 1; 
  background-color: #eee;
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
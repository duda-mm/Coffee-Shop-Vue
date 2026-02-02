<script setup>
defineProps({
  titulo: String,
  descricao: String,
  preco: String,
  imagem: String
})
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="imagem" :alt="titulo" />
    </div>
    
    <div class="card-content">
      <h3 class="card-title" v-html="titulo"></h3>
      <p class="card-desc">{{ descricao }}</p>
      
      <div class="card-footer">
        <span class="card-price">{{ preco }}</span>
        
        <button class="btn-pedir">Peça já o seu</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #F3F3F3; 
  border-radius: 15px; /* Ajuste conforme o arredondamento do Figma */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 280px; /* Largura fixa para ficar igual ao card do layout */
  box-shadow: 0 4px 10px rgba(0,0,0,0.1); /* Sombra suave */
}

.card-image img {
  width: 100%;
  height: 200px; /* Altura fixa da imagem */
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  color: #4B382A;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.card-desc {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.4;
}

/* --- ÁREA DO PREÇO E BOTÃO --- */
.card-footer {
  margin-top: auto; /* Empurra para o final do card */
  display: flex;
  justify-content: space-between; /* Separa preço e botão */
  align-items: center;
}

.card-price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #4B382A;
}

.btn-pedir {
  background-color: #4B382A; /* Cor Marrom do layout */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px; /* Borda bem redonda */
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.btn-pedir:hover {
  background-color: #3a2b20; /* Escurece um pouco ao passar o mouse */
}
</style>
<script setup>
import ProductCard from '../components/ProductCard.vue'


import imgamericano from '@/assets/img/produtos/americano.png'
import imgmacchiato from '@/assets/img/produtos/macchiato.png'
import imgflatwhite from '@/assets/img/produtos/flatwhite.png'
import imgcappuccino from '@/assets/img/produtos/cappuccino.png'
import graoBaixo from '@/assets/img/background/GraosBottomCafe.png'

const listaCafes = [
  { 
    id: 1, 
    nome: 'AMERICANO',  
    preco: 'R$ 12,95', 
    imagem: imgamericano
  },
  { 
    id: 2, 
    nome: 'MACCHIATO',  
    preco: 'R$ 20,75', 
    imagem: imgmacchiato
  },
  { 
    id: 3, 
    nome: 'FLAT WHITE',  
    preco: 'R$ 19,20', 
    imagem: imgflatwhite
  },
  { 
    id: 4, 
    nome: 'CAPPUCCINO',  
    preco: 'R$ 15,60', 
    imagem: imgcappuccino
  }
  

]
</script>

<template>
  <div class="page-container">
    
    <h2 class="page-title">MAIS PEDIDOS</h2>
    
    <div class="grid">
      <ProductCard 
        v-for="item in listaCafes" 
        :key="item.id"
        :titulo="item.nome"
        :descricao="item.descricao"
        :preco="item.preco"
        :imagem="item.imagem"
      />
      <img :src="graoBaixo" class="decoracao-baixo" alt="" />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  color: #4B382A;
  margin-bottom: 40px;
}

.grid {
  display: flex;
  flex-wrap: nowrap; /* Impede que os itens caiam para a linha de baixo */
  gap: 20px;         /* Reduzi um pouco o gap para caber melhor em telas menores */
  justify-content: center;
  align-items: stretch;
  width: 100%;
}

.page-container {
  position: relative; 
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 100px 20px; 
}
.decoracao-baixo {
  position: absolute;
  bottom: 0;
  left: 0; 
  max-width: 250px;
  z-index: -1; 
}
</style>
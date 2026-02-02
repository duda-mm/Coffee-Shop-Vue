<script setup>
import ProductCard from '../components/ProductCard.vue'

import img1 from '@/assets/img/produtos/img1.png'
import img2 from '@/assets/img/produtos/img2.png'
import img3 from '@/assets/img/produtos/img3.png'
import img4 from '@/assets/img/produtos/img4.png'

import graoBaixoDiversos from '@/assets/img/background/GraosBottomDiversos.png'

const listaDiversos = [
  { 
    id: 1, 
    nome: 'COOKIE +<br>CARAMEL MACCHIATO',  
    preco: 'R$ 32,50', 
    imagem: img1
  },
  { 
    id: 2, 
    nome: 'MACARONS +<br>FLAT WHITE',  
    preco: 'R$ 30,10', 
    imagem: img2
  },
  { 
    id: 3, 
    nome: 'PUDIM CARAMELIZADO +<br>LATTE',  
    preco: 'R$ 19,20', 
    imagem: img3
  },
  { 
    id: 4, 
    nome: 'KIDS: BOLO +<br>CAFÉ COM LEITE',  
    preco: 'R$ 41,60', 
    imagem: img4
  }
]
</script>

<template>
  <div class="page-container">
    <h2 class="page-title">COMBOS PREFERIDOS</h2>
    
    <div class="grid">
      <ProductCard 
        v-for="item in listaDiversos" 
        :key="item.id"
        :titulo="item.nome"
        :preco="item.preco"
        :imagem="item.imagem"
      />
      <img :src="graoBaixoDiversos" class="decoracao-baixo" alt="" />
    </div>
  </div>
</template>

<style scoped>
/* Use os mesmos estilos da CafesView ou ajuste conforme o Figma */
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
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
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
  right: 0; /* Exemplo na Direita. Mude se necessário. */
  max-width: 250px;
  z-index: -1;
}
</style>
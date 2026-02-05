<script setup>
import { ref, onMounted } from 'vue' 
import ProductCard from '../components/ProductCard.vue'

import img1 from '@/assets/img/produtos/img1.png'
import img2 from '@/assets/img/produtos/img2.png'
import img3 from '@/assets/img/produtos/img3.png'
import img4 from '@/assets/img/produtos/img4.png'
import graoBaixoDiversos from '@/assets/img/background/GraosBottomDiversos.png'


const dadosIniciais = [
  { id: 1, nome: 'COOKIE +<br>CARAMEL MACCHIATO', preco: 'R$ 32,50', imagem: img1 },
  { id: 2, nome: 'MACARONS +<br>FLAT WHITE', preco: 'R$ 30,10', imagem: img2 },
  { id: 3, nome: 'PUDIM CARAMELIZADO +<br>LATTE', preco: 'R$ 19,20', imagem: img3 },
  { id: 4, nome: 'KIDS: BOLO +<br>CAFÉ COM LEITE', preco: 'R$ 41,60', imagem: img4 }
]


const listaDiversos = ref([])

onMounted(() => {
  const salvo = localStorage.getItem('combos_preferidos')
  if (salvo) {
    listaDiversos.value = JSON.parse(salvo)
  } else {
   
    listaDiversos.value = dadosIniciais
    localStorage.setItem('combos_preferidos', JSON.stringify(dadosIniciais))
  }
})
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

.page-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 100px 20px;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  color: #290902;
  margin-bottom: 40px;
}

.grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 30px;
  justify-content: center;
  overflow-x: auto; 
}

.decoracao-baixo {
  position: absolute;
  bottom: 0;
  right: 0; 
  max-width: 250px;
  z-index: -1;
}
</style>
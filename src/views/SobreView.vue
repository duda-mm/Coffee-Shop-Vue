<script setup>
import imgSobre from '@/assets/img/produtos/CafeConjunto.png'
</script>

<template>
  <div class="sobre-wrapper">
    <div class="col-img">
      <img :src="imgSobre" alt="Nossa História" />
    </div>

    <div class="col-text">
      <h2>DO GRÃO<br>À XÍCARA...</h2>
      
      <p>
        No meio da correria da cidade, criamos um espaço onde o tempo passa mais devagar. Nossa cafeteria nasceu do desejo de conectar pessoas. Acreditamos que as melhores ideias e as conversas mais sinceras surgem ao redor de uma boa mesa, acompanhadas de um bolo caseiro e um café passado na hora!
      </p>
    </div>
  </div>
</template>

<style scoped>
.sobre-wrapper {
  display: flex;
  align-items: center; 
  gap: 50px; 
  padding: 60px 0;
}

.col-img, .col-text {
  flex: 1; 
}

.col-img img {
  width: 100%;
  border-radius: 20px; 
}

h2 {
  color: #4B382A;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}


@media (max-width: 768px) {
  .sobre-wrapper {
    flex-direction: column;
  }
}
</style>
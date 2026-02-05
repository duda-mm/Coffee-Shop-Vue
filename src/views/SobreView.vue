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
  max-width: 100rem;
  margin: 0 auto;
}

.col-img, .col-text {
  flex: 1; 
}

.col-img img {
  width: 90%;
  border-radius: 20px; 
  margin-left: 95px;
}

h2 {
  color: #290902;
  font-family: 'Unna', serif;
  font-size: 4rem; 
  line-height: 1;
  margin-bottom: 25px;
  font-weight: bold;
  max-width: 30rem;
  text-align: right;
}

p {
  color: #000;
  font-size: 1.35rem; 
  line-height: 1.4;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: 'Alata', sans-serif;
  max-width: 30rem;
  text-align: right;
}

.social {
  display: block;
  font-weight: bold;
  font-size: 1.1rem;
  color: #290902;
}



@media (max-width: 768px) {
  .sobre-wrapper {
    flex-direction: column;
  }
}
</style>
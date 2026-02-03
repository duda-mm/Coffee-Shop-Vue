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
.navbar-wrapper {
  width: 100%;
  padding-top: 15px; 
  display: flex;
  justify-content: center; 
}

.navbar-capsula {
  background-color: #D0CBBF; 
  border-radius: 50px;
  padding: 5px 10px 5px 40px; 
  display: flex;
  align-items: center;
  gap: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05); 
}

.nav-link {
  text-decoration: none;
  font-family: 'Alata', sans-serif; 
  font-size: 1.1rem;
  color: #4E2C09; 
  text-transform: uppercase;
  font-weight: 400; 
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 0.7;
}


.btn-contato {
  background-color: #4E2C09; 
  color: #D0CBBF !important; 
  padding: 12px 35px;
  border-radius: 40px; 
  display: inline-block;
  margin-left: 10px; 
}



.btn-contato:hover {
  background-color: #361e06; 
  opacity: 1;
}


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
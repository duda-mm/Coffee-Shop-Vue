<template>
  <div class="grains-top-wrapper">
    <img src="@/assets/img/background/GraosUpOFC.png" class="grain grain-left" alt="" />
    <img src="@/assets/img/background/GraosOFC.png" class="grain grain-right" alt="" />
  </div>
</template>

<script setup>
// sem lógica necessária por enquanto
</script>

<style scoped>
.grains-top-wrapper {
  position: relative;
  width: 100%;
  height: 0; /* não ocupa espaço vertical */
  pointer-events: none;
}

.grain {
  position: fixed;
  top: 0;
  z-index: -1;
  width: auto;
  max-width: 220px;        /* ajuste o tamanho desejado aqui */
  pointer-events: none;
  user-select: none;
}

.grain-left {
  left: 0;
}

.grain-right {
  right: 0;
}

/* Ajuste mobile – opcional */
@media (max-width: 768px) {
  .grain {
    max-width: 140px;
    opacity: 0.8;          /* menos chamativo se quiser */
  }
}
</style>
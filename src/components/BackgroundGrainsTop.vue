<template>
  <div class="grains-top-wrapper">
    <img src="@/assets/img/background/GraosUpOFC.png" class="grain grain-left" alt="" />
    <img src="@/assets/img/background/GraosOFC.png" class="grain grain-right" alt="" />
  </div>
</template>

<style scoped>
.grains-top-wrapper {
  position: relative;
  width: 100%;
  height: 0; 
  pointer-events: none;
}

.grain {
  position: fixed;
  top: 0;
  z-index: -1;
  width: auto;
  max-width: 220px;        
  pointer-events: none;
  user-select: none;
}

.grain-left {
  left: 0;
}

.grain-right {
  right: 0;
}


@media (max-width: 768px) {
  .grain {
    max-width: 140px;
    opacity: 0.8;          
  }
}
</style>
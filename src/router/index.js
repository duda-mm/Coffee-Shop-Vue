import { createRouter, createWebHistory } from 'vue-router'

// Importando as 5 páginas que você criou
import HomeView from '../views/HomeView.vue'
import CafesView from '../views/CafesView.vue'
import DiversosView from '../views/DiversosView.vue'
import SobreView from '../views/SobreView.vue'
import ContatoView from '../views/ContatoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/cafes', name: 'cafes', component: CafesView },
    { path: '/diversos', name: 'diversos', component: DiversosView },
    { path: '/sobre', name: 'sobre', component: SobreView },
    { path: '/contato', name: 'contato', component: ContatoView }
  ]
})

export default router
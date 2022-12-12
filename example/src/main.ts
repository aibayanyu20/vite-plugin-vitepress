import { createApp } from 'vue'
import '../../src/theme'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: () => import('./index.md'),
    },
    {
      path: '/test',
      component: () => import('./test.md'),
    },
  ],
})

const app = createApp(App)
app.use(router)

app.mount('#app')

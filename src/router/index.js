import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage'
import ChatroomPage from '../views/ChatroomPage'

// ナビゲーションガードの設定
const requireAuth = async(to, from, next) => {
  console.log('requireAuthが呼ばれています!')
  
  next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomPage,
    // 設定されているルートにアクセスする前に呼び出されるメソッド
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

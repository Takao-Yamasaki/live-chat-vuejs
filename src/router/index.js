import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage'
import ChatroomPage from '../views/ChatroomPage'
// validate.jsの読み込み
import useValidate from '../auth/validate'
// validateメソッドの定義
const { error, validate } = useValidate()

// eslint-disable-next-line no-unused-vars
// ナビゲーションガードの設定
const requireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  // uid、client、accessTokenのいずれかの値がnullだった場合は、ウェルカムページにリダイレクト
  if (!uid || !client || !accessToken) {
    console.log("ログインしていません")
    next({ name: 'Welcome' })
    // ここで処理を終わらせてので、return
    return
  }

  await validate()
  // チャットルームページへリダイレクト
  if (error.value) {
    console.log("認証に失敗しました")
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const noRequireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  if (!uid && !client && !accessToken) {
    next()
    return
  }

  await validate()

  if (!error.value) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage,
    beforeEnter: noRequireAuth
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

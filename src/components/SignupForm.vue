<template>
  <h2>アカウントを登録</h2>
  <form @submit.prevent="signUp">
    <input type="text" required placeholder="名前" v-model="name">
    <input type="email" required placeholder="メールアドレス" v-model="email">
    <input type="password" required placeholder="パスワード" v-model="password">
    <input type="password" required placeholder="パスワード（確認用）" v-model="passwordConfirmation">
    <div class="error">{{ error }}</div>
    <button>登録する</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  emits: ['redirectToChatRoom'],
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: null
    }
  },
  methods: {
    // 非同期処理
    // Axiosを使って、RailsのサインアップAPIと通信を行う
    async signUp () {
      // 初期化
      this.error = null
      // エラーハンドリング
      try {
        const res = await axios.post('http://localhost:3000/auth', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
          }
        )
        // レスポンスが返ってこない場合、エラーを発生させる
        if (!res) {
          throw new Error('アカウントを登録できませんでした')
        }

        if (!this.error) {
          window.localStorage.setItem('access-token', res.headers['access-token'])
          window.localStorage.setItem('client', res.headers.client)
          window.localStorage.setItem('uid', res.headers.uid)
          window.localStorage.setItem('name', res.data.data.name)
          this.$emit('redirectToChatRoom')
        }
        this.error = null

        console.log({ res })

        return res
        // Tryの中でエラーになったら、アカウントを登録できませんでしたが返ってくる
      } catch (error) {
        this.error = 'アカウントを登録できませんでした'
      }
    }
  }
}
</script>

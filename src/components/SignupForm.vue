<template>
  <div>
    <h2>アカウント登録</h2>
    <form @submit.prevent="signUp">
      <input type="text" require placeholder="名前" v-model="name">
      <input type="email" require placeholder="メールアドレス" v-model="email">
      <input type="password" require placeholder="パスワード" v-model="password">
      <input type="password" require placeholder="パスワード（確認用）" v-model="passwordConfirmation">
      <button>登録する</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation:''
    }
  },
  methods: {
    // 非同期処理
    // Axiosを使って、RailsのサインアップAPIと通信を行う
    async signUp() {
      // エラーハンドリング
      try {
        const res = await axios.post('http://localhost:3000/auth', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
          }
        )
        console.log({res})
        return res
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>

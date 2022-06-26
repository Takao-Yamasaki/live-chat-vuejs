<template>
  <div>
    <h2>アカウント登録</h2>
    <form>
      <input type="text" require placeholder="名前" v-model="name">
      <input type="email" require placeholder="メールアドレス" v-model="email">
      <input type="password" require placeholder="パスワード" v-model="password">
      <input type="password" require placeholder="パスワード（確認用）" v-model="passwordConfirmation">
      <button>登録する</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation:''
    }
  }
}
</script>

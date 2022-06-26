<template>
  <div>
    これはコンポーネントから表示されています。
    <p>{{ message }}</p>
    <button @click="onClick">親メソッドを実行するボタン</button>
  </div>
</template>

<script>
export default {
  // 親コンポーネントから受け取るデータを定義
  props:['message'],
  // $emitで親コンポーネントのメソッドを実行
  methods: {
    onClick() {
      this.$emit('toggle')
    }
  }
}
</script>

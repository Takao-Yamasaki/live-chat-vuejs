<template>
  <div>
    これはコンポーネントから表示されています。
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  // 親コンポーネントから受け取るデータを定義
  props:['message']
}
</script>

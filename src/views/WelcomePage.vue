<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- TestComponentのHTMLが出力される -->
    <!-- 子コンポーネントで$emitメソッドが実行された場合に、親コンポーネントのtoggleメソッドを実行する -->
    <TestComponent @toggle="toggle" message="コンポーネントにデータが渡されています"/>
    <p v-if="isEnabled">こんにちは</p>
  </div>
</template>

<script>
// TestComponentの読み込み
import TestComponent from '../components/TestComponent.vue'

export default {
  // 読み込んだコンポーネントの定義
  components: {
    TestComponent
  },
  data() {
    return {
      title: '初めてのVue.jsアプリです!',
      subtitle: 'ようこそ',
      isEnabled: true
    }
  },
  computed: {
    text() {
      if(this.isEnabled) {
        return 'こんにちは！'
      } else {
        return 'さよなら！' 
      }
    }
  },
  methods: {
    toggle () {
      // メソッドプロパティ内でデータプロパティ呼び出すには、thisをつける
      this.isEnabled = !this.isEnabled
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
  color: red;
}
</style>

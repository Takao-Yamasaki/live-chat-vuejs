<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="isEnabled">{{ subtitle }}</p>
    <button @dblclick="toggle">トグルする</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '初めてのVue.jsアプリです!',
      subtitle: 'ようこそ',
      isEnabled: true
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

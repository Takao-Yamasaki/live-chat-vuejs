<template>
  <div>
    <h1>{{ 3 + 3 }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '初めてのVue.jsアプリです!',
      subtitle: 'ようこそ'
    }
  }
}
</script>

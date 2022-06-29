<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
  </div>
</template>

<script>
import Navbar from '../components/NavbarPage.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
  components: { Navbar, ChatWindow }
}
</script>

<style scoped>
</style>

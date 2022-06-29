<template>
  <div class="container">
    <Navbar/>
    <!-- ChatWindow.vueにメッセージを渡す -->
    <ChatWindow :messages="messages" />
  </div>
</template>

<script>
import Navbar from '../components/NavbarPage.vue'
import ChatWindow from '../components/ChatWindow.vue'
import axios from 'axios'

export default {
  components: { Navbar, ChatWindow },
  data() {
    return {
      // メッセージオブジェクトを格納
      messages: [],
    }
  },
  methods: {
    // RailsのAPI通信で、メッセージ一覧を取得する
    async getMessages () {
      try {
        const res = await axios.get('http://localhost:3000/messages', {
          headers: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client')
          }
        }) 
        if (!res){
          new Error('メッセージ一覧が取得できませんでした')
        }
        // res.dataの中にメッセージ一覧が格納されているので、これをthis.messages内に格納する
        this.messages = res.data
      } catch(err) {
        console.log(err)
      }
    }
  },
  // ライフサイクルフック
  // ページが読み込まれ、HTMLが表示される前に実行
  mounted() {
    this.getMessages()
  }
}
</script>

<style scoped>
</style>

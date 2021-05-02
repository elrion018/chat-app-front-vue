<template>
  <div id="app">
    <div>
      <p>Messages</p>
      <textarea disabled :value="messages"></textarea>
    </div>
    <div>
      <input v-model="message" @keyup.enter="sendChatMessage()" />
    </div>
  </div>
</template>

<script>
import { text } from './constants';

export default {
  name: 'App',
  mounted() {
    this.sendLoginMessage();
  },

  data() {
    return {
      message: '',
      messages: '',
    };
  },

  sockets: {
    connect: function() {},
    chat: function(data) {
      this.messages += data.message + '\n';
    },

    login: function(data) {
      this.messages += data.message + '\n';
    },
  },

  methods: {
    sendChatMessage() {
      this.$socket.emit('chat', {
        message: this.message,
      });

      this.messages += this.message + '\n';
      this.message = '';
    },

    sendLoginMessage() {
      this.$socket.emit('login', {
        message: text.enterRoom,
      });

      this.messages += text.enterRoom + '\n';
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

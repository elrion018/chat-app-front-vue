<template>
  <div id="app">
    <div>
      <p>Messages</p>
      <textarea disabled :value="messages"></textarea>
    </div>
    <div>
      <input v-model="message" @keyup.enter="sendMessage()" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  },

  methods: {
    sendMessage() {
      this.$socket.emit('chat', {
        message: this.message,
      });

      this.messages += this.message + '\n';
      this.message = '';
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

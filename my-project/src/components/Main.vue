<template>
  <div>
    <p>{{msg}}</p>
    <br>
    <span v-bind:title="message">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
    </span>
    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.',
      seen: true,
      todos: [
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' },
        { text: '무언가 멋진 것을 만들기' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <span v-bind:title="message">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
    </span>
  </div>
</template>

<script>
export default {
  name: 'Main2',
  data () {
    return {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

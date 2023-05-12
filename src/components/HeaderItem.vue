<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <!-- 3.templateで「username」を呼び出す。 -->
    <p>{{username}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title: "Header",
        text: "ヘッダー"
      }
    },
    // 1.propsで親で定義したカスタム属性「username」を受け取る
    props: {
      // 2.型を文字列に指定する。
      username: String
    }
  }
</script>

<style scoped>
  div{
    border: 2px solid #006400
  }
  h1{
    color: #006400
  }
  p{
    color:#006400
  }
</style>

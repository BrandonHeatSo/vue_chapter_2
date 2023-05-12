<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <!-- 1.clearボタンを作成する。 5.ボタンにclearメソッドを紐付け-->
    <p>{{ buttonname }}<button @click="clear">clear</button></p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title: "Footer",
        text: "フッター"
      }
    },
    // 2.clearメソッドを作成する。
    methods: {
      clear(){
        // 3.totalに0を代入する。
        this.total = 0;
        // 4.clearメソッドを呼び出す。
        this.$emit("clear", this.total)
      }
    },
    props:{
      buttonname: String
    }
  }
</script>

<style scoped>
  div{
    border: 2px solid #808080
  }
  h2{
    color: #808080
  }
  p{
    color: #808080
  }
</style>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <p><button @click="increment">click</button>{{ count }}回</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "Body",
      text: "ボディ",
      count: 0
    }
  },
  // 1.メソッドを定義
  methods: {
    // 2.「increment」という関数を定義する。
    increment(){
      // 3.countを+1する。
      this.count += 1;
      // 4.「this.$emit」でカスタムイベント（自由に作成できるイベント）を定義。addイベントを定義し、引数にカウントした値を持たせる。
      this.$emit("add", this.count);
    }
  }
}
</script>

<style scoped>
  div{
    border: 2px solid #800080
  }
  h2{
    color: #800080
  }
  p{
    color: #800080
  }
</style>

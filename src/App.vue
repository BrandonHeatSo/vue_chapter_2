<template>
  <div>
    <HeaderItem :username="name"></HeaderItem>
    <BodyItem @add="add1"></BodyItem>
    <BodyItem @add="add2"></BodyItem>
    <!-- 6.FooterタグにFooter.vueで定義した、clear関数を呼び出す -->
    <!-- 8.Footerタグに「totalclear関数」を紐付け -->
    <FooterItem :buttonname="footername" @clear="totalclear"></FooterItem>
    <p >合計: {{ total }}回</p>
  </div>
</template>

<script>
  import HeaderItem from './components/HeaderItem.vue'
  import BodyItem from './components/BodyItem.vue'
  import FooterItem from './components/FooterItem.vue'

  export default {
    components: {
      HeaderItem,
      BodyItem,
      FooterItem
    },
    data(){
      return {
        name: "propsテスト",
        count1: 0,
        count2: 0,
        total: 0,
        footername: "クリアボタン",
        // 7.clearの初期値を0にする。
        clear: 0
      }
    },
    methods: {
      add1(count){
        this.count1 = count;
        this.total = this.count1 + this.count2;
      },
      add2(count){
        this.count2 = count;
        this.total = this.count1 + this.count2;
      },
      // 8.allclear関数を作成。
      totalclear(clear){
        // 引数clearには何も入っていない。
        this.total = clear;
      }
    }
  }
</script>

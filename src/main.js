// node_moduleのVue(本体)をインポートしています。
import { createApp } from 'vue'
// コンポーネントの「App.vue」をインポートしています。
import App from './App.vue'

// console.logで「App」を出力してみます。
console.log(App);

// id=appにマウント（使える状態にすること）します。
createApp(App).mount('#app')

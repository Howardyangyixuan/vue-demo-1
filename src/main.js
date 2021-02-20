// import Vue from 'vue'
import App from "./App.vue"

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
console.log(Vue)
new Vue({
  el: "#app",
  template: "<div>{{n}}<button @click='add'>+1</button></div>",
  data() {
    return {
      n: 0
    }
  },
  methods: {
    add() {
      console.log("hi")
      this.n += 1
    }
  }
})

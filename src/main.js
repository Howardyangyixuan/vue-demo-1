// import Vue from 'vue'
import App from "./App.vue"

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
console.log(Vue)
new Vue({
  el: "#app",
  render(h) {
    return h("div", [this.n, h("button", {on: {click: this.add}}, "+1")])
  },
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

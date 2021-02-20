// import Vue from 'vue'
import App from "./App.vue"
import Demo from "./components/Demo"

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
console.log(Demo.render.toString())
new Vue({
  el: "#app",
  render(h) {
    return h(Demo)
  }
})

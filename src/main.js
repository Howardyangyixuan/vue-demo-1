import Demo from "./components/Demo"

const Vue = window.Vue
Vue.config.productionTip = false

// }).$mount('#app')
console.log(Demo.render.toString())
new Vue({
  // el: "#app",
  render(h) {
    return h(Demo)
  }
}).$mount("#app")

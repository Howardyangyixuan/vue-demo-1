import Demo from "./components/Demo"

const Vue = window.Vue
Vue.config.productionTip = false

// }).$mount('#app')
console.log(Demo.render.toString())
const vm = new Vue({
  // el: "#app",
  // render(h) {
  //   return h(Demo)
  // }
  template: `
    <div>
      {{n}}
      <button @click="add">+1</button>
    </div>
  `,
  data: {
    n: 0
  },
  methods: {
    add() {
      this.n += 1
    }
  }
})
vm.$mount("#app")
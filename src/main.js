import Demo from "./components/Demo"

const Vue = window.Vue
Vue.config.productionTip = false

// }).$mount('#app')
console.log(Demo.render.toString())
Vue.component("vueComponent", {
  template: `
    <div>
    Vue.component demo
    </div>
`
})
const vm = new Vue({
  // el: "#app",
  // render(h) {
  //   return h(Demo)
  // }
  components: {
    Demo
  },
  template: `
    <div>
      <vueComponent/>
      <hr>
      <Demo/>
      <hr>
      {{array.filter((value) => value % 2)}}
      <hr>
      {{getOdd()}}
    </div>
  `,
  data: {
    n: 0,
    array: [1, 2, 3, 4, 5, 6]
  },
  methods: {
    add() {
      this.n += 1
    },
    getOdd() {
      return this.array.filter((value) => value % 2)
    }
  }
})
vm.$mount("#app")
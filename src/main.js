import Demo from "./components/Demo"

const Vue = window.Vue
Vue.config.productionTip = false

const vm = new Vue({
  // components: {
  //   Demo
  // },
  // template: `
  //   <div>
  //     <Demo/>
  //   </div>
  // `,
  // render:h=>h(Demo),
  render(h) {
    return h(Demo)
  },
  data: {
    n: 0,
    array: [1, 2, 3, 4, 5, 6]
  },
  methods: {
    add() {
      this.n += 1
    }
  },
  created() {
    console.log("create")
  },
  mounted() {
    console.log("mounted")
  },
  updated() {
    console.log("updated")
    console.log("n:", this.n)
  },
  destroyed() {
    debugger
  }
})
vm.$mount("#app")
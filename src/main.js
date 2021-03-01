// import Demo from "./components/Demo"
// import "./dataLearning"
// import "./dataTest"

const Vue = window.Vue
Vue.config.productionTip = false

let myData = {
  word: "HI",
}

const vm = new Vue({
  template: `
    <div>
      <button @click="set">set</button>
      word:{{word}}
      <hr>
      logo word:{{logo}}
      <hr>
      lowercase word:{{getLower}}
    </div>
  `,
  data: myData,
  computed: {
    //computed这里必须有this
    getLower() {
      return this.word.toLowerCase()
    },
    logo: {
      get() {
        return this.word + "_yyx"
      },
      set(value) {
        this.word += value
      }
    }
  },
  methods: {
    set() {
      this.logo = "*"
    },
  }
})
vm.$mount("#app")


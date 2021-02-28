// import Demo from "./components/Demo"
// import "./dataLearning"
// import "./dataTest"

const Vue = window.Vue
Vue.config.productionTip = false

let myData = {
  undeclared: {
    a: 0
  },
  n: 0,
  visible: true
}

const vm = new Vue({
  template: `
    <div>
      <button @click="set">set undeclared b</button>
      <button @click="add">b+1</button>
      <hr>
      main data:{{n}}
      undeclared data:{{undeclared.b}}
    </div>
  `,
  data: myData,
  methods: {
    set() {
      //但是需要保证set是在其他赋值之前，否则会提前生成，如果已有数据则不会添加代理和监听
      Vue.set(this.undeclared, "b", 1)
      // this.$set(this.undeclared, "b", 1)
    },
    add() {
      this.undeclared.b += 1
      console.log(myData)
    }
  }
})
vm.$mount("#app")

setTimeout(() => {
  myData.n += 10
  console.log(myData)
}, 3000)

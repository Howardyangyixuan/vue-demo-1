// import Demo from "./components/Demo"
// import "./dataLearning"
// import "./dataTest"

const Vue = window.Vue
Vue.config.productionTip = false

let myData = {
  undeclared: {
    a: 0
  },
  array: ["a", "b", "c"],
  n: 0,
  visible: true
}

const vm = new Vue({
  template: `
    <div>
      <button @click="set">set undeclared b</button>
      <button @click="add">b+1</button>
      <button @click="setPush">use set to push d to array</button>
      <button @click="push">push e to array</button>
      <button @click="change">add array 3</button>
      <hr>
      main data:{{n}}
      undeclared data:{{undeclared.b}}
      array:{{array}}
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
    },
    push() {
      this.array.push("e")
    },
    setPush() {
      Vue.set(this.array, "3", "d")
    },
    change() {
      this.array[3] = 1
    }
  }
})
vm.$mount("#app")

setTimeout(() => {
  //直接修改数据，即被监听对象，会触发全局更新
  myData.n += 10
  console.log(myData)
}, 3000)

import Demo from "./components/Demo"

const Vue = window.Vue
Vue.config.productionTip = false

let myData = {
  n: 0,
  visible: true
}

function print(obj) {
  let result = ""
  for (let i in obj) {
    result += i + "=" + obj[i] + "\n"
  }
  return result
}

console.log(print(myData))
console.log(JSON.stringify(myData))
console.log(myData)
const vm = new Vue({
  components: {
    Demo
  },
  template: `
    <div>
      <Demo msg="hi" :value="n" :fn="add" v-if="visible === true"/>
      <button @click="toggle">hide</button>
      <button @click="add">props +1</button>
      <hr>
      main data:{{n}}
    </div>
  `,
  data: myData,
  methods: {
    toggle() {
      this.visible = !this.visible
    },
    add() {
      this.n += 1
    }
  }
})
vm.$mount("#app")

setTimeout(() => {
  myData.n += 10
  console.log(print(myData))
  console.log(JSON.stringify(myData))
  console.log(myData)
}, 3000)

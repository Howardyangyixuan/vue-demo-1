import Demo from "./components/Demo"
import "./dataLearning"

const Vue = window.Vue
Vue.config.productionTip = false

let myData = {
  n: 0,
  visible: true
}

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
}, 3000)

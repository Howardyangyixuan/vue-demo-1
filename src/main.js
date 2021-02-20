import Demo from "./components/Demo"

const Vue = window.Vue
Vue.config.productionTip = false

const vm = new Vue({
  components: {
    Demo
  },
  template: `
    <div>
      <Demo msg="hi" :value="n" v-if="visible === true"/>
      <button @click="toggle">hide</button>
      <button @click="add">props +1</button>
      <hr>
      main data:{{n}}
    </div>
  `,
  data: {
    n: 0,
    visible: true
  },
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
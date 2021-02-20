import Demo from "./components/Demo"

const Vue = window.Vue
Vue.config.productionTip = false

const vm = new Vue({
  components: {
    Demo
  },
  template: `
    <div>
      <Demo v-if="visible === true"/>
      <button @click="toggle">hide</button>
    </div>
  `,
  data: {
    visible: true
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
})
vm.$mount("#app")
// import Demo from "./components/Demo"
// import "./dataLearning"
// import "./dataTest"

const Vue = window.Vue
Vue.config.productionTip = false

let myData = {
  single: "A",
  multiple: [],
  line: "",
  multiLine: [],
  select: "",
  multiSelect: [],
  database: [
    {id: 1, value: "to be"},
    {id: 2, value: "not to be"},
    {id: 3, value: "no answer"}
  ]
}

const vm = new Vue({
  template: `
    <div>
      单选框:{{single}}
      <label>
        <input type="radio" v-model=single value="A">
        <input type="radio" v-model=single value="B">
      </label>
      <hr>
      复选框:{{multiple}}
      <label>
        <input type="checkbox" v-model=multiple value="a">
      </label>
      <label>
        <input type="checkbox" v-model=multiple value="b">
      </label>
      <label>
        <input type="checkbox" v-model=multiple value="c">
      </label>
      <hr>
      单行输入:{{line}}
      <label>
        <input type="text" v-model=line placeholder="fill in line">
      </label>
      <hr>
      多行输入:{{multiLine}}
      <textarea v-model=multiLine placeholder="fill in multiline"/>
      <hr>
      选择:{{select}}
      <select v-model="select">
        <option disabled value="">请选择</option>
        <option v-for="item in database" :key="item.id">{{item.value}}</option>
      </select>
      <hr>
      多选择(用的少，一般用ant-design封装):{{multiSelect}}
      <select multiple v-model="multiSelect">
        <option v-for="item in database" :key="item.id">{{item.value}}</option>
      </select>
    </div>
  `,
  data: myData,
  methods: {
    set() {
      this.logo = "*"
    },
  }
})
vm.$mount("#app")


// import Demo from "./components/Demo"
// import "./dataLearning"
// import "./dataTest"

const Vue = window.Vue
Vue.config.productionTip = false

let myData = {
  syncSingle: "A",
  single: "A",
  multiple: [],
  line: 0,
  multiLine: [],
  select: "",
  multiSelect: [],
  database: [
    {id: 1, value: "to be"},
    {id: 2, value: "not to be"},
    {id: 3, value: "no answer"}
  ],
  user: {
    name: "",
    password: ""
  }
}

const vm = new Vue({
  template: `
    <div>
      使用sync单选框:{{syncSingle}}，初次渲染没有选中，说明是单向绑定
      <label>
        <input type="radio" name="a" :value="syncSingle" @click="syncSingle='A'">
        <input type="radio" name="a" :value="syncSingle" @click="syncSingle='B'">
      </label>
      <hr>
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
        <input type="text" v-model.lazy.number.trim=line placeholder="fill in line">
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
      <hr>
      form表单，登陆框
      <div>
        <form @submit="onSubmit">
          <label>
            用户名
            <input type="text" v-model="user.name">
          </label>
          <label>
            密码
            <input type="password" v-model="user.password">
          </label>
          <button type="submit">登录</button>
        </form>
      </div>
      <hr>
    </div>
  `,
  data: myData,
  methods: {
    onSubmit() {
      console.log(this.user)
    },
  }
})
vm.$mount("#app")


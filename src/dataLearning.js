let obj1 = {
  姓: "Y",
  名: "yx",
  姓名() {
    return this.姓 + this.名
  }
}
console.log("普通函数:" + obj1.姓名())

let obj2 = {
  姓: "Y",
  名: "yx",
  get 姓名() {
    return this.姓 + this.名
  }
}
console.log("使用get,计算属性:" + obj2.姓名)

let obj3 = {
  姓: "Y",
  名: "yx",
  get 姓名() {
    return this.姓 + this.名
  },
  set 姓名(name) {
    this.姓 = name[0]
    this.名 = name.substring(1)
  }
}
obj3.姓名 = "Hjx"
console.log("使用set,计算属性:" + obj3.姓名)

let test = {
  姓: "Y",
  名: "yx",
  get 姓名() {
    return this.姓 + this.名
  },
  set 姓名(name) {
    this.姓 = name[0]
    this.名 = name.substring(1)
  },
  changeName(name){
    this.姓名 = name
    console.log("改完了，名叫:",this.姓名)
  }
}

test.changeName("Hjx")
console.log("使用set,计算属性:" + test.姓名)

let data0 = {}

Object.defineProperty(data0, "n", {
  value: 0,
})
//改不了,这种方式设定与get set互斥
data0.n = 4
console.log("data0:", data0)
console.log("data0.n:", data0.n)

let data1 = {}

let n = 0
Object.defineProperty(data1, "n", {
  get() {
    return n
  },
  set(v) {
    if (v <= 0) return
    n = v
  }
})
data1.n = 0
n = 1
data1.n = -1
console.log("+data1:", data1)
console.log("+data1.n:", data1.n)
n = -1
console.log("-data1:", data1)
console.log("-data1.n:", data1.n)

//使用匿名的n，使得无法修改
let myData = {
  n: 0
}
let data2 = proxy({data: myData})

function proxy({data}) {
  const obj = {}
  Object.defineProperty(obj, "n", {
    get() {
      return data.n
    },
    set(v) {
      if (v <= 0) return
      data.n = v
    },
  })
  return obj
}

data2.n = 2
console.log("+data2:", data2)
console.log("+data2.n:", data2.n)
data2.n = -2
console.log("-data2:", data2)
console.log("-data2.n:", data2.n)
myData.n = -2
console.log("-data2:", data2)
console.log("-data2.n:", data2.n)

//使用匿名的n，使得无法修改
let data3 = proxy2({data: myData})

function proxy2({data}) {
  let value = data.n
  delete data.n
  Object.defineProperty(data, "n", {
    get() {
      return value
    },
    set(v) {
      if (v <= 0) return
      value = v
    },
  })
  const obj = {}
  Object.defineProperty(obj, "n", {
    get() {
      return data.n
    },
    set(v) {
      if (v <= 0) return
      value = v
    },
  })
  return obj
}

data3.n = 3
console.log("+data3:", data3)
console.log("+data3.n:", data3.n)
data3.n = -3
console.log("-data3:", data3)
console.log("-data3.n:", data3.n)
myData.n = -3
console.log("-data3:", data3)
console.log("-data3.n:", data3.n)

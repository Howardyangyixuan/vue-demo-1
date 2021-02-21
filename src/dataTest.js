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
data1.n = 4
n = 5
data1.n = -3
console.log("+data1:", data1)
console.log("+data1.n:", data1.n)
n = -3
console.log("-data1:", data1)
console.log("-data1.n:", data1.n)

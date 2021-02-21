<template>
  <div class="red">
    Inside Demo
    {{n}}
    <button @click="add">demo data +1</button>
    <button @click="fn">props data +1</button>
    <hr>
    props msg:{{msg}}
    <hr>
    {{value}}
  </div>
</template>

<script>
  export default {
    props: ["msg", "value", "fn"],
    data() {
      return {
        n: 0
      }
    },
    methods: {
      add() {
        this.value += 1
        this.n += 1
      }
    },
    created() {
      console.log("create")
    },
    mounted() {
      console.log("mounted")
    },
    updated() {
      console.log("updated")
    },
    destroyed() {
      console.log("destroyed")
      debugger
    }
  }
</script>

<style lang="scss" scoped>
  .red {
    border: 1px solid blue;
    color: red;
  }
</style>
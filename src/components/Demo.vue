<template>
  <div class="red">
    {{n}}
    <button @click="add">demo data +1</button>
    <hr>
    props msg:{{msg}}
    <hr>
    {{value}}
  </div>
</template>

<script>
  export default {
    props: ["msg", "value"],
    data() {
      return {
        n: 0
      }
    },
    methods: {
      add() {
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
      console.log("visible", this.visible)
    },
    destroyed() {
      console.log("destroyed")
      debugger
    }
  }
</script>

<style lang="scss" scoped>
  .red {
    color: red;
  }
</style>
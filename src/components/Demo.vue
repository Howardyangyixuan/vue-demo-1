<template>
  <div class="red">
    {{n}}
    <button @click="add">+1</button>
  </div>
</template>

<script>
  export default {
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
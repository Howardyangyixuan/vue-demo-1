<template>
  <div class="red">
    {{n}}
    <button @click="add">+1</button>
  </div>
</template>

<script>
  console.log("hi")
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
    }
  }
</script>

<style lang="scss" scoped>
  .red {
    color: red;
  }
</style>
<template>
  <div class="red">
    Inside Demo
    {{n}}
    <button @click="add">demo data +1</button>
  </div>
</template>

<script>
  export default {
    template: `
      <div>
        {{n}}
      </div>
    `,
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
    // created() {
    //   console.log("create")
    // },
    // mounted() {
    //   console.log("mounted")
    // },
    // updated() {
    //   console.log("updated")
    // },
    // destroyed() {
    //   console.log("destroyed")
    // }
  }
</script>

<style lang="scss" scoped>
  .red {
    border: 1px solid blue;
    color: red;
  }
</style>
<template>
  <div class="foo">
    <h2>Foo组件</h2>
    <button @click="desc">-</button>
    <div>{{ $store.state.count }}</div>
  </div>
</template>

<script>
export default {
  methods:{
    desc(){
      // 不要这样去修改数据，调试工具不工作
      // this.$store.state.count--
      this.$store.commit('desc')
    }
  }
}
</script>

<style scoped>
  .foo{
    border: 1px solid #000;
    height: 150px;

  }
</style>
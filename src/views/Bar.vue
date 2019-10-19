<template>
  <div class="bar">
    <h2>Bar组件</h2>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.dispatch('add')">异步操作</button>
    <div>{{ $store.state.count }}</div>
  </div>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style scoped>
.bar{
    border: 1px solid #000;
    height: 150px;
  }
</style>
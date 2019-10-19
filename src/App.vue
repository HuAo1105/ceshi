<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Foo from '../src/views/Foo'
import Bar from '../src/views/Bar'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Foo,
    Bar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

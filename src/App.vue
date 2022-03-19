<template>
  <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <top-menu></top-menu>
  <router-view></router-view>
  <BottomInfo></BottomInfo>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TopMenu from './components/common/top_menu.vue'
import BottomInfo from './components/common/bottom_info.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    BottomInfo
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

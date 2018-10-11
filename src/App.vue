<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <navBar/>
    <!-- <DashboardV2/> -->
    
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import navBar from './components/layouts/navBar'
import DashboardV2 from './components/dashboard/Dashboard.v2'


// css files
import '../node_modules/vue2-admin-lte/src/lib/css.js'

// js files
import '../node_modules/vue2-admin-lte/src/lib/script.js'

export default {
  name: 'app',
  components: {
    HelloWorld,
    navBar,
    DashboardV2,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

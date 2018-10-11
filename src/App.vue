<template>
  <div id="app" class="wrapper">
      <navBar/>
    <div class="content-wrapper" style="height: 960px;">
      <!-- <Dashboard/> -->  
      <router-view>
      </router-view>
      <!-- <Teatro/> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import navBar from './components/layouts/navBar'
import  Dashboard  from './components/dashboard/table'
// import  Teatro  from './components/dashboard/teatro'

// css files
import '../node_modules/vue2-admin-lte/src/lib/css.js'

// js files
import '../node_modules/vue2-admin-lte/src/lib/script.js'

export default {
  name: 'app',
  components: {
    navBar,
    Dashboard,
    // Teatro,
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

<template>
  <v-app> 
    <div id="app" class="wrapper">
      <NaviBarorigin/>
      <navBar/>
      <div class="content-wrapper" style="height: 960px;">
          <router-view>
          </router-view>
      </div>
    </div>
  </v-app> 
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import navBar from './components/layouts/navBar'
  import  Dashboard  from './components/dashboard/tablero'
  import NaviBarorigin from './components/layouts/NaviBarorigin'
  // css files
  import '../node_modules/vue2-admin-lte/src/lib/css.js'
  import 'vuetify/dist/vuetify.min.css'
  // js files
  import '../node_modules/vue2-admin-lte/src/lib/script.js'

  export default {
    name: 'app',
    components: {
      navBar,
      Dashboard,
      NaviBarorigin,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.btn-primary {
  background-color: #E26A6A;
  border-color: #E26A6A;
}
.btn-primary:hover, .btn-primary:active, .btn-primary.hover {
    background-color: #cd2828;
    border-color: #ab2121;
}
</style>

<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="/" class="logo">
      <img data-v-f0fcea56="" src="../../../public/logo-trampolin.fb7da17.svg" width="100" alt="Logo Trampolín" class="py-4">
      <span class="logo-lg"><b>Tampolin</b></span>
      <span class="sr-only">Toggle navigation</span>
    </a>
<!-- static/img/logo-trampolin.fb7da17.svg -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span>Dashboard</span>
            </a>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span>Configuración</span>
            </a>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span>
                Ver sitio
                </span> 
            </a>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <!-- <img src="~admin-lte/dist/img/user2-160x160.jpg" class="user-image" alt="User Image"> -->
              <span>Nacho Marchiano  <i class="fa fa-angle-down"></i></span> 
              <span class="hidden-xs">
                <!-- {{ currentUser.name }} -->
                </span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <!-- <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"> -->
                <p>
                  <!-- {{ currentUser.name }} - {{ currentUser.position }} -->
                  <small>
                    <!-- {{ currentUser.createdAt }} -->
                    </small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <row>
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </row>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// import { mapGetters } from 'vuex'
import Row from '../../../node_modules/vue2-admin-lte/src/grid/Row'
export default {
  name: 'va-navibar',
  components: {
    'row': Row,
  },
  computed: {
  }
}

</script>
<style scoped>
  .skin-black .main-header .logo {
      background-color: #1f1f1f;
      }
  .skin-black .main-header .navbar {
    background-color: #1f1f1f;
}
.skin-black .wrapper, .skin-black .main-sidebar, .skin-black .left-side {
    background-color: #c5c5c5;
}
.page-sidebar, .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {
    background-color: #c5c5c5;
}
.skin-black .main-header .logo:hover {
    background-color: #1f1f1f;
}
.skin-black .main-header .logo {
    background-color: #1f1f1f;
    color: #333;
    border-bottom: 0 solid transparent;
    border-right: 1px solid transparent;
    text-align: left;
}
.skin-black .main-header .navbar>.sidebar-toggle {
    color: #9e9e9e;
    border-right: 1px solid transparent;
}
.skin-black .main-header .navbar .sidebar-toggle:hover {
    color: #fff;
    background: #1f1f1f;
}
.skin-black .main-header .navbar .navbar-custom-menu .navbar-nav>li>a, .skin-black .main-header .navbar .navbar-right>li>a {
    border-left: 1px solid transparent;
    border-right-width: 0;
    color: #9e9e9e;
}
.skin-black .main-header .navbar .nav>li>a:hover, .skin-black .main-header .navbar .nav>li>a:active, .skin-black .main-header .navbar .nav>li>a:focus, .skin-black .main-header .navbar .nav .open>a, .skin-black .main-header .navbar .nav .open>a:hover, .skin-black .main-header .navbar .nav .open>a:focus, .skin-black .main-header .navbar .nav>.active>a {
    background: #393939;
}
.skin-black .main-header .navbar .navbar-custom-menu .navbar-nav>li {
    margin: 0;
    padding: 0 4px;
    height: 50px;
    display: inline-block;
}
.navbar-custom-menu .navbar-nav>li>a span{
    color: #c5c5c5;
    /* background-color: #e26a6a; */
}
</style>

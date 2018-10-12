<template>
<div>
  <va-navBar/>
    <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- Sidebar user panel
      <div class="user-panel">
        <div class="pull-left image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      search form
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                  <i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form> -->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu tree" data-widget="tree">
        <!-- <li class="header">MAIN NAVIGATION</li> -->
        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i>
            <span>
              <router-link to="/espectaculos">Espectáculos</router-link>
            </span>
              <!-- <i class="fa fa-angle-left pull-right"></i> -->
          </a>
          <!-- <ul class="treeview-menu">
            <li><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li class="active"><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul> -->
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-files-o"></i>
            <span><router-link to="/teatro">Teátros</router-link></span>
            <!-- <span class="pull-right-container">
              <span class="label label-primary pull-right">4</span>
            </span> -->
          </a>
          <!-- <ul class="treeview-menu">
            <li><a href="pages/layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>
            <li><a href="pages/layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>
            <li><a href="pages/layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
            <li><a href="pages/layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
          </ul> -->
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-th"></i> 
            <span><router-link to="/festivales">Festivales</router-link></span>
            <!-- <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span> -->
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span><router-link to="/agenda">Agenda</router-link></span>
            <!-- <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> -->
          </a>
          <!-- <ul class="treeview-menu">
            <li><a href="pages/charts/chartjs.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>
            <li><a href="pages/charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>
            <li><a href="pages/charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
            <li><a href="pages/charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>
          </ul> -->
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span><router-link to="/pagos">Pagos</router-link></span>
            <!-- <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> -->
          </a>
          <!-- <ul class="treeview-menu">
            <li><a href="pages/UI/general.html"><i class="fa fa-circle-o"></i> General</a></li>
            <li><a href="pages/UI/icons.html"><i class="fa fa-circle-o"></i> Icons</a></li>
            <li><a href="pages/UI/buttons.html"><i class="fa fa-circle-o"></i> Buttons</a></li>
            <li><a href="pages/UI/sliders.html"><i class="fa fa-circle-o"></i> Sliders</a></li>
            <li><a href="pages/UI/timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>
            <li><a href="pages/UI/modals.html"><i class="fa fa-circle-o"></i> Modals</a></li>
          </ul> -->
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-edit"></i>
              <span><router-link to="/notificaciones">Notificaciones</router-link></span>
            <!-- <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> -->
          </a>
          <!-- <ul class="treeview-menu">
            <li><a href="pages/forms/general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>
            <li><a href="pages/forms/advanced.html"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>
            <li><a href="pages/forms/editors.html"><i class="fa fa-circle-o"></i> Editors</a></li>
          </ul> -->
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-table"></i>
            <span><router-link to="/config">Configuración</router-link></span>
            <!-- <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            <!-- </span> -->
          </a>
          <!-- <ul class="treeview-menu">
            <li><a href="pages/tables/simple.html"><i class="fa fa-circle-o"></i> Simple tables</a></li>
            <li><a href="pages/tables/data.html"><i class="fa fa-circle-o"></i> Data tables</a></li>
          </ul>  -->
        </li>
      <!-- <li class="bg-success"><a href="https://themequarry.com"><i class="fa fa-star-o" style="color: rgb(255, 255, 255);"></i><span style="color: rgb(255, 255, 255);">Premium Templates</span></a></li> -->
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</div>
</template>

<script>
import navBar from '../../../node_modules/vue2-admin-lte/src/NaviBar.vue'
// import DashboardV2 from '../dashboard/Dashboard.v2'

export default {
  name: 'navBar',
  props: {
    // msg: String
  },
    components: {
      'va-navBar': navBar,
      // 'dashboardV2': DashboardV2,
  }
} 
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .skin-black .main-header .logo {
    background-color: #367fa9;
    color: #fff;
    border-bottom: 0 solid transparent;
    }
  .main-sidebar, .main-sidebar-closed.main-sidebar-fixed .main-sidebar:hover {
    background-color: #3d3d3d;
  }
  .skin-black .wrapper, .skin-black .main-sidebar, .skin-black .left-side {
    background-color: #3d3d3d;
    padding-top: 60px;
    height: 1000px;
  }
  .page-sidebar, .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {
    background-color: #3d3d3d;
  }
  .page-sidebar .page-sidebar-menu>li.open>a, .page-sidebar .page-sidebar-menu>li:hover>a, .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a, .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a {
    background: #303030;
    color: #d9d9d9;
  }
  .page-sidebar .page-sidebar-menu>li>a>span, .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>span {
    border-top: 1px solid #484848;
    color: #d9d9d9;
  }
  .skin-black .sidebar-menu>li:hover>a, .skin-black .sidebar-menu>li.active>a, .skin-black-open>a
  {
    color: #d9d9d9;
    background-color: #303030;
  }
  .skin-black .sidebar a {
    color: #d9d9d9;
  }
  .sidebar-menu>li {
    position: relative;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #484848;
    color: #d9d9d9;
  }
  .skin-black .sidebar-menu>li>.treeview-menu {
    background: #3d3d3d;
  }
  .skin-black .sidebar-menu>li.menu-open>a {
    background-color:#e26a6a;
  }
</style>

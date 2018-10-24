<template>
<div>
  <aside class="main-sidebar">
    <section class="sidebar" style="height: auto;">
      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="treeview">
          <!-- <span> -->
          <router-link to="/espectaculos" class="router-link">
          <!-- <a href="/espectaculos"> -->
            <i class="fa fa-dashboard"></i>
              <span>Espectáculos</span>
          <!-- </a> -->
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
          <!-- <ul class="treeview-menu">
            <li><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li class="active"><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul> -->
          </router-link>
          <!-- </span> -->
        </li>
        <li class="treeview">
          <router-link to="/teatro" class="router-link">
            <i class="fa fa-files-o"></i>
              <span>Teátros</span>
              <!-- <span class="pull-right-container">
                <span class="label label-primary pull-right">4</span>
              </span> -->
          </router-link>
          <!-- <ul class="treeview-menu">
            <li><a href="pages/layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>
            <li><a href="pages/layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>
            <li><a href="pages/layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
            <li><a href="pages/layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
          </ul> -->
        </li>
        <li class="treeview">
          <router-link to="/festivales" class="router-link">
            <i class="fa fa-th"></i> 
              <span>Festivales</span>
              <!-- <span class="pull-right-container">
                <small class="label pull-right bg-green">new</small>
              </span> -->
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/agenda" class="router-link">
            <i class="fa fa-pie-chart"></i>
              <span>Agenda</span>
              <!-- <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span> -->
          </router-link>
          <!-- <ul class="treeview-menu">
            <li><a href="pages/charts/chartjs.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>
            <li><a href="pages/charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>
            <li><a href="pages/charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
            <li><a href="pages/charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>
          </ul> -->
        </li>
        <li class="treeview">
          <router-link to="/pagos" class="router-link">
          <i class="fa fa-laptop"></i>
              <span>Pagos</span>
              <!-- <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span> -->
          </router-link>
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
          <router-link to="/notificaciones" class="router-link">
          <i class="fa fa-edit"></i>
                <span>Notificaciones</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/config" class="router-link">
          <i class="fa fa-table"></i>
              <span>Configuración</span>
          </router-link>
        </li>
      </ul>
    </section>
  </aside>
</div>
</template>

<script>
  export default {
    name: 'navBar',
    props: {
    },
    components: {
    }
  } 
</script>

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
  .skin-black .sidebar-menu>li:hover>a, .skin-black-open>a
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
  .skin-black .sidebar-menu>li.menu-open>.router-link {
    background-color:#e26a6a;
  }
</style>

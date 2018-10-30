<template>
  <aside class="main-sidebar">
    <section class="sidebar" style="height: auto;">
      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="treeview">
          <router-link to="/espectaculos" class="router-link">
            <i class="fa fa-dashboard"></i>
              <span>Espectáculos</span>
             
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/teatro" class="router-link">
            <i class="fa fa-files-o"></i>
              <span>Teátros</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/festivales" class="router-link">
            <i class="fa fa-th"></i> 
              <span>Festivales</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/agenda" class="router-link">
            <i class="fa fa-pie-chart"></i>
              <span>Agenda</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/pagos" class="router-link">
          <i class="fa fa-laptop"></i>
              <span>Pagos</span>
          </router-link>
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
  .skin-black .content-wrapper, .skin-black .main-sidebar, .skin-black .left-side {
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

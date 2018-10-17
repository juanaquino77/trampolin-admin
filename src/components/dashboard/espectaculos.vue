<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Espectaculos</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <div class="table-responsive">
      <table class="table table-hover">    
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Status</th>
            <th>Ciudad de origen</th>
            <th>Giras</th>
            <th>Pagos</th>
            <th>Ultimo acceso</th>
            <th>Funciones acordadas</th>
            <th>Distancia recorrida</th>
            <th>Proxima funcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>La Obra de Marcos</td>
            <td><span class="label label-success">Approved</span></td>
            <td>Mar del Plata, AR</td>
            <td>11-7-2014</td>
            <td><span class="label label-success">OK</span></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>100Km</td>
            <td>11-7-2014</td>
            <td>
              <a class="btn btn-primary btn-xs">Ver perfil</a>
              <a class="btn btn-info btn-xs">Editar</a>
              <a class="btn btn-warning btn-xs">Suspender</a>
              <a class="btn btn-danger btn-xs">Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>Alexander Pierce</td>
            <td><span class="label label-warning">Pending</span></td>
            <td>Mar del Plata, AR</td>
            <td>11-7-2014</td>
            <td><span class="label label-success">OK</span></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>100Km</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
          <tr>
            <td>Bob Doe</td>
            <td><span class="label label-danger">Denied</span></td>
            <td>Mar del Plata, AR</td>
            <td>11-7-2014</td>
            <td><span class="label label-warning">Pending</span></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>100Km</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
          <tr>
            <td>Mike Doe</td>
            <td><span class="label label-danger">Denied</span></td>
            <td>Mar del Plata, AR</td>
            <td>11-7-2014</td>
            <td><span class="label label-danger">NO</span></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>100Km</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
        </tbody>
      </table>
      </div>
      <!-- /.table-responsive -->
    </div>
    <!-- /.box-body -->
    <!-- /.box-footer -->
  </div>
</template>
<script>
export default {
  name: 'Teatro',
  components: {
  }
}
</script>

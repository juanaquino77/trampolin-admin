<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Notificaciones</h3>
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
            <th>Ciudad</th>
            <th>Domicilio</th>
            <th>Persona</th>
            <th>Ultimo acceso</th>
            <th>Funciones acordadas</th>
            <th>Proxima funcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teatro Municipal</td>
            <td><span class="label label-success">Verificado</span></td>
            <td>Mar del Plata, AR</td>
            <td>Luro 222</td>
            <td>Claudio Tolca<label>cc@tolca.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
         <tr>
            <td>Teatro Colon</td>
            <td><span class="label label-warning">Pendiente</span></td>
            <td>Mar del Plata, AR</td>
            <td>Luro 222</td>
            <td>Claudio Tolca<label>cc@tolca.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
         <tr>
            <td>Teatro Municipal</td>
            <td><span class="label label-danger">Verificado</span></td>
            <td>Mar del Plata, AR</td>
            <td>Luro 222</td>
            <td>Claudio Tolca<label>cc@tolca.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>No tiene</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
         <tr>
            <td>Teatro Municipal</td>
            <td><span class="label label-warning">Pendiente</span></td>
            <td>Mar del Plata, AR</td>
            <td>Luro 222</td>
            <td>Claudio Tolca<label>cc@tolca.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
         <tr>
            <td>Teatro Municipal</td>
            <td><span class="label label-danger">Verificado</span></td>
            <td>Mar del Plata, AR</td>
            <td>Luro 222</td>
            <td>Claudio Tolca<label>cc@tolca.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
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
  name: 'Notificaciones',
  components: {
  }
}
</script>

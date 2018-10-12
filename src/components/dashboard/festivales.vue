<template>
<div>
  <div class="box box-default box-solid">
    <div class="box-header with-border">
      <h3 class="box-title">Expandable</h3>

      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
      </div>
      <!-- /.box-tools -->
    </div>
    <!-- /.box-header -->
    <div class="box-body" style="">
      The body of the box
    </div>
    <!-- /.box-body -->
  </div>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Festivales</h3>
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
            <th>Teatro principal</th>
            <th>Persona</th>
            <th>Ultimo acceso</th>
            <th>Funciones desprendidas</th>
            <th>Proxima edición</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teatro a mil</td>
            <td><span class="label label-success">Verificado</span></td>
            <td>Santiago, CL</td>
            <td>GAM</td>
            <td>Claudio Tolca<label>cc@tolca.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
          <tr>
            <td>Festival internacional de teatro de Bahia Blanca</td>
            <td><span class="label label-warning">Pendiente</span></td>
            <td>Bahia Blanca, AR</td>
            <td>Municipal</td>
            <td>Marcos Moreira<label>lamuni@cordoba.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
          <tr>
            <td>Festival internacional temporales de teatro</td>
            <td><span class="label label-danger">Denied</span></td>
            <td>Puerto mont, CL</td>
            <td>CCPM</td>
            <td>Marcos Moreira<label>lamuni@cordoba.com.ar</label></td>
            <td>11-7-2014</td>
            <td>1</td>
            <td>11-7-2014</td>
            <td>Ver perfil | Editar | Suspender | Eliminar</td>
          </tr>
          <tr>
            <td>Pirologias</td>
            <td><span class="label label-danger">Denied</span></td>
            <td>Haedo, AR</td>
            <td>Border</td>
            <td>Marcos Moreira<label>lamuni@cordoba.com.ar</label></td>
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
</div>
</template>
<script>
export default {
  name: 'Festivales',
  components: {
  }
}
</script>

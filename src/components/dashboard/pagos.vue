<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Pagos</h3>
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
            <th>Espectaculo</th>
            <th>Importe</th>
            <th>Estado</th>
            <th>Fecha funcion</th>
            <th>Fecha acuerdo</th>
            <th>Acuerdo</th>
            <th>Teatro/Festival</th>
            <th>Ciudad, Pais</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>La Obra de Marcos</td>
            <td>$ 1.000</td>
            <td><span class="label label-success">Pagado</span></td>
            <td>11-7-2014</td>
            <td>11-7-2014</td>
            <td>PDF</td>
            <td>Teatro Municipal</td>
            <td>CABA, AR</td>
            <td>Eviar recordatorio | Confirmar  | Bonificar | Eliminar order</td>
          </tr>
          <tr>
            <td>La Obra de Marcos</td>
            <td>$ 1.000</td>
            <td><span class="label label-success">Pagado</span></td>
            <td>11-7-2014</td>
            <td>11-7-2014</td>
            <td>PDF</td>
            <td>Timbre 4</td>
            <td>CABA, AR</td>
            <td>Eviar recordatorio | Confirmar  | Bonificar | Eliminar order</td>
          </tr>
          <tr>
            <td>La Obra de Charlie</td>
            <td>$ 1.000</td>
            <td><span class="label label-danger">Impaga</span></td>
            <td>11-7-2014</td>
            <td>11-7-2014</td>
            <td>PDF</td>
            <td>Border</td>
            <td>CABA, AR</td>
            <td>Eviar recordatorio | Confirmar  | Bonificar | Eliminar order</td>
          </tr>
          <tr>
            <td>Mi hijo</td>
            <td>$ 1.000</td>
            <td><span class="label label-warning">Pendiente</span></td>
            <td>11-7-2014</td>
            <td>11-7-2014</td>
            <td>PDF</td>
            <td>Teatro Municipal</td>
            <td>Olivos, AR</td>
            <td>Eviar recordatorio | Confirmar  | Bonificar | Eliminar order</td>
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
  name: 'Pagos',
  components: {
  }
}
</script>

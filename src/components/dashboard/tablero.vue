<template>
  <div class="box box-info">
      <div class="box-header with-border">
        <h3 class="box-title">{{Tabla.Header}}</h3>
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
              <th v-for="(item, key) in Tabla.Body[1]">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in Tabla.Body">
              <td>{{ item.Espectaculo }}</td>
              <td>{{ item.Importe }}</td>
              <td><span class="label label-success">{{ item.Estado }}</span></td>
              <td>{{ item.FechaFuncion }}</td>
              <td>{{ item.FechaAcuerdo }}</td>
              <td>{{ item.Acuerdo }}</td>
              <td>{{ item.TeatroFestival }}</td>
              <td>{{ item.CiudadPais }}</td>
              <td>{{ item.Acciones }}</td> 
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
  props: ['Tabla'],
  name: 'Tablero',
  components: {
  },
  created: function () {
    // `this` points to the vm instance
    alert('a is: '+ this.Tabla.Header)
  }
}
</script>

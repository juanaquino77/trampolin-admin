<template>
  <div>
    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">TOTAL FACTURADO</h3>
        <div class="box-tools pull-right">
          <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
        </div><!-- /.box-tools -->
      </div><!-- /.box-header -->
      <div class="box-body">
        $ 150.000
      </div><!-- /.box-body -->
    </div><!-- /.box -->
    <!-- <div class="row"> -->
      <!-- <div class="col-md-3"> -->
        <!-- <table v-bind:Tabla="algo" /> -->
        <tablero  v-bind:Tabla="tabla"/>
        <!-- <search /> -->
      <!-- </div> -->
      <!-- <div class="col-md-3"> -->
        <!-- <search /> -->
      <!-- </div> -->
    <!-- </div> -->

    <!-- <blog-post  + ' by ' + post.author.name"> -->
  </div>  
</template>
<script>
import Tablero from './tablero'
import Search from './search'

export default {
  name: 'Pagos',
  components: {
  'tablero': Tablero,
  'search': Search,  
  },
  data () {
    return {
      tabla: {
        Header: "Pagos",        
        Body: [
          {
            "Espectaculo": "La Obra de Marcos",
            "Importe": "$ 1.000",
            "Estado": "Pagado",
            "FechaFuncion": "11-7-2014",
            "FechaAcuerdo": "11-7-2014",
            "Acuerdo": "PDF",
            "TeatroFestival": "Teatro Municipal",
            "CiudadPais": "CABA, AR",
            "Acciones": ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
          },
          {
            "Espectaculo": "La Obra de Marcos",
            "Importe": "$ 1.000",
            "Estado": "Pagado",
            "FechaFuncion": "11-7-2014",
            "FechaAcuerdo": "11-7-2014",
            "Acuerdo": "PDF",
            "TeatroFestival": "Teatro Municipal",
            "CiudadPais": "CABA, AR",
            "Acciones": ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
          },
          {
            "Espectaculo": "La Obra de Marcos",
            "Importe": "$ 1.000",
            "Estado": "Pagado",
            "FechaFuncion": "11-7-2014",
            "FechaAcuerdo": "11-7-2014",
            "Acuerdo": "PDF",
            "TeatroFestival": "Teatro Municipal",
            "CiudadPais": "CABA, AR",
            "Acciones": ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"],
          },
          {
            "Espectaculo": "La Obra de Marcos",
            "Importe": "$ 1.000",
            "Estado": "Pagado",
            "FechaFuncion": "11-7-2014",
            "FechaAcuerdo": "11-7-2014",
            "Acuerdo": "PDF",
            "TeatroFestival": "Teatro Municipal",
            "CiudadPais": "CABA, AR",
            "Acciones": ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"],
          }
        ],
      },
    }
  }
}
</script>
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
    <tablero  v-bind:Tabla="tabla" :Headers="headers" :Title="title" />
  </div>  
</template>
<script>
import Tablero from './tablero'

export default {
  name: 'Pagos',
  components: {
    Tablero,
  },
  data () {
    return {
      title: "Pagos",        
      tabla: [
        {
          Espectaculo: "La Obra de Marcos",
          Importe: "$ 1.000",
          Estado: "Pagado",
          FechaFuncion: "11-7-2014",
          FechaAcuerdo: "11-7-2014",
          Acuerdo: "PDF",
          TeatroFestival: "Teatro Municipal",
          CiudadPais: "CABA, AR",
          Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
        },
        {
          Espectaculo: "La Obra de Marcos",
          Importe: "$ 1.000",
          Estado: "Pagado",
          FechaFuncion: "11-7-2014",
          FechaAcuerdo: "11-7-2014",
          Acuerdo: "PDF",
          TeatroFestival: "Teatro Municipal",
          CiudadPais: "CABA, AR",
          Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
        },
        {
          Espectaculo: "La Obra de Marcos",
          Importe: "$ 1.000",
          Estado: "Pagado",
          FechaFuncion: "11-7-2014",
          FechaAcuerdo: "11-7-2014",
          Acuerdo: "PDF",
          TeatroFestival: "Teatro Municipal",
          CiudadPais: "CABA, AR",
          Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"],
        },
        {
          Espectaculo: "La Obra de Marcos",
          Importe: "$ 1.000",
          Estado: "Pagado",
          FechaFuncion: "11-7-2014",
          FechaAcuerdo: "11-7-2014",
          Acuerdo: "PDF",
          TeatroFestival: "Teatro Municipal",
          CiudadPais: "CABA, AR",
          Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"],
        }
      ],
      headers: [
        { text: 'Espectaculo', align: 'left', value: 'Espectaculo' },
        { text: 'Importe', align: 'left', value: 'Importe' }, 
        { text: 'Estado', align: 'left', value: 'Estado' },
        { text: 'Fecha Funcion', align: 'left', value: 'FechaFuncion' },
        { text: 'Fecha Acuerdo', align: 'left', value: 'FechaAcuerdo' }, 
        { text: 'Acuerdo', align: 'left', value: 'Acuerdo' },          
        { text: 'Teatro Festival', align: 'left', value: 'TeatroFestival' },
        { text: 'Ciudad Pais', align: 'left', value: 'CiudadPais' },
        { text: 'Acciones', align: 'left', value: 'Acciones' },
      ],
    }
  }
}
</script>
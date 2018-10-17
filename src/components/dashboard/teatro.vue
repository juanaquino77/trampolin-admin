<template>
  <div class="box box-info">
    <!-- <div class="box-header with-border">
      <h3 class="box-title">Teatros</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div> -->
    <tablero  v-bind:Tabla="tabla"/>
  </div>
  
</template>
<script>
import Tablero from './tablero'

export default {
  props: ['Tabla'],
  name: 'Teatro',
  components: {
  'tablero': Tablero,
    
  },
  data () {
    return {
      tabla: {
        Header: "Pagos",        
        Body: [
          {
            "Nombre": "Teatro Municipal",
            "Status": "Verificado",
            "Ciudad": "Mar del Plata, AR",
            "Domicilio": "Luro 222",
            "Persona": "Claudio Tolca, cc@tolca.com.ar",
            "UltimoAcceso": "11-7-2014",
            "FuncionesAcordadas": "1",
            "ProximaFuncion": "11-7-2014",
            "Acciones": ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          },
          {
            "Nombre": "Teatro Colon",
            "Status": "Pendiente",
            "Ciudad": "Mar del Plata, AR",
            "Domicilio": "Luro 222",
            "Persona": "Claudio Tolca, cc@tolca.com.ar",
            "UltimoAcceso": "11-7-2014",
            "FuncionesAcordadas": "1",
            "ProximaFuncion": "11-7-2014",
            "Acciones": ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          },
          {
            "Nombre": "Teatro Municipal",
            "Status": "Verificado",
            "Ciudad": "Mar del Plata, AR",
            "Domicilio": "Luro 222",
            "Persona": "Claudio Tolca, cc@tolca.com.ar",
            "UltimoAcceso": "11-7-2014",
            "FuncionesAcordadas": "1",
            "ProximaFuncion": "11-7-2014",
            "Acciones": ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          },
          {
            "Nombre": "Teatro Municipal",
            "Status": "Verificado",
            "Ciudad": "Mar del Plata, AR",
            "Domicilio": "Luro 222",
            "Persona": "Claudio Tolca, cc@tolca.com.ar",
            "UltimoAcceso": "11-7-2014",
            "FuncionesAcordadas": "1",
            "ProximaFuncion": "11-7-2014",
            "Acciones": ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          }
        ],
      },
    }
  }
}
</script>

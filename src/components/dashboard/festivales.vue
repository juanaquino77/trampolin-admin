<template>
  <div>
    <tablero  v-bind:Tabla="tabla" :Headers="headers" :Title="title" :Acciones="acciones"/>
  </div>
</template>
<script>

  import Tablero from './tablero'

  export default {
    name: 'Festivales',
    components: {
      Tablero,
    },
    data () {
      return {
        title: 'Festivales',
        tabla: [
          {
            Nombre: "Teatro a mil",
            Status: "Verificado",
            Ciudad: "Santiago, CL",
            TeatroPrincipal: "GAM",
            Persona: "Claudio Tolca, cc@tolca.com.ar",
            UltimoAcceso: "11-7-2014",
            FuncionesDesprendidas: "1",
            ProximaEdición: "11-7-2014",
            // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          },
          {
            Nombre: "Festival internacional de teatro de Bahia Blanca",
            Status: "Pendiente",
            Ciudad: "Bahia Blanca, AR",
            TeatroPrincipal: "Municipal",
            Persona: "Marcos Moreira, lamuni@cordoba.com.ar",
            UltimoAcceso: "11-7-2014",
            FuncionesDesprendidas: "1",
            ProximaEdición: "11-7-2014",
            // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          },
          {
            Nombre: "Festival internacional temporales de teatro",
            Status: "Denied",
            Ciudad: "Puerto mont, CL",
            TeatroPrincipal: "CCPM",
            Persona: "Marcos Moreira, lamuni@cordoba.com.ar",
            UltimoAcceso: "11-7-2014",
            FuncionesDesprendidas: "1",
            ProximaEdición: "11-7-2014",
            // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          },
          {
            Nombre: "Pirologias",
            Status: "Denied",
            Ciudad: "Haedo, AR",
            TeatroPrincipal: "Border",
            Persona: "Marcos Moreira, lamuni@cordoba.com.ar",
            UltimoAcceso: "11-7-2014",
            FuncionesDesprendidas: "1",
            ProximaEdición: "11-7-2014",
            // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
          },
        ],
      acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"],
        headers: [
          { text: 'Nombre', align: 'left', value: 'Nombre' },
          { text: 'Status', align: 'left', value: 'Status' }, 
          { text: 'Ciudad', align: 'left', value: 'Ciudad' },
          { text: 'Teatro Principal', align: 'left', value: 'TeatroPrincipal' },
          { text: 'Persona', align: 'left', value: 'Persona' }, 
          { text: 'Ultimo Acceso', align: 'left', value: 'UltimoAcceso' },          
          { text: 'Funciones Desprendidas', align: 'left', value: 'FuncionesDesprendidas' },
          { text: 'Proxima Edición', align: 'left', value: 'ProximaEdición' },
          { text: 'Acciones', align: 'left', value: 'Acciones' },
        ],
      }
    }
  }
</script>

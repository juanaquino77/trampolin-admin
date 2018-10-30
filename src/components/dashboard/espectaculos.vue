<template>
  <div> 
    <tablero v-bind:Tabla="tabla" :Headers="headers" :Title="title" :Acciones="acciones" />
  </div>
</template>
<script>
import Tablero from './tablero'
export default {
  name: 'Espectaculos',
  components: {
    Tablero,
  },

  data () {
    return {
      title: 'Espectaculos',
      tabla: [
        {
          Nombre: "La Obra de Marcos",
          Status: "OK",
          CiudadDeOrigen: "Mar del Plata, AR",
          Giras: "Activada",
          Pagos: "Si",
          UltimoAcceso: "11-7-2017",
          FuncionesAcordadas: "1",
          DistanciaRecorrida: "100Km",
          ProximaFuncion: "17-7-2014",            
          // Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
        },
        {
          Nombre: "La Obra de Carlos",
          Status: "Suspendida",
          CiudadDeOrigen: "CABA, AR",
          Giras: "Cerrada",
          Pagos: "Si",
          UltimoAcceso: "11-7-2044",
          FuncionesAcordadas: "2",
          DistanciaRecorrida: "100Km",
          ProximaFuncion: "1-7-2014",            
          // Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
        },
        {
          Nombre: "La Obra de Vanina",
          Status: "Eliminada",
          CiudadDeOrigen: "Santiago, CL",
          Giras: "Activada",
          Pagos: "Pending",
          UltimoAcceso: "11-7-2019",
          FuncionesAcordadas: "3",
          DistanciaRecorrida: "100Km",
          ProximaFuncion: "Inexistente",            
          // Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
        },
        {
          Nombre: "La Obra de Marcos",
          Status: "Suspendida",
          CiudadDeOrigen: "Mar del Plata, AR",
          Giras: "Cerrada",
          Pagos: "NO",
          UltimoAcceso: "11-7-2011",
          FuncionesAcordadas: "4",
          DistanciaRecorrida: "100Km",
          ProximaFuncion: "Inexistente",            
          // Acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"]
        }
      ],
      acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"],
      headers: [
        { text: 'Nombre', align: 'left', value: 'Nombre' },
        { text: 'Status', align: 'left', value: 'Status' }, 
        { text: 'Ciudad De Origen', align: 'left', value: 'CiudadDeOrigen' },
        { text: 'Giras', align: 'left', value: 'Giras' },
        { text: 'Pagos', align: 'left', value: 'Pagos' }, 
        { text: 'Ultimo Acceso', align: 'left', value: 'UltimoAcceso' },          
        { text: 'Funciones Acordadas', align: 'left', value: 'FuncionesAcordadas' },
        { text: 'Distancia recorrida', align: 'left', value: 'DistanciaRecorrida' }, 
        { text: 'Proxima Funcion', align: 'left', value: 'ProximaFuncion' },
        { text: 'Acciones', align: 'left', value: 'Acciones' },
      ],
    }
  },
}
</script>
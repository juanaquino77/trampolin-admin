<template>
  <div>
    <tablero v-bind:Tabla="tabla" :Headers="headers" :Title="title" :Acciones="acciones"/>
  </div>
</template>
<script>
import Tablero from './tablero'
export default {
  name: 'Teatro',
  components: {
    Tablero,
  },
  data () {
    return {
      title: 'Teatros',
      tabla: [
        {   
          Nombre: "Timbre 4",
          Status: "Verificado",
          Ciudad: "CABA, AR",
          Domicilio: "Luro 222",
          Persona: "Claudio Tolca, cc@tolca.com.ar",
          UltimoAcceso: "11-7-2017",
          FuncionesAcordadas: "1",
          ProximaFuncion: "17-7-2014",            
          // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
        },
        {
          Nombre: "Teatro Colon",
          Status: "Pendiente",
          Ciudad: "Cordoba, AR",
          Domicilio: "Colon 222",
          Persona: "Claudio Tolca, cc@tolca.com.ar",
          UltimoAcceso: "11-7-2044",
          FuncionesAcordadas: "2",
          ProximaFuncion: "1-7-2014",            
          // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
        },
        {
          Nombre: "Teatro Municipal",
          Status: "Verificado",
          Ciudad: "Santiago, CL",
          Domicilio: "Luro 22",
          Persona: "Claudio Tolca, cc@tolca.com.ar",
          UltimoAcceso: "11-7-2019",
          FuncionesAcordadas: "3",
          ProximaFuncion: "Inexistente",            
          // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
        },
        {
          Nombre: "Teatro Auditorio",
          Status: "Verificado",
          Ciudad: "Mar del Plata, AR",
          Domicilio: "Luro 234",
          Persona: "Claudio Tolca, cc@tolca.com.ar",
          UltimoAcceso: "11-7-2011",
          FuncionesAcordadas: "4",
          ProximaFuncion: "Inexistente",            
          // Acciones: ["Ver perfil", "Editar", "Suspender", "Eliminar"]
        }
      ],
      acciones: ["Eviar recordatorio", "Confirmar", "Bonificar", "Eliminar order"],
      headers: [
        { text: 'Nombre', align: 'left', value: 'Nombre' },
        { text: 'Status', align: 'left', value: 'Status' }, 
        { text: 'Ciudad', align: 'left', value: 'Ciudad' },
        { text: 'Domicilio', align: 'left', value: 'Domicilio' },
        { text: 'Persona', align: 'left', value: 'Persona' }, 
        { text: 'Ultimo Acceso', align: 'left', value: 'UltimoAcceso' },          
        { text: 'Funciones Acordadas', align: 'left', value: 'FuncionesAcordadas' },
        { text: 'Proxima Funcion', align: 'left', value: 'ProximaFuncion' },
        { text: 'Acciones', align: 'left', value: 'Acciones' },
      ],
    }
  }
}
</script>

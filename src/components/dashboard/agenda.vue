<template>
  <div>
    <tablero  v-bind:Tabla="tabla" :Headers="headers" :Title="title" />
  </div>
</template>
<script>
  import Tablero from './tablero'

export default {
  name: 'Agenda',
  components: {
    Tablero,
  },
  data () {
    return {
      title: "Agenda",        
      tabla: [
        {
          Fecha: "11-7-2014",
          Espectaculo: "La Obra de Marcos",
          TeatroOFestival: "Santiago a mil",
          Ciudad: "Santiago, CL",
          Acuerdo: "PDF",
          Pagos: "OK",
          NodosFuturos: "1",
          NodosPasados: "4",
          CacheAcordado: "$ 10.000",
          CuidadDeOrigen: "Mar del Plata, AR",
        },
        {
          Fecha: "11-7-2014",
          Espectaculo: "La Obra de Charlie",
          TeatroOFestival: "Girat",
          Ciudad: "Bahia Blanca, AR",
          Acuerdo: "PDF",
          Pagos: "USD 70 - Recordar pago",
          NodosFuturos: "1",
          NodosPasados: "4",
          CacheAcordado: "$ 10.000",
          CuidadDeOrigen: "CABA, AR",
        },
        {
          Fecha: "11-7-2014",
          Espectaculo: "La Obra de Marcos",
          TeatroOFestival: "Santiago a mil",
          Ciudad: "Santiago, CL",
          Acuerdo: "PDF",
          Pagos: "OK",
          NodosFuturos: "1",
          NodosPasados: "4",
          CacheAcordado: "$ 10.000",
          CuidadDeOrigen: "Mar del Plata, AR",
        },
        {
          Fecha: "11-7-2014",
          Espectaculo: "La Obra de Marcos",
          TeatroOFestival: "Santiago a mil",
          Ciudad: "Santiago, CL",
          Acuerdo: "PDF",
          Pagos: "OK",
          NodosFuturos: "1",
          NodosPasados: "4",
          CacheAcordado: "$ 10.000",
          CuidadDeOrigen: "Mar del Plata, AR",
        },
      ],
      acciones: false,
      headers: [
        { text: 'Fecha', align: 'left', value: 'Fecha' },
        { text: 'Espectaculo', align: 'left', value: 'Espectaculo' }, 
        { text: 'Teatro/Festival', align: 'left', value: 'TeatroOFestival' },
        { text: 'Ciudad', align: 'left', value: 'Ciudad' },
        { text: 'Acuerdo', align: 'left', value: 'Acuerdo' }, 
        { text: 'Pagos', align: 'left', value: 'Pagos' },          
        { text: 'Nodos Futuros', align: 'left', value: 'NodosFuturos' },
        { text: 'Nodos Pasados', align: 'left', value: 'NodosPasados' },
        { text: 'Cache Acordado', align: 'left', value: 'CacheAcordado' },
        { text: 'Cuidad De Origen', align: 'left', value: 'CuidadDeOrigen' },
      ],
    }
  }
}
</script>

<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title" > {{ Title }} </h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-3">
            <v-select 
              label="Search By:" 
              :items="Headers"
              v-model="selectOption"
              @change="checkAnswer" 
            ></v-select>
          </div>
          <div class="col-md-4">
            <v-select 
              label="Opcion Elegida" 
              :items="filterArray"
              v-model="searchType"
            ></v-select>
          </div>
          <h4>{{ searchType }}</h4>
        </div>
          <v-data-table 
            :headers="Headers"
            :items="filteredItems"
          >
            <template slot="items" scope=" { item } ">
              <td v-for="value in item">{{ value }}</td>
            </template>
          </v-data-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['Tabla', 'Tablas', 'Headers', 'Title'],
  name: 'Tablero',
  components: {
  },
  data () {
    return {
      searchType: '',
      selectOption: '',
      filterArray: [],
    }
  },
  created: function () {
  },
  computed: {
    filteredItems() {
      let choice = this.selectOption;
      return this.Tabla.filter((item) => { 
        return !this.searchType || item[choice].toLowerCase().includes(this.searchType.toLowerCase())
      })
    }
  },
  methods: {
    checkAnswer () {
      this.searchType = '';
      let choice = this.selectOption;
      let filterArrayAux = [];      
      this.Tabla.filter((item) => {
        if (choice !== '')
        {
          filterArrayAux.push(item[choice]);
        };
      });
      this.filterArray = filterArrayAux;
    },
  }
}
</script>

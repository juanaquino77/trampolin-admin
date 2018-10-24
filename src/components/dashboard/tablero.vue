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
            <v-text-field
              v-model="searchType"
              append-icon="search"
              label="Opcion Elegida"
              single-line
              hide-details
            ></v-text-field>
          </div>
          <div class="col-md-4">
            <v-select 
              label="Listado"
              :items="filterArray"
              v-model="searchType"
            ></v-select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <v-data-table 
            :headers="Headers"
            :items="filteredItems"
            :acciones="Acciones"
          >
            <template slot="items" scope=" { item } " class="table-responsive">
              <td v-for="value in item">{{ value }}</td>
              <td>
                <template v-if="acciones">
                  <router-link to="/suspender">
                    <i class="v-icon material-icons">clear</i> 
                    <!-- <span class="fa fa-trash"></span> -->
                  </router-link>
                  <router-link to="/delete">
                    <i class="v-icon material-icons">delete</i>
                  </router-link> 
                  <router-link to="/verPerfil" >
                    <i class="v-icon material-icons">add</i>
                  </router-link> 
                  <router-link to="/edit">
                    <i class="v-icon material-icons ">edit</i>
                  </router-link>   
                </template>                                   
              </td>
            </template>
            <template slot="no-data">
              <v-alert :value="true" color="error" icon="warning">
                No se encontro nada :(
              </v-alert>
            </template>
          </v-data-table>
        </div>
      </div>      
    </div>
  </div>
</template>
<script>
export default {
  props: ['Tabla', 'Acciones', 'Headers', 'Title'],
  name: 'Tablero',
  components: {
  },
  data () {
    return {
      searchType: '',
      selectOption: '',
      filterArray: [],
      acciones: this.Acciones,
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

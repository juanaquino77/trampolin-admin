<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title" v-text="Title"></h3>
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
              class="ect"
              label="Buscar por:" 
              :items="Headers"
              v-model="selectOption"
              @change="checkAnswer" 
              color="#e26a6a"
            ></v-select>
          </div>
          <div class="col-md-3">
            <v-autocomplete
              v-model="searchType"
              :items="filterArray"
              label="Opcion Elegida "
              :no-data-text="noDataText"
              hide-selected
              color="#e26a6a"
            ></v-autocomplete>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <v-data-table 
            :headers="Headers"
            :items="filteredItems"
            :acciones="Acciones"
            class="elevation-5" 
          >
            <template slot="items" scope="{ item }">
              <td v-for="value in item" >{{ value }}</td>
              <td>
                <template v-if="acciones">
                  <router-link to="/suspender">
                    <i class="v-icon material-icons">clear</i> 
                    <!-- <span class="fa fa-trash"></span> -->
                  </router-link>
                  <router-link to="/delete">
                  <button type="button" class="btn btn-warning btn-sm btnDelete" >
                    <i class="fa fa fa-trash"></i>
                  </button>
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
            <template slot="footer">
              <td colspan="100%">
                <p>Filtrado por: <strong>{{ selectOption }}</strong></p>
              </td>
            </template>
          </v-data-table>
        </div>
      </div>      
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
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
      posts: [],
      errors: [],
      noDataText: "No existen datos para mostrar",
    }
  },
  created: function () {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(this.posts[0].capital);
    })
    .catch(e => {
      this.errors.push(e)
    })
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
    }
  }
}
</script>
      
<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height class="contenido" >
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-layout align-center justify-center>
              <img src="../../../public/logo-trampolin.svg" width="50%" alt="Logo Trampolín">
            </v-layout>
            <v-card class="elevation-6">
              <v-toolbar dark color="#636363">
                <v-toolbar-title>Iniciar sesion</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="error" block>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>
<script>
  export default {
    name: 'Login',
    components: {
    },
    data () {
      return {
        // title: 'Espectaculos',
      }
    }
  }
</script>
<style scoped>
  /* .contenido  {
      background-color: #3d3d3d;
  } */
</style>
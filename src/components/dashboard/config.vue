<template>
  <div>
    <h1>{{title}} </h1>
    <div class="row">
      <div class="col-md-12">
        <div class="row widget-row">
          <div class="col-md-12 col-sm-12">
            <div class="portlet light bordered">
              <div class="portlet-body">
                <div class="row">
                  <div class="col-sm-3 about-links-item">
                    <h4>General</h4>
                    <ul>
                      <li>
                        <a href="/">Configuracion</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-3 about-links-item">
                    <h4>Usuarios del sistema</h4>
                    <ul>
                      <li>
                        <a href="#">Usuarios</a>
                      </li>
                      <li>
                        <a href="#">Acuerdos con productores</a>
                      </li>
                      <li>
                        <a href="#">Roles</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-3 about-links-item">
                    <h4>Países y regiones</h4>
                    <ul>
                      <li>
                        <a href="http://localhost/admin/regions/list">Regiones</a>
                      </li>
                      <li>
                        <a href="http://localhost/admin/countries/list">Países</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Config",
  data() {
    return {
      title: "Configuracion general de Trampolin"
    };
  },
  components: {}
};
</script>

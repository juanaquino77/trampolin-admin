<template>
  <div>
    <!-- <va-small-box
      color="aqua"
      icon="ion-bag"
      title="150"
      description="New Order"
      @more-click="clickToSmallBox"
      moreText="More info"/>
    <Dashboard/> -->
    <Dashboard2/>
  </div>
</template>
<script>
import Dashboard from '../../../node_modules/vue2-admin-lte/src/examples/Dashboard.v1'
import Dashboard2 from '../../../node_modules/vue2-admin-lte/src/examples/Dashboard.v2'
import VASmallBox from '../../../node_modules/vue2-admin-lte/src/widgets/VASmallBox.vue'

export default {
  name: 'dashboard',
    created () {
  },
  components: {
    'Dashboard': Dashboard,
    'Dashboard2': Dashboard2,
    'va-small-box': VASmallBox,
  },
  methods: {
    clickToSmallBox () {
      alert('click!!!: clickToSmallBox')
    }
  },
}
</script>

<template>
  <div>
    <va-small-box
      color="aqua"
      icon="ion-bag"
      title="150"
      description="New Order"
      @more-click="clickToSmallBox"
      moreText="More info"/>
    <Dashboard/>
    <Dashboard2/>
    <!-- <AlertExample/> -->
    <!-- <APIExample/> -->
    <!-- <General/>
    <Buttons/> -->
    <!-- <Icons/>
    <Modals/>
    <Sliders/>
    <Timeline/> -->
    <!-- <NaviBarorigin/> -->

    <!-- <ChartExample/> -->
    <!-- <InfoBoxExample/> -->
    <!-- <ModalExample/> -->
    <!-- <WidgetsExample/> -->
  </div>
</template>
<script>
// import Dashboard from '../../../node_modules/vue2-admin-lte/src/Slider'
import Dashboard from '../../../node_modules/vue2-admin-lte/src/examples/Dashboard.v1'
import Dashboard2 from '../../../node_modules/vue2-admin-lte/src/examples/Dashboard.v2'
import AlertExample from '../../../node_modules/vue2-admin-lte/src/examples/AlertExample'
import APIExample from '../../../node_modules/vue2-admin-lte/src/examples/APIExample'
import ChartExample from '../../../node_modules/vue2-admin-lte/src/examples/ChartExample'
import InfoBoxExample from '../../../node_modules/vue2-admin-lte/src/examples/InfoBoxExample'
import ModalExample from '../../../node_modules/vue2-admin-lte/src/examples/ModalExample.vue'
import WidgetsExample from '../../../node_modules/vue2-admin-lte/src/examples/WidgetsExample.vue'
import Buttons from '../../../node_modules/vue2-admin-lte/src/pages/ui-elements/Buttons'
import General from '../../../node_modules/vue2-admin-lte/src/pages/ui-elements/General'
// import Icons from '../../../node_modules/vue2-admin-lte/src/pages/ui-elements/Icons'
// import Modals from '../../../node_modules/vue2-admin-lte/src/pages/ui-elements/Modals'
// import Sliders from '../../../node_modules/vue2-admin-lte/src/pages/ui-elements/Sliders'
// import Timeline from '../../../node_modules/vue2-admin-lte/src/pages/ui-elements/Timeline'
import AdvancedElements from '../../../node_modules/vue2-admin-lte/src/pages/forms/AdvancedElements'
import GeneralElements from '../../../node_modules/vue2-admin-lte/src/pages/forms/GeneralElements'
import VABox from '../../../node_modules/vue2-admin-lte/src/widgets/VABox'
import Slider from '../../../node_modules/vue2-admin-lte/src/Slider'
import NaviBarorigin from '../../../node_modules/vue2-admin-lte/src/NaviBarorigin'
import VASmallBox from '../../../node_modules/vue2-admin-lte/src/widgets/VASmallBox.vue'


export default {
  name: 'dashboard',
    created () {
  },
  components: {
    'Dashboard': Dashboard,
    'Dashboard2': Dashboard2,
    'AlertExample': AlertExample,
    'APIExample': APIExample,
    'ChartExample': ChartExample,
    'InfoBoxExample': InfoBoxExample,
    'ModalExample': ModalExample,
    'WidgetsExample': WidgetsExample,
    'Buttons': Buttons,
    'General': General,
    'AdvancedElements': AdvancedElements,
    'NaviBarorigin': NaviBarorigin,
    'va-small-box': VASmallBox,
    
  },
  methods: {
    clickToSmallBox () {
      alert('click!!!: clickToSmallBox')
    }
  },
}
</script>

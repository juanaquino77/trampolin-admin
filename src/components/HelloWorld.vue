<template>
  <div class="dashboard">
  <va-button
    name="main"
    theme="danger"
    size="btn-xs"
    :isFlat="false"
  ></va-button>
    <row>
      <div class="col-lg-6 col-xs-6">
              <va-calendar>
              </va-calendar>
            </div>
            <div class="col-lg-6 col-xs-6">
              <va-quick-mail>
              </va-quick-mail>
            </div>
                        <!-- //4 of these -->
            <div class="col-lg-3 col-xs-6">
                <va-small-box
                color="aqua"
                icon="ion-bag"
                title="150"
                description="New Order"
                moreText="More info">
              </va-small-box>
            </div>
    <div class="col-lg-12 col-xs-12">
      <va-chat-box>
      </va-chat-box>
    </div>
    </row>
  </div>
</template>

<script>
import VACalendar from '../../../trampolin-admin/node_modules/vue2-admin-lte/src/widgets/VACalendar'
import VAQuickMail from '../../../trampolin-admin/node_modules/vue2-admin-lte/src/widgets/VAQuickMail.vue'
import VASmallBox from '../../../trampolin-admin/node_modules/vue2-admin-lte/src/widgets/VASmallBox.vue'
import VAChatBox from '../../../trampolin-admin/node_modules/vue2-admin-lte/src/widgets/VAChatBox.vue'
import VAButton from '../../../trampolin-admin/node_modules/vue2-admin-lte/src/components/VAButton.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    components: {
    'va-calendar': VACalendar,
    'va-quick-mail': VAQuickMail,
    'va-small-box': VASmallBox,
    'va-chat-box': VAChatBox,
    'va-button': VAButton,
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

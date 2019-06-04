<template>
  <div id="app">
    <TheAppBar/>
    <!-- <TheTabs/> -->
    <!-- <router-link to="/">Home</router-link> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
// components
const TheAppBar = () => import('./components/TheAppBar')
// const TheTabs = () => import('./components/TheTabs')
// helpers
// import webliteHandler from './helper/function/weblite.api'
// store
import store from './store'
// W
// const { W } = window

export default {
  name: 'App',

  components: {
    TheAppBar,
    // TheTabs,
  },

  // computed: mapState(['isDataFetched', 'isComponentLoaded']),

  // created() {
  //   W && webliteHandler(this)
  // },
}
</script>
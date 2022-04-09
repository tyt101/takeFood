<template>
<div id="app">
    <router-view></router-view>
    <footer-nav v-show="$route.meta.showFooter"/>
</div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav.vue'
export default {
  components: {FooterNav},
  mounted () {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>

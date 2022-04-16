<template>
  <div>
    <section class="search">
      <header-nav title="我的" />
      <form class="search_form" action="#">
        <input v-model="keyword" type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
        <button type="button" name="查询"  class="search_submit" @click="submit">查询</button>
      </form>
    </section>
    <search :keySearch="keySearch" :keyword="keyword" />
  </div>
</template>

<script>
import HeaderNav from '../../components/HeaderNav/HeaderNav.vue'
import search from '../../components/Search/Search.vue'
import {reqKeySearch} from '../../api'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      keyword: '',
      keySearch: {}
    }
  },
  components: {
    HeaderNav, search
  },
  created () {
  },
  computed: {
    ...mapState(['latitude', 'longtitude'])
  },
  methods: {
    async submit () {
      if (this.keyword) {
        const result = await reqKeySearch(this.latitude + ',' + this.longtitude, this.keyword)
        if (result.code === 0) {
          this.keySearch = result.data
          console.log(this.keySearch)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
.search  //搜索
  width 100%
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774
    button
      margin-left 5px
      border-radius 5px
      width 70px
      background-color #02a774
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      color white
      border none
      font-size 16px
</style>

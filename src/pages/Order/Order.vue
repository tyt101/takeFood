<template>
  <div>
      <section class="order">
        <header-nav title="订单列表" />
        <section class="order_no_login" v-if="!userInfo._id">
          <img src="./images/person.png">
          <h3>登录后查看外卖订单</h3>
          <button >立即登陆</button>
        </section>
        <li v-for="(food,index) in cartFoods" :key="index" class="top">
          <a>
            <div class="cartLeft">
              <img :src="food.image" :alt="food.name">
            </div>
            <div class="cartRight">
              <div class="cartRight-name">
                {{food.name}}
              </div>
              <div class="cartRight-description">
                {{food.description}}
              </div>
              <div class="cartRight-rationgs">
                月售{{food.sellCount}}份  好评率{{food.rating}}%
              </div>
              <div class="cartRight-price">
                <div class="span" style="float:left">￥{{food.price}}</div>
                <div class="total" style="float:right">总价￥{{food.price*food.count}}</div>
              </div>
            </div>
          </a>
        </li>
      </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import HeaderNav from '../../components/HeaderNav/HeaderNav.vue'
export default {
  components: {
    HeaderNav
  },
  computed: {
    ...mapState(['userInfo', 'cartFoods'])
  }
}
</script>
<style lang="css">
  .top{
    transform: translateY(50px);
    margin-bottom: 10px;
    height: 70px;
    padding: 10px;
  }
  .cartLeft{
    width: 15%;
    float: left;
    margin-right: 15px;

  }
  .cartLeft img{
    width: 57px;
    height: 57px;
  }
  .cartRight{
    font-size: 12px;
  }
  .cartRight-name{
    font-size: 14px;
    font-weight: bold;
    color: black;
    margin-bottom: 3px;
  }
  .cartRight-description{
    margin-bottom: 3px;
  }
  .cartRight-rationgs{
    margin-bottom: 3px;
  }
  .cartRight-price{
    color: red;
    font-weight: bold;
    font-size: 14px;
  }
</style>
<style lang="stylus">
@import '../../common/stylus/mixins.styl';
.order  //订单
  width 100%

  .order_no_login
    padding-top 140px
    width 60%
    margin 0 auto
    text-align center
    >img
      display block
      width 100%
      height 30%
    >h3
      padding 10px 0
      font-size 17px
      color #6a6a6a
    >button
      display inline-block
      background #02a774
      font-size 14px
      color #fff
      border 0
      outline none
      border-radius 5px
      padding 10px 20px
</style>

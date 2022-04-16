<template>
    <div>
        <div class="boxshow" v-if="keySearch">
            <div class="foodBox" v-for="key in keySearch" :key="key.id">
                <div class="food-left-box">
                    <img v-if="key.image_path" :src="BASE_URL+key.image_path" :alt="key.name">
                </div>
                <div class="food-right-box">
                    <div class="food-right-box-top">{{key.name}}</div>
                    <div class="food-right-box-top">月售{{key.recent_order_num}}单</div>
                    <div class="food-right-box-top">{{key.float_minimum_order_amount}}元起送 / 距离{{key.distance}}</div>
                </div>
            </div>
        </div>
        <div class="noFind" v-if="!keySearch.length&&keyword">
            很抱歉!无搜索结果
        </div>
    </div>
</template>

<script>
export default {
  name: 'search',
  props: ['keySearch', 'keyword'],
  data () {
    return {
      BASE_URL: 'http://cangdu.org:8001/img/'
    }
  }
}
</script>

<style>
.foodBox{
    width: 100%;
    height: 70px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
}
.food-left-box{
    float: left;
    width: 15%;
    margin-right: 10px;
}
.food-left-box img{
    width: 100%;
    vertical-align: top;
}
.food-right-box{
    width: 80%;
    margin-right: 10px;
    font-size: 12px;

}
.food-right-box-top{
    margin-bottom: 6px;
    overflow: hidden;
}
.noFind{
    color: black;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
}
</style>

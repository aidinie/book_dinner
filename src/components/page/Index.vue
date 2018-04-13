<template>  
  <div>
    <carousel></carousel>
    <el-container>
        <el-aside width="200px">
            <navigation></navigation>
        </el-aside>
        <el-main>
            <!-- <dinner-item></dinner-item>    -->
            <!-- <cold-dishes></cold-dishes>
            <hot-dishes></hot-dishes> -->
            <router-view></router-view>
        </el-main>
      </el-container>
    
  </div>   
</template>
<script>
// //商品
// import DinnerItem from '@/components/common/DinnerItem'

//凉菜
import ColdDishes from '@/components/common/ColdDishes'

//热菜
import HotDishes from '@/components/common/HotDishes'

//海鲜类
import Seafood from '@/components/common/Seafood'

//主食类
import StapleFood from '@/components/common/StapleFood'

//酒水类
import Drinks from '@/components/common/Drinks'

//轮播图
import Carousel from '@/components/common/Carousel'

//导航栏
import Navigation from '@/components/common/Navigation'

export default {
  components: {
    // DinnerItem,
    ColdDishes,
    HotDishes,
    Carousel,
    Navigation,
    Seafood,
    StapleFood,
    Drinks

  }
}

</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-menu{
    background-color: #D3DCE6;

  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

</style>
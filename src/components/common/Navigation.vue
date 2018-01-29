<template>
    <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    >
    <el-menu-item index="1">
      <router-link :to="{path:'/index/cold'}">
        <i class="el-icon-menu"></i>
        <span>凉菜系列</span>
      </router-link>  
      </el-menu-item>
    <el-menu-item index="2">
      <router-link :to="{path:'/index/hot'}">
          <i class="el-icon-menu"></i>
          <span>热菜系列</span>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>

</script>

<style scoped>
a{
  text-decoration: none;
  color: black
}
.router-link-active{
  color: #409EFF
}
</style>
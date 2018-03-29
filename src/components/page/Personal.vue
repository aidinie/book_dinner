<template>
    <div>
        <div>个人中心</div>
        <el-row class="mT20">
            <el-col :span="4" :offset="3">
                <el-menu :default-active="curIndex" class="el-menu-vertical-demo">
                    <router-link :to="{path:'/personal/order'}">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span>查看我的订单</span>
                        </el-menu-item>
                    </router-link>
                    <router-link :to="{path:'/personal/address'}">
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span>新增收货地址</span>
                        </el-menu-item>
                    </router-link>
                    <router-link :to="{path:'/personal/manage'}">
                        <el-menu-item index="3">
                            <i class="el-icon-menu"></i>
                            <span>管理收货地址</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-col>
            <el-col :span="15">
                    <router-view></router-view>
            </el-col>
        </el-row>
    </div>
  
</template>

<script>
export default{
    data(){
        return{
            curIndex: '1'
        }
    },
    created(){
        this.id = this.$route.query.id;
        var path = this.$route.path;
        if(path == '/personal/address'){
            this.curIndex = "2"
        }else if(path == '/personal/manage'){
            this.curIndex = "3"
        }
    },
}
</script>

<style scoped>
a{
    text-decoration: none;
}

</style>
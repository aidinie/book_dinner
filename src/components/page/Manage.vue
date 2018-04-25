<template>
    <div>
        <div>后台管理</div>
        <el-row class="mT20">
            <el-col :span="4" :offset="3">
                <el-menu :default-active="curIndex" class="el-menu-vertical-demo">
                    <router-link :to="{path:'/manage/check'}">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span>查看菜品</span>
                        </el-menu-item>
                    </router-link>
                    <router-link :to="{path:'/manage/add'}">
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span>新增菜品</span>
                        </el-menu-item>
                    </router-link>
                    <router-link :to="{path:'/manage/user'}">
                        <el-menu-item index="3">
                            <i class="el-icon-menu"></i>
                            <span>管理用户</span>
                        </el-menu-item>
                    </router-link>
                    <router-link :to="{path:'/manage/order'}">
                        <el-menu-item index="4">
                            <i class="el-icon-menu"></i>
                            <span>订单管理</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-col>
            <el-col :span="15">
                    <router-view ></router-view>
            </el-col>
        </el-row>
    </div>

</template>

<script>
export default{
    data(){
        return{
            curIndex: "1",
        }
    },
    methods: {
        add: function(){
            var obj = {
                id: '',
                price: '',
                name: '',
                describe: ''
            }
            this.foodData.push(obj);
        }
    },
    created(){
        var path = this.$route.path;
        if(path == '/manage/add'){
            this.curIndex = "2"
        }else if(path == '/manage/user'){
            this.curIndex = "3"
        }else if(path == '/manage/order'){
            this.curIndex = "4"
        }else if(path == '/manage/detail'){
            this.curIndex = "4"
        }
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
   
</style>
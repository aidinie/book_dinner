<template>
<div id="head" class="box p10 bgCor4 boxVc f14 pL20 pR20">
    <router-link to="/index" class="box boxVc corB">
        <img src="../../assets/logo.png" alt="" height="40px" width="40px">
        <p class="f20 pL10">酒店订餐系统</p>
    </router-link>
    <div class="flex1"></div>
    <i class="fa fa-user mR10 fa-lg" aria-hidden="true"></i>
    <p v-if='userName'> <span class="p10">{{userName}}</span>已登录</p>
    <div v-else>
        <router-link to='/register'>用户注册</router-link>
        <router-link to='/login'>用户登陆</router-link>
        <!-- <router-link to='/register'>商家登陆</router-link> -->
    </div>
    <!-- <p v-else class="cursor">请登录</p> -->
    <el-dropdown class="mR10" v-if = 'userName'>
        <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right cursor"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <router-link to="/personal"><el-dropdown-item><span>个人中心</span></el-dropdown-item></router-link>
            <el-dropdown-item><span @click="removeUserMessage">注销登陆</span></el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <router-link v-if='permission == 1' to='/manage'>后台管理</router-link>
    <!-- <img src="../../assets/shopping.png" alt="" height="40px" width="40px"> -->
    <span class="cursor mL10" @click='checkCart'><i class="fa fa-shopping-cart fa-lg corB" aria-hidden="true"></i> &nbsp;购物车&nbsp;{{count}} &nbsp;件</span>
</div>
</template>
<script>
import {monitorApi} from '@/api/index'
import { mapState } from 'vuex'
export default{
    data(){
        return{

        }
    },
    computed: mapState(['count','userName','permission','userId']),
    methods: {
        removeUserMessage : function(){
            this.$store.commit('removeUserMessage');       
        },
        checkCart(){
            var userName = this.$store.state.userName;
            if(userName){
                this.$router.push({path:'/cart'});
            }else{
                this.noLanding();
            }

        },
        noLanding(){
            this.$message({
            message: '您还没有登陆，请登陆',
            type: 'error',
            duration: '2000',
            center: true
            });
        }
        
    },
    created(){
        monitorApi.getCartDishesNum({uid:this.$store.state.userId}).then((data)=>{
            
            this.$store.commit('setCount',parseInt(data.total));
        })
    }
  

}

</script>
<style scoped>
a{
    text-decoration: none;
}

</style>
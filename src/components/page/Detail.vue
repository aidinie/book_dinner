<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" :offset="3">
                <img src="../../assets/logo.png" alt="">
            </el-col>
            <el-col :span="6" class="tl">
                <p class="f20 tc p10 mT10">{{foodInfo.name}}</p>
                <div class="mT20">
                    <span class="p10">价格: <span class="f20 fb"> {{foodInfo.price}}</span> 元</span>
                    <span class="p10 mL30">月销量: <span class="f20 fb"> {{foodInfo.sale}}</span> 份</span>
                </div>
                <p class="mT20 p10">
                    <span>我想购买</span>
                    <i class="fa fa-plus cursor p10" aria-hidden="true" @click="add"></i>
                     <span class="p10">{{num}}</span>
                    <i class="fa fa-minus cursor p10" aria-hidden="true" @click="reduce"></i>
                    <span class="p10">份</span>
                </p>
                <el-button type="primary" class="mT20 mL10" @click="addCart">加入购物车</el-button>
            </el-col>
        </el-row>  
        <el-row>
            <el-col :span="12" :offset="3" class="mT10">
                <el-menu  mode="horizontal" :default-active="curIndex" class="el-menu-demo" >
                    <el-col :span="12">
                        <router-link :to="{path:'/detail/',query:{id:id}}"><el-menu-item index="1"> 详情</el-menu-item></router-link>
                    </el-col>
                    <el-col :span="12">
                        <router-link :to="{path:'/detail/comment',query:{id:id}}"><el-menu-item index="2"> 评论</el-menu-item></router-link>
                    </el-col>
                </el-menu>
            </el-col>
        </el-row>
        <el-row class="mT10">
            <el-col :span="12" :offset="3">
                <router-view :id="id" :describe="foodInfo.describe"></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import {monitorApi} from '@/api/index'
export default{
    data(){
        return{
            foodInfo:'',
            num : 1,
            id : '',
            curIndex : "1",   
        }
    },
    created(){
        this.id = this.$route.query.id;
        var self = this;
        monitorApi.dishDetail({ id: this.id}).then(
            function(data){
                self.foodInfo = data;
            }
        )
        var path = this.$route.path;
        if(path == '/detail/comment'){
            this.curIndex = "2"
        }
    },
    computed:{
        ...mapState(['userId'])
    },
    methods: {
        ...mapMutations['increment','decrement'],
        add: function(){
            this.num++;
            //this.$store.commit('increment',1);
            console.log(this.num);

        },
        reduce: function(){
            if(this.num>1){
                this.num--;
                //this.$store.commit('decrement',1);
                console.log(this.num);
            }
        },
        addCart: function(){
            var params = {
                id : this.foodInfo.did,
                name : this.foodInfo.name,
                price : this.foodInfo.price,
                num : this.num,
                uid : this.userId
            }
            var self = this;
            monitorApi.insertCart(params).then(
                function(data){
                    if(data.flag == "success"){
                        self.$store.commit('increment',self.num);
                        self.addCartSuccess();
                    }else{
                        self.addCartError();

                    }
                }
            )
            

        },
        addCartSuccess() {
            this.$message({
            message: '已加入购物车',
            type: 'success',
            duration: '1000',
            center: true
            });
        },
        addCartError() {
            this.$message({
            message: '加入购物车失败，请重试',
            type: 'error',
            duration: '1000',
            center: true
            });
        },
    }
}

</script>

<style scoped>
a{
    text-decoration: none;
}
.is-active {
    color: #000000;
    border-bottom: 3px solid #409EFF;
}

</style>
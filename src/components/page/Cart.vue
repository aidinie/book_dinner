<template>
    <div class="tc mT20">
        <div>我的购物车</div>
        <el-table :data="cartData" stripe>
            <el-table-column prop="dname" label="菜品名称" header-align="center">
            </el-table-column>
            <el-table-column prop="price" label="单价" header-align="center">
            </el-table-column>
            <el-table-column prop="num" label="数量" header-align="center">
                <template slot-scope="scope">
                    <i class="fa fa-plus cursor" aria-hidden="true" @click="add(scope.row.id)"></i>
                    <span class="m10">{{scope.row.num}}</span>
                    <i class="fa fa-minus cursor" aria-hidden="true" @click="reduce(scope.row.id)"></i>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center">
                <template slot-scope="scope">
                    <el-button @click="remove(scope.row.id)" type="primary" size="small" round>删除</el-button>
                </template>
            </el-table-column>
         </el-table>
        <div class="box boxVc p10">
            <div class="flex1"></div>
            <el-button type="primary" class="mR20"><router-link to='/index' class="td corF">继续购物</router-link></el-button>
            <div class="mR20">总价：<span>{{ totalPrice() }}</span> 元</div>
            <el-button type="primary" class="mR20">立刻下单</el-button>
        </div>
    </div>
</template>

<script>
import {monitorApi} from '@/api/index'
import { mapMutations,mapState } from 'vuex'
export default{
    data(){
        return{
            cartData: [],
            // cartData:[
            //     {
            //         id: 1,
            //         name: '菜品1',
            //         price: 66,
            //         num:1
            //     },
            //     {
            //         id: 2,
            //         name: '菜品2',
            //         price: 77,
            //         num:1
            //     },
            //     {
            //         id: 3,
            //         name: '菜品3',
            //         price: 99,
            //         num:3
            //     },
            //     {
            //         id: 4,
            //         name: '菜品4',
            //         price: 66,
            //         num:1
            //     },
            //     {
            //         id: 5,
            //         name: '菜品5',
            //         price: 77,
            //         num:1
            //     },
            //     {
            //         id: 6,
            //         name: '菜品6',
            //         price: 99,
            //         num:3
            //     }
            // ]
        }
    },
    computed:{
        ...mapState(['userId'])
    },
    methods:{
        ...mapMutations['increment','decrement'],
        getIndex(id){
            var index = -1;
            for(var i = 0; i < this.cartData.length; i++){
                if(this.cartData[i].id == id){
                    index = i;
                }
            }
            return index;
        },
        remove(id){
            var self = this;
            monitorApi.deleteCartById({id:id}).then(
                function(data){
                    if(data.flag == "success"){
                        var index = self.getIndex(id);
                        var n = self.cartData[index].num;
                        self.cartData.splice(index,1);
                        self.$store.commit('decrement',n);
                        self.success('删除成功');
                    }else{
                        self.error('删除失败，请重试');

                    }
                }
            )
        },
        add(id){
            var index = this.getIndex(id);
            var updatedNum = this.cartData[index].num;
            var params = {
                did : this.cartData[index].did,
                num : updatedNum + 1,
                uid : this.userId                
            }
            var self = this;
            monitorApi.updateCart(params).then(
                function(data){
                    if(data.flag == "success"){
                        self.cartData[index].num++;
                        self.$store.commit('increment',1);
                        self.success('更新成功');
                    }else{
                        self.error('更新失败，请重试');

                    }
                }
            )

        },
        reduce(id){
            var index = this.getIndex(id);
            // if( this.cartData[index].num >1){
            //     this.cartData[index].num --;
            //     this.$store.commit('decrement',1);
            // }
            var updatedNum = this.cartData[index].num;
            if(updatedNum >1){
                var params = {
                did : this.cartData[index].did,
                num : updatedNum-1,
                uid : this.userId                
            }
            var self = this;
            monitorApi.updateCart(params).then(
                function(data){
                    if(data.flag == "success"){
                        self.cartData[index].num--;
                        self.$store.commit('decrement',1);
                        self.success('更新成功');
                    }else{
                        self.error('更新失败，请重试');

                    }
                }
            )

            }
          
        },
        totalPrice(){
            var total = 0;
            for(var i = 0; i < this.cartData.length; i++){
                total += this.cartData[i].num * this.cartData[i].price;
            }
            return total;
        },
        success(msg) {
            this.$message({
            message: msg,
            type: 'success',
            duration: '1000',
            center: true
            });
        },
        error(msg) {
            this.$message({
            message: msg,
            type: 'error',
            duration: '1000',
            center: true
            });
        },
    },
    created(){
        console.log(this.$store.state.userId);
        monitorApi.getCartDishes({uid: this.$store.state.userId}).then((data) =>{
            if(data.flag == 'empty'){

            }else{
                this.cartData = data;
            }
           
        })
    }

}

</script>

<style>

</style>
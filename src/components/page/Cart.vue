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
import { mapMutations } from 'vuex'
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
            var index = this.getIndex(id);
            var n = this.cartData[index].num;
            this.cartData.splice(index,1);
            this.$store.commit('decrement',n);
        },
        add(id){
            var index = this.getIndex(id);
            this.cartData[index].num ++;
            this.$store.commit('increment',1);

        },
        reduce(id){
            var index = this.getIndex(id);
            if( this.cartData[index].num >1){
                this.cartData[index].num --;
                this.$store.commit('decrement',1);
            }
        },
        totalPrice(){
            var total = 0;
            for(var i = 0; i < this.cartData.length; i++){
                total += this.cartData[i].num * this.cartData[i].price;
            }
            return total;
        }
    },
    created(){
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
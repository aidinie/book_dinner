<template>
    <el-table :data="orderData" stripe>
        <el-table-column prop="oid" label="订单编号" header-align="center"></el-table-column>
        <el-table-column prop="time" label="下单时间" header-align="center"></el-table-column>
        <el-table-column prop="name" label="收货人" header-align="center"></el-table-column>
        <el-table-column prop="phone" label="收货人电话" header-align="center"></el-table-column>
        <el-table-column prop="address" label="收货地址" header-align="center"></el-table-column>
        <el-table-column prop="total" label="订单总金额" header-align="center"></el-table-column>
        <el-table-column label="订单状态" header-align="center">
            <template slot-scope="scope">
                    <div v-if="scope.row.status == 1">商家已接单</div>
                    <div v-else>待商家接单</div>
            </template>
        </el-table-column>
        <el-table-column label="操作" header-align="center">
            <template slot-scope="scope">
                <router-link :to="{path: '/order/detail', query:{time:scope.row.time,total:scope.row.total,address:scope.row.address}}">
                    <el-button type="primary" size="small" round>查看详情</el-button>
                </router-link>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import {monitorApi} from '@/api/index'
import { mapState } from 'vuex'
export default{
   data(){
       return{
           orderData: []
       }
   },
   computed:{
        ...mapState(['userId','userName'])
    },
    created(){
        monitorApi.getOrder({uid: this.userId}).then((data) =>{
            if(data.flag == 'empty'){

            }else{
                this.orderData = data;
            }
           
        })
    }
}
</script>

<style>

</style>
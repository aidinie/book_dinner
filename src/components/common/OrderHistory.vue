<template>
    <el-table :data="orderData" stripe>
        <el-table-column prop="oid" label="订单编号" header-align="center"></el-table-column>
        <el-table-column prop="time" label="下单时间" header-align="center"></el-table-column>
        <el-table-column prop="name" label="收货人" header-align="center"></el-table-column>
        <el-table-column prop="phone" label="收货人电话" header-align="center"></el-table-column>
        <el-table-column prop="address" label="收货地址" header-align="center"></el-table-column>
        <el-table-column prop="total" label="订单总金额" header-align="center"></el-table-column>
        <el-table-column prop="status" label="订单状态" header-align="center">
                <template slot-scope="scope">
                    <div v-if="scope.row.status == 1">已处理</div>
                    <div v-else>待处理</div>
                </template>
        </el-table-column>
        <el-table-column label="操作" header-align="center">
            <template slot-scope="scope">
                <router-link :to="{path: '/manage/detail', query:{time:scope.row.time,total:scope.row.total,address:scope.row.address,id:scope.row.uid}}">
                    <el-button type="primary" size="small" round>查看详情</el-button>
                </router-link>
                <el-button v-if="scope.row.status == 0" type="primary" size="small" round class="mT10" @click="acceptOrder(scope.row.oid)">接收订单</el-button>
               
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
    created(){
        monitorApi.getOrder({uid: -1}).then((data) =>{
            if(data.flag == 'empty'){

            }else{
                this.orderData = data;
            }
           
        })
    },
    methods:{
        acceptOrder(oid){
            var self = this;
            monitorApi.acceptOrder({oid : oid}).then((data) =>{
                if(data.flag == 'success'){
                    self.success('接收订单成功！');
                    setTimeout(() => {
                        location.reload();
                    }, 2000);

                }else{
                    self.error('接收订单失败,请重试！')
                }
           
            })
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

    }
}
</script>

<style>

</style>
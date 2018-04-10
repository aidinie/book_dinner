<template>
    <div>
        <div>订单详情</div>
        <el-table :data="orderDetailData" stripe>
            <el-table-column prop="dname" label="订单产品" header-align="center">
            </el-table-column>
            <el-table-column prop="price" label="单价" header-align="center">
            </el-table-column>
            <el-table-column prop="num" label="订购数量" header-align="center">
            </el-table-column>
            <el-table-column label="操作" header-align="center">
                <template slot-scope="scope">
                    <router-link :to="{ path: '/comment', query:{id: scope.row.did}}">
                        <el-button type="primary" size="small" round>去评价</el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>
        <div class="box boxVc p10">
                <div class="mL20">收货地址: <span>{{place}}</span></div> 
                <div class="flex1"></div>
                <div class="mR20">总价：<span>{{ totalPrice }}</span> 元</div>               
        </div>
    </div>
</template>
<script>
import {monitorApi} from '@/api/index'
import { mapMutations,mapState } from 'vuex'
export default{
    data(){
        return{
            orderDetailData : [],
            totalPrice: '',
            place: '',
            time: '',
        }
    },
    created(){
        this.time = this.$route.query.time;
        this.place = this.$route.query.address;
        this.totalPrice = this.$route.query.total;
        var self = this;
        monitorApi.getOrderDetail({ uid : this.userId, time : this.time }).then(
            function(data){
                if(data.flag == 'empty'){

                }else{
                    self.orderDetailData = data;
                console.log(self.orderDetailData);
                }
            }
        )
        
    },
    computed:{
        ...mapState(['userId'])
    },
}

</script>

<style>

</style>
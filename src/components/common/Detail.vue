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
                uid : ''
            }
        },
        created(){
            this.time = this.$route.query.time;
            this.place = this.$route.query.address;
            this.totalPrice = this.$route.query.total;
            this.uid = this.$route.query.id;
            var self = this;
            monitorApi.getOrderDetail({ uid : this.userId, time : this.time }).then(
                function(data){
                    if(data.flag == 'empty'){
    
                    }else{
                        self.orderDetailData = data;
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
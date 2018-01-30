<template>
    <div>
        <div>订单详情</div>
        <el-table :data="orderDetailData" stripe>
            <el-table-column prop="name" label="订单产品" header-align="center">
            </el-table-column>
            <el-table-column prop="price" label="单价" header-align="center">
            </el-table-column>
            <el-table-column prop="num" label="订购数量" header-align="center">
            </el-table-column>
            <el-table-column label="操作" header-align="center">
                <template slot-scope="scope">
                    <router-link :to="{ path: '/comment', query:{id: scope.row.id}}">
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
export default{
    data(){
        return{
            orderDetailData:[
                {
                    id : '1',
                    name: '菜品1',
                    price: '188',
                    num: '1'
                },
                {
                    id : '1',
                    name: '菜品1',
                    price: '188',
                    num: '1'
                },
                {
                    id : '1',
                    name: '菜品1',
                    price: '188',
                    num: '1'
                },
                {
                    id : '1',
                    name: '菜品1',
                    price: '188',
                    num: '1'
                }
            ],
            totalPrice: '326',
            place: "海淀区清河街道清上园小区"
        }
    }
}

</script>

<style>

</style>
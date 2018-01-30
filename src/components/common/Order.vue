<template>
    <el-table :data="orderData" stripe>
        <el-table-column prop="orderNumber" label="订单编号" header-align="center"></el-table-column>
        <el-table-column prop="time" label="下单时间" header-align="center"></el-table-column>
        <el-table-column prop="name" label="收货人" header-align="center"></el-table-column>
        <el-table-column prop="phoneNumber" label="收货人电话" header-align="center"></el-table-column>
        <el-table-column prop="totalPrice" label="订单总金额" header-align="center"></el-table-column>
        <el-table-column label="操作" header-align="center">
            <template slot-scope="scope">
                <router-link :to="{path: '/order/detail', query:{id:scope.row.orderNumber}}">
                    <el-button type="primary" size="small" round>查看详情</el-button>
                </router-link>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default{
    data(){
        return{
            orderData: [
                {
                    orderNumber: '1',
                    time: '2018-1-30 10:45:45',
                    name: 'nieaidi',
                    totalPrice: '2000',
                    phoneNumber: '18846792935',
                },
                {
                    orderNumber: '2',
                    time: '2018-1-30 10:45:45',
                    name: 'nieaidi',
                    totalPrice: '2000',
                    phoneNumber: '18846792935',
                },
                {
                    orderNumber: '3',
                    time: '2018-1-30 10:45:45',
                    name: 'nieaidi',
                    totalPrice: '2000',
                    phoneNumber: '18846792935',
                },
                {
                    orderNumber: '4',
                    time: '2018-1-30 10:45:45',
                    name: 'nieaidi',
                    totalPrice: '2000',
                    phoneNumber: '18846792935',
                },
                {
                    orderNumber: '5',
                    time: '2018-1-30 10:45:45',
                    name: 'nieaidi',
                    totalPrice: '2000',
                    phoneNumber: '18846792935',
                }
            ]
        }
    }
}
</script>

<style>

</style>
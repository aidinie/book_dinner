<template>
<div>
    <div v-for='item in dishesList' class="item">
        <!-- <span>{{item.id}}</span> -->
        <router-link :to="{path:'/detail',query:{id:item.id}}" target='_blank'>
            <img :src='item.imgPath' alt="" height="100px" width="100px">
        </router-link>
        <p>{{item.name}}</p>
        <div class="msg">
            <div class="price">{{item.price}}元</div>
            <!-- <div class="shopping"><img src="../../assets/shopping.png" alt="" width="40px" height="40px"></div> -->
            <div><el-button type="primary" class="mR10" size="small">加入购物车</el-button></div>
        </div>
    </div>
</div>

</template>

<script>
export default{
    props: ["dishesList"],
    data(){
        return{
            // dinnerItem : [
            //     {
            //         id : 1,
            //         name : '宫保鸡丁',
            //         imgPath : '../../../static/logo.png',
            //         price : 66,
            //     },
            //     {
            //         id : 2,
            //         name : '锅包肉',
            //         imgPath : '../../../static/logo.png',
            //         price : 88,
            //     },
            //     {
            //         id : 3,
            //         name : '小鸡炖蘑菇',
            //         imgPath : '../../../static/logo.png',
            //         price : 77,
            //     }
            // ]
        }
    }
}

</script>

<style scoped>
.item{
    margin: 10px 10px;
    border: 1px solid black;
    display: inline-block;
    width: 200px;
    height: 200px;
}
.msg{
    height: 40px;
    width: 100%;
    margin-top: 10px;
}
.shopping,.price{
 display: inline-block
}
.price{
    float: left;
    line-height: 32px;
    margin-left: 30px;
}
.shopping{
    float: right;
    margin-right: 40px;
}
</style>
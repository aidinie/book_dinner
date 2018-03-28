<template>
<div id='coldDishes'>
    <p>凉菜系列</p>
    <dinner-item :dishesList='dishesList'></dinner-item>
</div>
</template>

<script>
import {monitorApi} from '@/api/index'
//菜品
import DinnerItem from '@/components/common/DinnerItem'
export default{
    data(){
        return{
            dishesList:[],
            // dishesList : [
            //     {
            //         id : 1,
            //         name : '凉菜1',
            //         imgPath : '../../../static/logo.png',
            //         price : 66,
            //     },
            //     {
            //         id : 2,
            //         name : '凉菜2',
            //         imgPath : '../../../static/logo.png',
            //         price : 88,
            //     },
            //     {
            //         id : 3,
            //         name : '凉菜3',
            //         imgPath : '../../../static/logo.png',
            //         price : 77,
            //     },
            //     {
            //         id : 1,
            //         name : '凉菜1',
            //         imgPath : '../../../static/logo.png',
            //         price : 66,
            //     },
            //     {
            //         id : 2,
            //         name : '凉菜2',
            //         imgPath : '../../../static/logo.png',
            //         price : 88,
            //     },
            //     {
            //         id : 3,
            //         name : '凉菜3',
            //         imgPath : '../../../static/logo.png',
            //         price : 77,
            //     },
            //     {
            //         id : 1,
            //         name : '凉菜1',
            //         imgPath : '../../../static/logo.png',
            //         price : 66,
            //     },
            //     {
            //         id : 2,
            //         name : '凉菜2',
            //         imgPath : '../../../static/logo.png',
            //         price : 88,
            //     },
            //     {
            //         id : 3,
            //         name : '凉菜3',
            //         imgPath : '../../../static/logo.png',
            //         price : 77,
            //     },
            //     {
            //         id : 1,
            //         name : '凉菜1',
            //         imgPath : '../../../static/logo.png',
            //         price : 66,
            //     },
            //     {
            //         id : 2,
            //         name : '凉菜2',
            //         imgPath : '../../../static/logo.png',
            //         price : 88,
            //     },
            //     {
            //         id : 3,
            //         name : '凉菜3',
            //         imgPath : '../../../static/logo.png',
            //         price : 77,
            //     }
            // ]
        }
    },
    components: {
        DinnerItem,
    },
    created(){
        var self = this;
        monitorApi.getDishes({ category: 2}).then(
            function(data){
                self.dishesList = data;
                console.log(data);
            }
        )
    }
    
}

</script>

<style>

</style>
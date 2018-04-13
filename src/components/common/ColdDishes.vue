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
        }
    },
    components: {
        DinnerItem,
    },
    created(){
        var self = this;
        monitorApi.getDishes({ category: 1}).then(
            function(data){
                self.dishesList = data;;
            }
        )
    }
    
}

</script>

<style>

</style>
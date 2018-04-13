<template>
    <div id='mainFood'>
        <p>主食系列</p>
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
        monitorApi.getDishes({ category: 5}).then(
            function(data){
                self.dishesList = data;
            }
        )
    }
    
}

</script>

<style>

</style>
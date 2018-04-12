<template>
   <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" width="100%">
                <el-menu-item index="1" @click='selectItem(1)'>凉菜系列</el-menu-item>
                <el-menu-item index="2" @click='selectItem(2)'>热菜系列</el-menu-item>
                <el-menu-item index="3" @click='selectItem(3)'>海鲜系列</el-menu-item>
                <el-menu-item index="4" @click='selectItem(4)'>酒水系列</el-menu-item>
                <el-menu-item index="5" @click='selectItem(5)'>主食系列</el-menu-item>        
        </el-menu>
        <el-table :data="foodData" stripe class="mT20">
                <el-table-column prop="name" label="菜品名称" header-align="center">
                    <template slot-scope="scope">
                        <el-input placeholder="请输入内容" :value="scope.row.name" v-model="scope.row.name"></el-input>
                    </template>   
                </el-table-column>
                <el-table-column prop="price" label="单价" header-align="center">
                    <template slot-scope="scope">
                        <el-input placeholder="请输入内容" :value="scope.row.price" v-model="scope.row.price"></el-input>
                    </template>   
                </el-table-column>
                <el-table-column prop="sale" label="销售量" header-align="center">
                        <template slot-scope="scope">
                            <el-input placeholder="请输入内容" :value="scope.row.price" v-model="scope.row.sale"></el-input>
                        </template>   
                </el-table-column>
                <el-table-column prop="describe" label="菜品简介" header-align="center">
                    <template slot-scope="scope">
                        <el-input placeholder="请输入内容" type="textarea" :rows="3" :value="scope.row.describe" v-model="scope.row.describe"></el-input>
                    </template>   
                </el-table-column>
                <el-table-column label="操作" header-align="center">
                    <template slot-scope="scope">
                        <el-button @click="update(scope.row.id,scope.row.name)" type="primary" size="small" round>确定修改</el-button>
                        <el-button @click="remove(scope.row.id,scope.row.name)" type="primary" size="small" round>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
   </div>
</template>
<script>
import {monitorApi} from '@/api/index'
export default{
    data(){
        return{
            activeIndex : '1',
            foodData: []
        }
    },
    created(){
        var self = this;
        monitorApi.getDishes({category:1}).then(function(data){
            if(data.flag == 'empty'){
                self.foodData = [];

            }else{
                self.foodData = data;
            }
        })
    },
    methods:{
        selectItem(item){
            var self = this;
            monitorApi.getDishes({category:item}).then(function(data){
            if(data.flag == 'empty'){
                self.foodData = [];

            }else{
                self.foodData = data;
            }
        })
        },
        getIndex: function(id,name){
            var index = -1;
            if(id){
                for(var i = 0; i < this.foodData.length; i++){
                    if(this.foodData[i].id == id){
                        index = i;
                    }   
                }
                return index;
            }else{
                for(var i = 0; i < this.foodData.length; i++){
                    if(this.foodData[i].name == name){
                        index = i;
                    }   
                }
                return index;

            }
        },
        update: function(id,name){
            var self = this;
            var idx = this.getIndex(id,name);
            var dishData = this.foodData[idx];
            var params = {
                name : dishData.name,
                did : dishData.did,
                price : dishData.price,
                sale : dishData.sale,
                describe : dishData.describe
            }
            monitorApi.updateDish(params).then(function(data){
                if(data.flag == 'success'){
                   self.success('更新成功！');

                }else{
                    self.error('更新失败,请重试！');
                }
            })
        },
        remove: function(id,name){
            var self = this;
            var idx = this.getIndex(id,name);
            var did = this.foodData[idx].did;
            monitorApi.deleteDish({did : did}).then(function(data){
                if(data.flag == 'success'){
                   self.success('删除成功！');
                   self.foodData.splice(idx,1);

                }else{
                    self.error('删除失败,请重试！');
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
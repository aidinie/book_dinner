<template>
        <el-table :data="addressInfo" stripe>
            <el-table-column prop="name" label="姓名" header-align="center">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" :value='scope.row.name' v-model='scope.row.name'></el-input>    
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="手机号" header-align="center">
                <template slot-scope="scope">
                        <el-input placeholder="请输入内容" :value='scope.row.phone' v-model='scope.row.phone'></el-input>    
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址" header-align="center">
                <template slot-scope="scope">
                        <el-input placeholder="请输入内容" :value='scope.row.address' v-model='scope.row.address'></el-input>    
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" round @click="update(scope.row)">修改</el-button>
                    <el-button type="primary" size="small" round @click="deleteItem(scope.row.id)">删除</el-button>          
                </template>
            </el-table-column>
        </el-table>
    </template>
<script>
import { mapState } from 'vuex'
import {monitorApi} from '@/api/index'
export default{
    data(){
        return{
            addressInfo : []
        }
    },
    computed:{
        ...mapState(['userId'])
    },
    methods:{
        getIndex(id){
            var index = -1;
            for(var i = 0; i < this.addressInfo.length; i++){
                if(this.addressInfo[i].id == id){
                    index = i;
                }
            }
            return index;
        },
        update(params){
            var self = this;
            monitorApi.updateAddressInfo(params).then(
                function(data){
                    if(data.flag == "success"){
                        self.success('修改成功！');
                        
                    }else{
                        self.error('修改失败，请重试！');
                    }
                }
            )
             
        },
        deleteItem(id){
            console.log(111);
            var self = this;
            var params = {
                id : id,
                uid : this.userId
            }
            monitorApi.deleteAddressInfo(params).then(
                function(data){
                    if(data.flag == "success"){
                        self.success('删除成功！');
                        var index = self.getIndex(id);
                        self.addressInfo.splice(index,1);
                        
                    }else{
                       self.error('删除失败，请重试！');
                    }
                }
            )
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
    },
    created(){
        var self = this;
        monitorApi.getAddressInfo({uid:self.userId}).then(
            function(data){
                if(data.flag == "empty"){
                    
                }else{
                    self.addressInfo = data;

                }
            }
        )
    }
}
</script>
<style>

</style>
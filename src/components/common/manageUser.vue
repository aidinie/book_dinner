<template>
<div>
    <div>用户列表 </div>
    <el-table :data="userList" stripe>
            <el-table-column prop="name" label="用户姓名" header-align="center">
            </el-table-column>
            <el-table-column prop="sex" label="性别" header-align="center">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" header-align="center">
            </el-table-column>
            <el-table-column label="权限" header-align="center">
                <template slot-scope="scope">
                <div v-if="scope.row.permission > 0">管理员</div>
                <div v-else>普通用户</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center">
                    <template slot-scope="scope">
                    <el-button v-if="scope.row.permission > 0" type="primary" size="small" round @click='setPermission(scope.row.uid,0)'>取消管理员</el-button>
                    <el-button v-else type="primary" size="small" round @click='setPermission(scope.row.uid,1)'>升级管理员</el-button>
                    <el-button type="primary" size="small" round  @click='deleteUser(scope.row.uid)'>删除用户</el-button>
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
            userList : [],
        }
    },
    methods:{
        getIndex(uid){
            var index = -1;
            for(var i = 0; i < this.userList.length; i++){
                if(this.userList[i].uid == uid){
                    index = i;
                }
            }
            return index;
        },
        setPermission(uid,permission){
            var self = this;
            var params = {
                uid : uid,
                permission : permission
            }
            monitorApi.setPermission(params).then(function(data){
                if(data.flag == 'success'){
                    self.success('设置成功！');
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }else{
                    self.success('设置失败,请重试！');
                }    
            })
        
        },
        deleteUser(uid){
            var self = this;
            var idx = self.getIndex(uid);
            monitorApi.deleteUser({uid:uid}).then(function(data){
                if(data.flag == 'success'){
                    self.success('删除成功！');
                    self.userList.splice(idx,1);
                }else{
                    self.success('删除失败,请重试！');
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

    },
    created(){
        var self = this;
        monitorApi.getUserList().then(function(data){
            self.userList = data;
            self.userList.shift();
        })

    }
}

</script>
<style>

</style>
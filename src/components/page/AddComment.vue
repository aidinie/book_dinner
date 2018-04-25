<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">添加评论</el-col>
        </el-row>
        <el-row>
            <el-col :span="6" :offset="6">
                <img :src="foodInfo.imgPath" alt="" width="300px" height="300px">
            </el-col>
            <el-col :span="6">
                <div class="f20 mT30">{{foodInfo.name}}</div>
                <div class="describe">{{foodInfo.describe}}</div>
            </el-col>
        </el-row>
        <el-row class="mT20">
            <el-col :span="4" :offset="6">
                配送:  
            </el-col>
            <el-col :span="8">
                <el-rate 
                show-text 
                v-model="distribution"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
            </el-col>
        </el-row>
        <el-row class="mT20">
            <el-col :span="4" :offset="6">
                口味:  
            </el-col>
            <el-col :span="8">
                <el-rate 
                show-text
                v-model="taste"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
            </el-col>
        </el-row>
        <el-row class="mT20">
            <el-col :span="4" :offset="6">
                包装: 
            </el-col>
            <el-col :span="8">
                <el-rate 
                show-text 
                v-model="packing"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
            </el-col>
        </el-row>
        <el-row class="mT20">
            <el-col :span="4" :offset="6">
                添加评论:
            </el-col>
            <el-col :span="8">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="comment">
                </el-input>
            </el-col>
        </el-row>
        <div class="mT20">
            <el-button type="primary" round @click="ok">提交</el-button>
        </div>
    </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
import {monitorApi} from '@/api/index'
export default{
    data(){
        return{
            foodInfo:[],
            distribution: null,  //配送
            taste: null,   //口味
            packing: null,  //包装
            comment: '',
        }
    },
    methods:{
        ok(){ 
            var self = this;
            if(this.distribution && this.taste && this.packing){
                var params = {
                    uid : this.userId,
                    name : this.userName,
                    did : this.foodInfo.did,
                    comment : this.comment || '该用户很懒，默认好评！',
                    distribution : this.distribution,
                    packing : this.packing,
                    taste : this.taste
                };
                monitorApi.addComment(params).then(
                    function(data){
                        if(data.flag == 'success'){
                            self.success('评论成功！');
                        }else{
                            self.error('评论失败，请重试！');
                        }
                    }
                )
               
            }else{
                this.error('请为菜品评分');
            }
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
        this.id = this.$route.query.id;
        var self = this;
        monitorApi.dishDetail({ id: this.id}).then(
            function(data){
                self.foodInfo = data;
            }
        )
    },
    computed:{
        ...mapState(['userId','userName'])
    },
}
</script>

<style scoped> 
.describe{
    text-align: left
}
</style>
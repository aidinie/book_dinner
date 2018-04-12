<template>
    <el-table :data='commentData' style="width:100%" stripe>
        <el-table-column prop="comment" label="口味评分" header-align="center">
            <template slot-scope="scope">
                <el-rate
                v-model=scope.row.taste
                disabled
                text-color="#ff9900"
                >
                </el-rate>
            </template>
        </el-table-column>
        <el-table-column prop="comment" label="包装评分" header-align="center">
            <template slot-scope="scope">
                <el-rate
                v-model=scope.row.packing
                disabled
                text-color="#ff9900"
                >
                </el-rate>
            </template>
        </el-table-column>
        <el-table-column prop="comment" label="配送评分" header-align="center">
            <template slot-scope="scope">
                <el-rate
                v-model=scope.row.distribution
                disabled
                text-color="#ff9900"
                >
                </el-rate>
            </template>
        </el-table-column>
        <el-table-column prop="comment" label="评论" header-align="center">
        </el-table-column>
        <el-table-column prop="name" label="评论人" header-align="center">
        </el-table-column>
    </el-table>
</template>

<script>
import {monitorApi} from '@/api/index'
export default{
    props: ["id"],
    data(){
        return{
            commentData : [],
        }
    },
    created(){
        var self = this;
        monitorApi.getComment({ did: this.id}).then(
            function(data){
                if(data.flag == 'empty'){

                }else{
                    for(var i = 0; i < data.length; i++){
                    data[i].packing = parseInt(data[i].packing);
                    data[i].distribution = parseInt(data[i].distribution);
                    data[i].taste = parseInt(data[i].taste);
                    }
                    self.commentData = data;
                }
                
            }
        )
    }
}
</script>

<style scoped>

    
</style>
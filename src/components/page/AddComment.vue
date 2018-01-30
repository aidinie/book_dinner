<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">添加评论</el-col>
        </el-row>
        <el-row>
            <el-col :span="6" :offset="6">
                <img :src="imgPath" alt="">
            </el-col>
            <el-col :span="6">
                <div class="f20 mT30">{{name}}</div>
            </el-col>
        </el-row>
        <el-row class="mT20">
            <el-col :span="4" :offset="6">
                配送:  
            </el-col>
            <el-col :span="8">
                <el-rate show-text v-model="value1">
                </el-rate>
            </el-col>
        </el-row>
        <el-row class="mT20">
            <el-col :span="4" :offset="6">
                口味:  
            </el-col>
            <el-col :span="8">
                <el-rate show-text v-model="value2">
                </el-rate>
            </el-col>
        </el-row>
        <el-row class="mT20">
            <el-col :span="4" :offset="6">
                包装: 
            </el-col>
            <el-col :span="8">
                <el-rate show-text v-model="value3">
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
            <el-button type="primary" round>提交</el-button>
        </div>
    </div>

</template>

<script>
export default{
    data(){
        return{
            imgPath: '../../static/logo.png',
            name: '菜品一',
            value1: '',
            value2: '',
            value3: '',
            comment: '',
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <p class="p10 f20">登陆</p>
    </el-alert>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号:" prop="number">
                <el-input type="text" v-model="ruleForm.number" auto-complete="off" placeholder="请输入注册手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="验证码:" prop="checkCode">
                <el-col :span='8'>
                    <div class="code mR10">{{code}}</div>
                </el-col>
                <el-col :span='8'>
                    <el-input type="text" v-model="ruleForm.checkCode" auto-complete="off"></el-input>
                </el-col>
                <el-col :span='8'>
                    <div @click='createCode' class="cursor mL10">看不清换一张</div>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {monitorApi} from '@/api/index'
import { mapMutations,mapState } from 'vuex'
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        var validateNumber =(rule, value, callback) =>{
            if(value === ''){
                callback(new Error('请输入手机号'));
            }else if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(value))){  
                callback(new Error('请输入正确手机号!'));   
            }else{
                callback();
            }

        };
        var validateCode = (rule, value, callback) =>{
            console.log(value);
            if(value === ''){
                callback(new Error('请输入验证码'));
            }else if(value.toUpperCase() == this.code.toUpperCase()){
                callback();
            }else{
                callback(new Error('验证码有误'));
            }
        }
        return {
            ruleForm: {
                pass: '',
                number: '',
                checkCode: '',
            },
            code: '',
            rules: {
                number: [
                    { required: true, message: '请输入手机号',trigger: 'blur'},
                    { type: 'number', message: '请输入正确的手机号', trigger: 'blur',validator:validateNumber }
                ],
                pass: [
                    { required: true,validator: validatePass, trigger: 'blur' }
                ],
                checkCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur', validator: validateCode}
                ]
            }
        };

    },
    methods: {
        // submitForm1(){
        //     console.log(this.userId);
        //     this.$store.commit('setUserMessage',{name:11,uid:22,permission:33});
        //     console.log(this.userId);
        //     debugger
        // },
        submitForm(formName) {
            let that = this;
            this.$refs[formName].validate((valid) => {
            if (valid) {
                monitorApi.login(this.ruleForm).then((data)=>{
                    if(data.flag == 'success'){
                        // debugger
                        this.loginSuccess();
                        this.$store.commit('setUserMessage',{
                            name:data.name,
                            uid:data.uid,
                            permission:data.permission});
                        //data.userId = this.userId;
                        console.log(this.$store.state.userId);
                        // this.$router.push({path:'/index'});
                        setTimeout(() => {
                            this.$router.push({path:'/index'});
                            this.$root.dc.$emit('user-info-changed', data);
                            console.log(this.$store.state.userId);
                        },2000)
                    }else{
                        this.loginError();
                    }
                    
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        createCode(){       
            this.code = ""; 
            this.ruleForm.checkCode = "";     
            var codeLength = 4;//验证码的长度          
            var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
                
            for(var i=0;i<codeLength;i++) {      
                var charIndex = Math.floor(Math.random()*60);      
                this.code +=selectChar[charIndex];      
            }      
            if(this.code.length != codeLength){   
                this.createCode();      
            }       

        },
        loginSuccess() {
            this.$message({
            message: '登陆成功',
            type: 'success',
            duration: '1000',
            center: true
            });
        },
        loginError(){
            this.$message({
            message: '手机号或密码输入错误',
            type: 'error',
            duration: '2000',
            center: true
            });

        }      
    },
    mounted(){
        this.createCode();
    },
    computed: {
        ...mapState(['count','userName','permission','userId'])
    }
   
}
</script>
<style>
.el-form{
    width: 400px;
    text-align: center;
    margin: 20px auto;  
}
.el-form-item__content{
    text-align: left
}
.code{
    font-size: 20px;
    letter-spacing:3px;
    font-family:Arial;
    font-style:italic;
    text-align:center;
    vertical-align:middle;
    font-weight:bolder; 
    background-image: url('../../assets/bg.jpg');
    color: gray     
}
</style>
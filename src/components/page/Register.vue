<template>
    <div>
        <p class="p10 f20">注册</p>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名:" prop="name">
                <el-input type="text" v-model="ruleForm2.name" auto-complete="off" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别:" prop="sex">
                <el-radio-group v-model="ruleForm2.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号:" prop="number">
                <el-input type="text" v-model="ruleForm2.number" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item label="验证码:" prop="checkCode">
                <el-col :span='8'>
                    <div class="code mR10">{{code}}</div>
                </el-col>
                <el-col :span='8'>
                    <el-input type="text" v-model="ruleForm2.checkCode" auto-complete="off"></el-input>
                </el-col>
                <el-col :span='8'>
                    <div @click='createCode' class="cursor mL10">看不清换一张</div>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        //input 验证密码输入
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm2.checkPass !== '') {
                this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
            }
        };
        //验证两次密码输入是否相同
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        //正则表达式验证输入手机号是否正确
        var validateNumber =(rule, value, callback) =>{
            if(value === ''){
                callback(new Error('请输入手机号'));
            }else if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(value))){  
                callback(new Error('请输入正确手机号!'));   
            }else{
                callback();
            }

        };
        //验证码输入是否正确
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
            ruleForm2: {
                pass: '',
                checkPass: '',
                sex: '',
                name: '',
                number: '',
                checkCode: '',
            },
            code: '',
            //input 验证规则
            rules2: {
                name: [
                    { required: true, message: '请输入姓名',trigger: 'blur'}
                ],
                number: [
                    { required: true, message: '请输入手机号',trigger: 'blur'},
                    { type: 'number', message: '请输入正确的手机号', trigger: 'blur,change',validator:validateNumber }
                ],
                pass: [
                    { required: true,validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { required: true,validator: validatePass2, trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                checkCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur,change', validator: validateCode}
                ]
            }
        };

    },
    methods: {
        //提交表单
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                //alert('submit!');
                console.log(this.ruleForm2);
                //验证成功，路由跳转
                // setTimeout(function(){
                //     this.$router.push({path:'/index'});

                // },2000);
                
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        //重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //生成验证码
        createCode(){       
            this.code = ""; 
            this.ruleForm2.checkCode = "";     
            var codeLength = 4;//验证码的长度      
            // var checkCode = document.getElementById("checkCode");      
            // checkCode.value = "";      
            var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
                
            for(var i = 0; i < codeLength; i++) {      
                var charIndex = Math.floor(Math.random()*60);      
                this.code +=selectChar[charIndex];      
            }      
            if(this.code.length != codeLength){   
                this.createCode();      
            }       
        }      
    },
    mounted(){
        this.createCode();
    }
   
}
</script>
<style>
/* .el-input__inner{
    width: 300px;
} */
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
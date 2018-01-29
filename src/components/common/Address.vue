<template>
    <div>
        <el-form :model="addreassForm" status-icon :rules="rules" ref="addreassForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="选择所在地" prop="region">
                <el-select v-model="addreassForm.region" placeholder="请选择所在地" class="tl">
                  <el-option value="东城区"></el-option>
                  <el-option value="西城区"></el-option>
                  <el-option value="宣武区"></el-option>
                  <el-option value="崇文区"></el-option>
                  <el-option value="朝阳区"></el-option>
                  <el-option value="海淀区"></el-option>
                  <el-option value="昌平区"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详细地址" prop="place">
                <el-input v-model="addreassForm.place"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="number">
                <el-input v-model="addreassForm.number"></el-input>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
export default{
    data() {
        var validateNumber =(rule, value, callback) =>{
            if(value === ''){
                callback(new Error('请输入手机号'));
            }else if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(value))){  
                callback(new Error('请输入正确手机号!'));   
            }else{
                callback();
            }

        };
        return {
            addreassForm: {
            name: '',
            region: '',
            place: '',
            number: ''
            // place: {
            //     city: '',
                
            // },
            
          },
          rules: {
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            place: [
              { required: true, message: '请填写详细地址', trigger: 'blur' }
            ],
            number: [
                    { required: true, message: '请输入手机号',trigger: 'blur'},
                    { type: 'number', message: '请输入正确的手机号', trigger: 'blur',validator:validateNumber }
            ],
          }
        };
      },
}    

</script>

<style scoped>

</style>
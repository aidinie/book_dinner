<template>
<div>
    <div>新增菜品</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm mT20" enctype="multipart/form-data">
            <el-form-item label="菜品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="菜品分类" prop="category">
              <el-select v-model="ruleForm.category" placeholder="请选择菜品分类">
                <el-option label="凉菜系类" value="1"></el-option>
                <el-option label="热菜系类" value="2"></el-option>
                <el-option label="海鲜系列" value="3"></el-option>
                <el-option label="酒水系列" value="4"></el-option>
                <el-option label="主食系列" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="菜品价格" prop="price">
                <el-input v-model="ruleForm.price" width="400px"></el-input>
            </el-form-item>
            <el-form-item label="菜品销量" prop="sale">
                <el-input v-model="ruleForm.sale"></el-input>
            </el-form-item>
            <el-form-item label="菜品简介" prop="describe">
              <el-input type="textarea" v-model="ruleForm.describe"></el-input>
            </el-form-item>
            <el-form-item label="图片上传" prop="imgPath">
                    <el-upload
                    class="avatar-uploader"
                    action="http://localhost/book_dinner_backstage/index.php/welcome/do_put_good"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm.imgPath" :src="ruleForm.imgPath" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
    </template>
<script>
import {monitorApi} from '@/api/index'
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        describe: '',
        category: '',
        price: '',
        sale: '',
        imgPath: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入菜品名称', trigger: 'blur' },
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' },
        ],
        sale: [
          { required: true, message: '请输入销量', trigger: 'blur' },
        ],
        category: [
          { required: true, message: '请选择菜品分类', trigger: 'change' }
        ],
        describe: [
          { required: true, message: '请填写菜品简介', trigger: 'blur' }
        ],
        imgPath: [
          { required: true, message: '请上传图片', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          monitorApi.insertDish(self.ruleForm).then(
              function(data){
                  if(data.flag == "success"){
                      self.addSuccess();
                  }else{
                      self.addSuccess();
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
    handleAvatarSuccess(res, file) {
      this.ruleForm.imgPath = 'http://localhost/book_dinner_backstage/assets/images/uploads/'+res;
    },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },
    addSuccess() {
            this.$message({
            message: '新增菜品成功！',
            type: 'success',
            duration: '1000',
            center: true
            });
        },
    addError() {
        this.$message({
        message: '新增菜品失败，请重试',
        type: 'error',
        duration: '1000',
        center: true
        });
    },

  }
}
</script>
<style scope>
  .el-select{
    float: left;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
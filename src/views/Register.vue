<template>
<div class="login">
  <h2>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="" width="60">
    </router-link>
  </h2>
  <el-card class="box-card">
    <h2 class="card-first">
      <router-link to="/login">登录</router-link>
      <span>·</span>
      <router-link to="/register">注册</router-link>
    </h2>

<!-- <form action="http://127.0.0.1:3000/user/register" method="post">
  <input type="text" name="sunkai">
  <input type="submit" value="提交">
</form> -->

    <el-form :model="formData" :rules="rules" ref="form" class="demo-form mt-5">
      <el-form-item prop="regUserName">
        <el-input v-model="formData.regUserName" placeholder="请输入用户名"><i class="el-input__icon el-icon-user" slot="prefix"></i></el-input>
      </el-form-item>
      <el-form-item prop="regPassword">
        <el-input v-model="formData.regPassword" type="password" placeholder="请输入密码"><i class="el-input__icon el-icon-lock" slot="prefix"></i></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <el-input v-model="formData.checkPassword" type="password" placeholder="确认密码"><i class="el-input__icon el-icon-lock" slot="prefix"></i></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" class="loginbtn" round @click="onReg('form')">立即注册</el-button>
      </el-form-item>
      <p class="confirm">点击 “注册” 即表示您同意并愿意遵守协议</p>
    </el-form>
  </el-card>

</div>
</template>

<script>
// import qs from 'qs';
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
        var reg=/^\w{3,15}$/;
        if (!reg.test(value)) {
          callback(new Error("必须数字，字母，下划线组成"))
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formData.regPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      formData: {
        regUserName:"",
        regPassword:"",
        checkPassword:""
      },
      rules: {
        regUserName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' },
          { validator: validateUserName, trigger: 'blur' }
        ],
        regPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    onReg(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("可以提交");
          this.axios.post("http://127.0.0.1:3000/user/register",this.formData) //qs.stringify(this.formData)
          .then(res => {
            console.log(res)
            if (res.data.code == 1) {
              this.$message({
              type:"warning",
              message:res.data.massage
            })}
            
            if (res.data.code == 2) {
              this.$message({
              type:"warning",
              message:res.data.massage
            })}
            if (res.data.code == 3) {
              this.$message({
              type:"warning",
              message:res.data.massage
            })}
            if (res.data.code == 4) {
              this.$message({
              type:"warning",
              message:res.data.massage
            })}
            if (res.data.code == 0) {
              this.$message({
              type:"success",
              message:res.data.massage
            })
            this.$router.push("/login")
            }
          })
        } else {
          console.log("不能提交");
        }
      })
    }
  },
}
</script>

<style>

</style>

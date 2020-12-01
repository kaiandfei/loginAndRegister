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
    <el-form :model="formData" :rules="rules" ref="logForm" class="demo-form mt-5">
      <el-form-item prop="logUserName">
        <el-input v-model="formData.logUserName" placeholder="请输入用户名"><i class="el-input__icon el-icon-user" slot="prefix"></i></el-input>
      </el-form-item>
      <el-form-item prop="logPassword">
        <el-input v-model="formData.logPassword" type="password" placeholder="请输入密码"><i class="el-input__icon el-icon-lock" slot="prefix"></i></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="loginbtn" round @click="onLog('logForm')">立即登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>

</div>
</template>

<script>
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      var log = /^\w{3,15}$/;
      if (!log.test(value)) {
        callback(new Error("必须数字，字母，下划线组成"))
      } else {
        callback();
      }
    };
    return {
      formData: {
        logUserName: "",
        logPassword: "",
      },
      rules: {
        logUserName: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 15,
            message: '长度在 3 到 15 个字符',
            trigger: 'blur'
          },
          {
            validator: validateUserName,
            trigger: 'blur'
          }
        ],
        logPassword: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur'
          }
        ],
      }
    }
  },
  methods: {
    onLog(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post("http://127.0.0.1:3000/user/login", this.formData)
            .then(res => {
              if (res.data.code == 1) {
                this.$message({
                  type: "warning",
                  message: res.data.massage
                })
              }
              if (res.data.code == 2) {
                this.$message({
                  type: "warning",
                  message: res.data.massage
                })
              }
              if (res.data.code == 3) {
                this.$message({
                  type: "warning",
                  message: res.data.massage
                })
              }
              if (res.data.code == 4) {
                this.$message({
                  type: "warning",
                  message: res.data.massage
                })
              }
              if (res.data.code == 0) {
                this.$message({
                  type: "success",
                  message: res.data.massage
                })
                this.$router.push("/")
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

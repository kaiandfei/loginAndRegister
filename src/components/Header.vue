<template>
<div>
  <el-header>
    <el-menu mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" width="30">
        </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/home">首页</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/login"> 登录</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/register"> 注册</router-link>
        </el-menu-item>
    </el-menu>

  </el-header>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>

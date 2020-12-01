<template>
<div>
  <Header />
  <el-main style="min-height: 500px; border: 1px solid red">
    我是首页哦
  </el-main>
  <Foot />
</div>
</template>

<script>
import Foot from '@/components/Foot.vue';
import Header from '@/components/Header.vue';
export default {
components: {
  Header,
  Foot
},
}
</script>

<style>

</style>

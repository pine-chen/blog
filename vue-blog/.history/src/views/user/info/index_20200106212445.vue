<template>
  <div class="info">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="基础设置">用户管理</el-tab-pane>
    <el-tab-pane label="个人资料">配置管理</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'Info',
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

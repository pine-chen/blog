<template>
  <div class="info">
    <el-tabs :tab-position="tabPosition">
        <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
    我的行程
  </el-tab-pane>
    <el-tab-pane label="基础设置">基础设置</el-tab-pane>
    <el-tab-pane label="个人资料">个人资料</el-tab-pane>
    <el-tab-pane label="账号管理">账号管理</el-tab-pane>
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

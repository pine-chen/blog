<template>
  <div class="info">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-notebook-2"></i> 基础设置</span>
        <!-- <div class="pic">头像</div> -->
        <label>
            昵称
            <input type="text" value="nickname">
        </label>
        <label>
            邮箱
            <input type="email" value="1412223531@qq.com">
        </label>
        <label>
            手机
            <input type="tel" value="13866895797">
        </label>
        <label>
            旧密码
            <input type="password">
        </label>
        <label>
            新密码
            <input type="password">
        </label>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-user"></i> 个人资料</span>
        <label>
            性别
            <input type="radio"><span>男</span>
            <input type="radio"><span>女</span>
            <input type="radio"><span>保密</span>
        </label>
        <label>
            <input type="age">
        </label>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-setting"></i> 账号管理</span>
        账号管理
      </el-tab-pane>
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

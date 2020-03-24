<template>
  <div class="info">
    <my-header></my-header>
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
            年龄
            <input type="number" value="22">
        </label>
        <label>
            个人简介
            <input type="text" placeholder="填写你的个人简介">
        </label>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-setting"></i> 账号管理</span>
        <span>删除账号</span>
      </el-tab-pane>
    </el-tabs>
    <button type="submit">保存</button>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
export default {
  name: 'Info',
  components: {
    MyHeader
  },
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
.info{
  el-tabs{
    position: ab
  }
}
</style>

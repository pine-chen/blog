<template>
  <div class="header-on">
      <!-- pc端 -->
    <div class="pc-header-show">
      <div class="m-header">
        <!-- logo标志 -->
        <router-link tag="div" :to="{name: 'Home'}" class="left-logo">
          <img src="../../assets/logo.png" />
        </router-link>
        <!-- tab 集合 -->
        <!-- 首页 -->
        <router-link tag="div" :to="{name: 'Home'}" class="first">
          <span class="link">关于作者</span>
        </router-link>
        <!-- 推荐 -->
        <router-link tag="div" :to="{name: 'Recommend'}" class="recomment">
          <i class="iconfont hot">&#xe633;</i>
          <span class="link">推荐</span>
        </router-link>
        <!-- 我的文章 -->
        <router-link tag="div" :to="{name: 'Article'}" class="my-article">
          <i class="el-icon-tickets"></i>
          <span class="link">我的</span>
        </router-link>
        <!--  标签-->
        <div class="tags"></div>
        <!-- 搜索栏 -->
        <div class="right-search">
          <input
            ref="search"
            type="text"
            class="input-search"
            placeholder="搜索文章或关键字"
            @click="inputClick"
          />
        </div>
        <!-- 个人信息区域 -->
        <div class="message-box" @click="getMyMessage()">
          <span class="iconfont message-icon">
            &#xe66e;
            <span class="number">15</span>
          </span>
        </div>

        <!-- 写文章 -->
        <div class="write" v-if="auth.isLogin">
          <el-button type="plain" plain @click.native="toWrite()">写文章</el-button>
        </div>
        <!-- 头像 -->
        <div class="header-box" v-if="auth.isLogin">
          <!-- 截取用户名首字为头像 -->
          <el-avatar
            style=" margin-top: 5px;background: #009a61;"
          >{{auth.username.slice(0,1)}}</el-avatar>
        </div>
         <!-- 写文章 -->
        <div class="write" v-if="auth.isLogin">
          <el-button type="danger" plain @click.native="doExit()">退出</el-button>
        </div>
        <div class="login-register" v-if="!auth.isLogin">
          <el-button @click="doLoginOrRegis('0')">立即登录</el-button>
          <el-button type="success" @click="doLoginOrRegis('1')">免费注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

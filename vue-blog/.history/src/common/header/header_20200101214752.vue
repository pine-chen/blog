<template>
  <div class="header-on">
      <!-- pc端 -->
    <div class="pc-header-show">
      <div class="m-header">
        <!-- logo标志 -->
        <router-link tag="div" class="left-logo">
          <img src="../../assets/logo.png" />
        </router-link>
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
        <!-- tab 集合 -->
        <!-- 首页 -->
        <router-link tag="div" class="recomment">
          <i class="iconfont hot">&#xe633;</i>
          <span class="link">推荐</span>
        </router-link>
        <!-- 我的文章 -->
        <router-link tag="div" class="my-article">
          <i class="el-icon-tickets"></i>
          <span class="link">我的</span>
        </router-link>
        <!--  标签-->
        <div class="tags"></div>
        <!-- 关于 -->
        <router-link tag="div" class="first">
          <span class="link">ABOUT</span>
        </router-link>
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
        <div class="login-register">
          <el-button @click="doLoginOrRegis('0')">登录</el-button>
          <el-button type="success">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    // 点击输入框，输入框变长
    inputClick () {
    },

    // 写文章
    toWrite () {
    },

    // 登录与注册
    doLoginOrRegis () {
    },

    // 退出
    doExit () {
    },

    // 个人消息
    getMyMessage () {
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
// pc端样式
.pc-header-show {
  display: block;
  .m-header {
    height: 50px;
    line-height: 50px;
    border-top: 3px solid #009a61;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
    background: #fff;
    z-index: 3;
    display: flex;
    min-width: 1200px;

    .left-logo {
      flex: 6;
      line-height: 60px;
      padding-left: 50px;
      border-radius: 10px;

      img {
        width: 180px;
      }
    }

    .left-logo :hover {
      border-radius: 10px;
      border: 0.5px dashed #009a61;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1), 0 0px rgba(0, 0, 0, 0.1);
    }
    .first,
    .recomment,
    .my-article,
    .tags {
      flex: 2;
      text-align: center;
    }

    .recomment {
      .hot {
        color: red;
      }
    }
    .linkActive {
      // border-bottom: 3px solid #009a61
      color: #009a61;
      font-weight: 700;
    }

    .right-search {
      flex: 6;

      .input-search {
        display: inline-block;
        padding: 4px 8px;
        width: 200px;
        // border-radius 5px
      }
    }

    .message-box {
      flex: 2;
      margin: 0 10px;

      .message-icon {
        color: #888;
        font-size: 32px;
        padding: 2px 10px;

        .number {
          font-size: 10px;
          color: #fff;
          padding: 2px 4px;
          margin-left: -10px;
          background: #ffa500;
          border-radius: 10px;
        }
      }
    }

    .write {
      flex: 2;
    }

    .header-box {
      flex: 2;
      display: inline-block;
      height: 50px;
      line-height: 65px;
      text-align: left;
      padding: 0 0 0 20px;

      img {
        width: 25px;
        height: 25px;
        border-radius: 20px;
        border: 0.5px dashed #009a61;
      }
    }
    .login-register {
      flex: 5;
    }
  }
}
</style>

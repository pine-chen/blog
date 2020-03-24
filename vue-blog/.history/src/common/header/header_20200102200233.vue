<template>
  <div class="header-on">
      <!-- pc端 -->
    <div class="pc-header-show">
      <div class="m-header">
        <!-- logo标志 -->
        <router-link tag="div" :to="{name: 'Home'}" class="left-logo">
          <img src="../../assets/logo.png" />
        </router-link>
        <!-- 搜索栏 -->
        <div class="search">
          <el-input
            icon="el-icon-search"
            ref="search"
            type="text"
            class="input-search"
            placeholder="搜索文章或关键字"
            @click="inputClick">
            <
        </div>
        <!-- tab 集合 -->
        <!-- 首页 -->
        <router-link tag="div" :to="{name: 'Recommend'}" class="home">
          <span class="link">HOME</span>
        </router-link>
        <!-- 我的文章 -->
        <router-link tag="div" :to="{name: 'Article'}" class="my-article">
          <i class="el-icon-tickets"></i>
          <span class="link">个人文集</span>
        </router-link>
        <!--  标签-->
        <div class="tags">TAGS</div>
        <!-- 关于 -->
        <router-link tag="div" :to="{name: 'Home'}" class="about">
          <span class="link">ABOUT</span>
        </router-link>
        <!-- 个人信息区域
        <div class="message-box" @click="getMyMessage()">
            <span class="number">消息10</span>
        </div> -->
        <!-- 写文章 -->
        <div class="write">
          <el-button type="primary" size="medium" round icon="el-icon-edit" @click.native="toWrite()">写文章</el-button>
        </div>
        <!-- 头像 -->
        <div class="header-box">
          <!-- 截取用户名首字为头像 -->
        </div>
         <!-- 写文章 -->
        <div class="write">
          <el-button type="warning" size="medium" round @click.native="doExit()">退出</el-button>
        </div>
        <div class="login-register">
          <el-button type="text" size="medium" @click="doLoginOrRegis('0')">登录</el-button>
          <el-button type="success" size="medium" round @click="doLoginOrRegis('1')">免费注册</el-button>
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
    height:60px;
    line-height: 60px;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
    border-color: #e7e7e7;
    background: #fff;
    z-index: 3;
    display: flex;
    min-width: 1200px;

    .left-logo {
      flex: 6;
      line-height: 60px;
      padding-left: 50px;
      img {
        width: 180px;
      }
    }
    .about,
    .home,
    .my-article,
    .tags {
      flex: 2;
      text-align: center;
      font-size: 12px;
      font-weight: 800;
    }
    .link:hover {
      color: #0085a1;
    }
    .home {
      .hot {
        color: red;
      }
    }
    .linkActive {
      // border-bottom: 3px solid #009a61
      color: #009a61;
      font-weight: 700;
    }

    .search {
      flex: 6;
      .input-search {
        display: inline-block;
        padding: 8px 16px;
        width: 200px;
        outline-style: none ;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 400;
        font-family: "Microsoft soft";
      }
      .input-search:focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
      }
    }

    // .message-box {
    //   flex: 2;
    //   margin: 0 10px;

    //   .message-icon {
    //     color: #888;
    //     font-size: 32px;
    //     padding: 2px 10px;

    //     .number {
    //       font-size: 10px;
    //       color: #fff;
    //       padding: 2px 4px;
    //       margin-left: -10px;
    //       background: #ffa500;
    //       border-radius: 10px;
    //     }
    //   }
    // }

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

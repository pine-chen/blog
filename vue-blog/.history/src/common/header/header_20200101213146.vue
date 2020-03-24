<template>
  <div class="header-on">
      <!-- pc端 -->

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

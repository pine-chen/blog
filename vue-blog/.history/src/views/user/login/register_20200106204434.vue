<template>
  <div class="register">
    <div class="wrapper">
      <div class="logo">
        <a href="/"><img src="../../../assets/logo.png" alt="Logo"></a>
      </div>
      <div class="main">
        <h4 class="title">
          <div class="normal-title">
            <router-link class="active" to="./login">登录</router-link>
            <b>·</b>
            <router-link class="" to="./register">注册</router-link>
          </div>
        </h4>
        <div class="js-sign-in-container">
          <form action="/sessions">
            <div class="input-prepend restyle js-normal">
              <input placeholder="你的昵称" type="text">
              <i class="el-icon-user"></i>
            </div>
            <div class="input-prepend">
              <input placeholder="手机号" type="tel">
              <i class="el-icon-mobile"></i>
            </div>
            <div class="input-prepend">
              <input placeholder="密码" type="password">
              <i class="el-icon-lock"></i>
            </div>
            <div class="remember-btn">
              <input type="checkbox" value="true" checked="checked"><span>记住我</span>
            </div>
            <button class="sign-in-button" type="button">
              注册
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
.register{
  padding: 0!important;
  .wrapper{
    height: 100%;
    min-height: 794px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    .logo{
      position: absolute;
      top: 56px;
      margin-left: 50px;
      a{
        cursor: pointer;
        text-decoration: none;
        background-color: transparent;
        img{
          width: 200px;
          vertical-align: middle;
          border: 0;
        }
      }
    }
    .main{
      width: 400px;
      margin: 120px auto 0;
      padding: 50px 50px 30px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0,0,0,.1);
      vertical-align: middle;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      box-sizing: border-box;
      .title{
        box-sizing: border-box;
        color: rgb(150, 150, 150);
        display: block;
        font-size: 18px;
        font-weight: 400;
        line-height: 19.8px;
        margin-bottom:50px;
        padding: 10px;
        text-align:center;
        .normal-title{
          .active{
            color: rgb(150, 150, 150);
            background-color:rgba(0, 0, 0, 0);
            border-bottom-color:#67C23A;
            border-bottom-style:solid;
            border-bottom-width:2px;
            color:#67C23A;
            cursor:pointer;
            font-weight:700;
            padding: 10px;
            text-decoration-color:#67C23A;
            text-decoration-line:none;
            text-decoration-style:solid;
          }
          a{
            background-color:rgba(0, 0, 0, 0);
            box-sizing:border-box;
            color:rgb(150, 150, 150);
            cursor:pointer;
            display:inline;
            font-size:18px;
            font-weight:400;
            line-height:19.8px;
            padding:10px;
            text-align:center;
            text-decoration-color:rgb(150, 150, 150);
            text-decoration-line:none;
            text-decoration-style:solid;
            text-size-adjust:100%;
          }
          b{
            padding: 10px;
            font-weight:700;
          }
        }
      }
      .js-sign-in-container{
        box-sizing: border-box;
        color:rgb(51, 51, 51);
        display:block;
        font-size:14px;
        height:250px;
        line-height:20px;
        text-align:center;
        width:300px;
        .input-prepend{
          display:block;
          height:50px;
          box-sizing: border-box;
          line-height:20px;
          position:relative;
          margin-bottom: 0;
          width: 100%;
          input{
            background-color: rgba(181,181,181,0.1);
            border-bottom-style: none;
            border-left-color: #c8c8c8;
            border-left-style: solid;
            border-left-width: 1px;
            border-right-color: #c8c8c8;
            border-right-style: solid;
            border-right-width: 1px;
            border-top-color: #c8c8c8;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border-top-style: solid;
            border-top-width: 1px;
            border-bottom-color: #c8c8c8;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #333;
            cursor: auto;
            display: inline-block;
            height: 50px;
            line-height: 20px;
            padding-bottom: 4px;
            padding-left: 35px;
            padding-right: 12px;
            padding-top: 4px;
            width: 300px;
          }
          i{
            position: absolute;
            top: 14px;
            left: 10px;
            font-size: 18px;
            color: #969696;
          }
        }
        .remember-btn{
          float: left;
          margin: 15px 0;
          span{
            margin-left: 5px;
            font-size: 15px;
            color: #969696;
            vertical-align: middle;
          }
        }
        .sign-in-button{
          margin-top: 20px;
          width: 100%;
          padding: 9px 18px;
          font-size: 18px;
          border: none;
          border-radius: 25px;
          color: #fff;
          background:#42c02e;
          cursor: pointer;
          outline: none;
          display: block;
          clear: both;
        }
      }
    }
  }
}
</style>

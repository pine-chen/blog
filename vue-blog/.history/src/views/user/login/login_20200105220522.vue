<template>
  <div class="login">
    <div class="wrapper">
      <div class="logo">
        <a href="/"><img src="../../../assets/logo.png" alt="Logo"></a>
      </div>
      <div class="main">
        <h4 class="title">
          <div class="normal-title">
    <a class="active" href="/sign_in">登录</a>
    <b>·</b>
    <a id="js-sign-up-btn" class="" href="/sign_up">注册</a>
  </div>
        </h4>
        <div class="js-sign-in-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.login{
  padding: 0!important;
  .wrapper{
    height: 100%;
    min-height: 794px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    .logo{
      display: block;
      position: absolute;
      box-sizing: border-box;
      top: 56px;
      margin-left: 50px;
      a{
        cursor: pointer;
        text-decoration: none;
        background-color: transparent;
        img{
          width: 150px;
          vertical-align: middle;
          border: 0;
        }
      }
    }
    .main{
      width: 400px;
      margin: 60px auto 0;
      padding: 50px 50px 30px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0,0,0,.1);
      vertical-align: middle;
      display: inline-block;
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="wrapper">
      <div class="logo">
        <a href="/"><img src="../../../assets/logo.png" alt="Logo"></a>
      </div>
      <div class="main">
        <h4 class="title">
          <div class="normal-title">
            <a class="active" href="/login">登录</a>
            <b>·</b>
            <a id="js-sign-up-btn" class="" href="/register">注册</a>
          </div>
        </h4>
        <!-- <div class="js-sign-in-container">
          <form action="/sessions">
            <div class="input-prepend restyle js-normal">
              <input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: pointer;">
              <i class="iconfont ic-user"></i>
            </div>
            <div class="input-prepend">
              <input placeholder="密码" type="password" name="session[password]" id="session_password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
              <i class="iconfont ic-password"></i>
            </div>
            <div class="remember-btn">
              <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>
            </div>
            <div class="forget-btn">
              <a class="" data-toggle="dropdown" href="">登录遇到问题?</a>
              <ul class="dropdown-menu">
                <li><a href="/users/password/mobile_reset">用手机号重置密码</a></li>
                <li><a href="/users/password/email_reset">用邮箱重置密码</a></li>
              </ul>
            </div>
            <button class="sign-in-button" id="sign-in-form-submit-btn" type="button">
              <span id="sign-in-loading"></span>
              登录
            </button>
          </form>
          <div class="more-sign"></div>
        </div> -->
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
        box-sizing:border-box;
        color:rgb(150, 150, 150);
        display:block;
        font-size:18px;
        font-weight:400;
        height:20px;
        line-height:19.8px;
        margin-block-end:23.94px;
        margin-block-start:23.94px;
        margin-inline-end:0px;
        margin-inline-start:0px;
        padding-bottom:10px;
        padding-left:10px;
        padding-right:10px;
        padding-top:10px;
        text-align:center;
        text-size-adjust:100%;
        width:300px;
        .normal-title{
          box-sizing: border-box;
          box-sizing:border-box;
          color:rgb(150, 150, 150);
          display:block;
          font-size:18px;
          font-weight:400;
          height:19.2px;
          line-height:19.8px;
          text-align:center;
          text-size-adjust:100%;
          width:280px;
          -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
          a{
            text-decoration: none;
            color: #969696;
            color:rgb(150, 150, 150);
            cursor:pointer;
            display:inline;
            font-size:18px;
            font-weight:400;
            height:auto;
            line-height:19.8px;
            text-align:center;
            text-decoration-color:rgb(150, 150, 150);
            text-decoration-line:none;
            text-decoration-style:solid;
            text-size-adjust:100%;
            width:auto;
            -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
          }
        }
      }
    }
  }
}
</style>

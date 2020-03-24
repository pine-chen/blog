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
            <a id="js-sign-up-btn" class="" href="/regiser">注册</a>
          </div>
        </h4>
        <div class="js-sign-in-container">
          <form id="new_session" action="/sessions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="PLBOfkcKdsUcdOiD6qocQd9ivl0cg0A3/SiAwn5a5v6Ol3G4VuPPjsefuM9D4+oTp15U4VGzmaNZsSsI3MGQaw==">

    <!-- 正常登录登录名输入框 -->
      <div class="input-prepend restyle js-normal">
        <input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
        <i class="iconfont ic-user"></i>
      </div>

    <!-- 海外登录登录名输入框 -->

    <div class="input-prepend">
      <input placeholder="密码" type="password" name="session[password]" id="session_password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
      <i class="iconfont ic-password"></i>
    </div>
    <input value="false" type="hidden" name="session[oversea]" id="session_oversea">
    <div>
      <input id="sign-in-form-captcha-challenge" name="captcha[validation][challenge]" autocomplete="off" type="hidden">
      <input id="sign-in-form-captcha-gt" name="captcha[validation][gt]" autocomplete="off" type="hidden">
      <input id="sign-in-form-captcha-validate" name="captcha[validation][validate]" autocomplete="off" type="hidden">
      <input id="sign-in-form-captcha-seccode" name="captcha[validation][seccode]" autocomplete="off" type="hidden">
    </div>
    <div class="remember-btn">
      <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>
    </div>
    <div class="forget-btn">
      <a class="" data-toggle="dropdown" href="">登录遇到问题?</a>
      <ul class="dropdown-menu">
        <li><a href="/users/password/mobile_reset">用手机号重置密码</a></li>
        <li><a href="/users/password/email_reset">用邮箱重置密码</a></li>
        <li><a target="_blank" href="/p/9058d0b8711d">无法用海外手机号登录</a></li>
        <li><a target="_blank" href="/p/498a9fa7da08">无法用 Google 帐号登录</a></li>
      </ul>
    </div>
    <button class="sign-in-button" id="sign-in-form-submit-btn" type="button">
      <span id="sign-in-loading"></span>
      登录
    </button>
</form>
  <!-- 更多登录方式 -->
  <div class="more-sign">
    <h6>社交帐号登录</h6>
    <ul>
  <li id="weibo-link-wrap" class="">
    <a class="weibo" id="weibo-link" href="/users/auth/weibo">
      <i class="iconfont ic-weibo"></i>
    </a>
  </li>
  <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a></li>
  <li><a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect"><i class="iconfont ic-qq_connect"></i></a></li>
</ul>

    <div class="weibo-geetest-captcha"></div>
  </div>
</div>
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

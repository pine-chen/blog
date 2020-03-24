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
        <div class="js-sign-in-container">
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
            text-decoration: none;
            color: rgb(150, 150, 150);
            background-color:rgba(0, 0, 0, 0);
            border-bottom-color:rgb(234, 111, 90);
            border-bottom-style:solid;
            border-bottom-width:2px;
            color:rgb(234, 111, 90);
            cursor:pointer;
            font-weight:700;
            padding: 10px;
            text-decoration-color:rgb(234, 111, 90);
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
        height:319.975px;
        line-height:20px;
        text-align:center;
        width:300px;
        .input-prepend{
          display:block;
          height:50px;
          line-height:20px;
          position:relative;
          input{
            background-color:rgba(181, 181, 181, 0.1);
            background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR…5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC);
            border-bottom-style:none;
            border-left-color:rgb(200, 200, 200);
            border-left-style:solid;
            border-left-width:1px;
            border-right-color:rgb(200, 200, 200);
            border-right-style:solid;
            border-right-width:1px;
            border-top-color:rgb(200, 200, 200);
            border-top-left-radius:4px;
            border-top-right-radius:4px;
            border-top-style:solid;
            border-top-width:1px;
            border-bottom-color:rgb(200, 200, 200);
            border-bottom-left-radius:4px;
            border-bottom-right-radius:4px;
            border-bottom-style:solid;
            border-bottom-width:1px;
            box-sizing:border-box;
            color:rgb(51, 51, 51);
            cursor:auto;
            display:inline-block;
            height:50px;
            line-height:20px;
            padding-bottom:4px;
            padding-left:35px;
            padding-right:12px;
            padding-top:4px;
            width:300px;
          }
          .remember-btn{
            box-sizing:border-box;
            color:rgb(51, 51, 51);
            display:block;
            float:left;
            font-size:14px;
            height:23.575px;
            line-height:20px;
            margin-bottom:15px;
            margin-left:0px;
            margin-right:0px;
            margin-top:15px;
            text-align:center;
            text-size-adjust:100%;
            width:62.8px;
            input{
            }
          }
        }
      }
    }
  }
}
</style>

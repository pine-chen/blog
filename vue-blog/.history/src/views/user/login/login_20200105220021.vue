<template>
  <div class="login">
    <div class="wrapper">
      <div class="logo">
        <a href="/"><img src="../../../assets/logo.png" alt="Logo"></a>
      </div>
      <div class="main"></div>
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
  }
}
</style>

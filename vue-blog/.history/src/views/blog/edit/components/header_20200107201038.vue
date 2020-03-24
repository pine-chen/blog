<template>
<div class="edit-header">
    <!-- logo标志 -->
    <router-link tag="div" :to="{name: 'Home'}" class="left-logo">
      <img src="../../../../assets/logo.png">
    </router-link>
    <!-- 写文章 -->
    <div class="save">
      <el-button type="success" @click='saveAritcle'>保存文章</el-button>
      <el-button type="primary" @click='submitArticle'>发布文章</el-button>
    </div>
</div>
</template>

<script>
export default {
  name: 'EditHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-header{
    height: 50px
    line-height 50px
    border-top 3px solid #009a61
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1)
    background: #fff
    z-index: 3
    display flex
    min-width 1510px
    .left-logo{
        flex 10
        line-height 60px
        padding-left 50px
        border-radius 10px
    }
}
  
  .left-logo
    
    img
      width 180px
  .left-logo :hover
    border-radius 10px
    border 0.5px dashed #009a61
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1), 0 0px rgba(0,0,0,0.1)
  .save
    flex 2
</style>

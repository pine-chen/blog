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
  },
  methods: {
    saveArticle () {
      this.$emit('saveAritcle')
    },
    submitArticle () {
      thi.
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-header{
    height:60px;
    line-height: 60px;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
    border-color: #e7e7e7;
    background: #fff;
    z-index: 3;
    display: flex;
    padding: 10px 0;
    min-width: 1200px;
    .left-logo{
        flex: 6;
        line-height: 60px;
        padding-left: 50px;
        img {
            width: 180px;
        }
    }
    .save{
        flex: 2
    }
}
</style>

<template>
  <div class="index">
    <my-header></my-header>
    <article-list></article-list>
    <my-footer></my-footer>
    <back-top
      @goTop="goTop"
      :backTopShow="backTopShow"
      :backSeconds="backSeconds"
      :showPx="showPx">
    </back-top>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
import ArticleList from './components/list'
import MyFooter from '../../../common/footer/footer'
import BackTop from '../../../common/backTop/backTop'
export default {
  name: 'Home',
  components: {
    MyHeader,
    ArticleList,
    MyFooter,
    BackTop
  },
  data () {
    return {
    }
  },
  methods: {
    // 点击返回顶部的操作
    goTop () {
      // console.log()
      // let marginTop = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(marginTop)
      if (this.backTopAllow) {
        var step = document.documentElement.scrollTop / this.backSeconds
        var backTopInterval = setInterval(function() {
          if (document.documentElement.scrollTop > 0) {
            document.documentElement.scrollTop -= step;
          } else {
            this.backTopAllow = true;
            clearInterval(backTopInterval);
          }
        }, 5);
        // this.backTopAllow = false
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

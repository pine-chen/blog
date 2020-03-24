<template>
  <div class="index">
    <my-header></my-header>
    <article-list></article-list>
    <my-footer></my-footer>
    <back-top
      @goTop="goTop"
          :backTopShow="backTopShow"
          :backSeconds="backSeconds"
          :showPx="showPx"></back-top>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

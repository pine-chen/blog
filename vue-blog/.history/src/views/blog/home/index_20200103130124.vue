<template>
  <div class="index">
    <my-header></my-header>
    <article-list></article-list>
    <my-footer>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
import ArticleList from './components/list'
import MyFooter from '../../../common/footer/footer'
export default {
  name: 'Home',
  components: {
    MyHeader,
    ArticleList,
    MyFooter
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

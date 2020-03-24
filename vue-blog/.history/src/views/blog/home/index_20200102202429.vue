<template>
  <div class="index">
    <my-header></my-header>
    <article-list></
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
import ArticleList from './components/list'
export default {
  name: 'Home',
  components: {
    MyHeader,
    ArticleList
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

<template>
  <div class="admin">
    <my-header></my-header>
    <div class="my-article">
      <article-card></article-card>
    </div>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
import ArticleCard from './components/articleCard'
import MyFooter from '../../../common/footer'
export default {
  name: 'Admin',
  components: {
    MyHeader,
    ArticleCard
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

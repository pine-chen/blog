<template>
  <div class="admin">
    <my-header></my-header>
    <div class="my-article">
      <my-article></my-article>
    </div>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
import MyArticle from './components/articleCard'
export default {
  name: 'Admin',
  components: {
    MyHeader,
    MyArticle
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

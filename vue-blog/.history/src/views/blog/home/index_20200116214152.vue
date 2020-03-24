<template>
  <div class="index">
    <my-header @LoginOrRegister="LoginOrRegister"></my-header>
    <article-list></article-list>
    <my-footer></my-footer>
    <back-top></back-top>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
import ArticleList from './components/list'
import Login from '../../user/login/login'
import MyFooter from '../../../common/footer/footer'
import BackTop from '../../../common/backTop/backTop'
export default {
  name: 'Home',
  components: {
    MyHeader,
    ArticleList,
    Login,
    MyFooter,
    BackTop
  },
  data () {
    return {
      dialog_visible: false
    }
  },
  methods: {
    LoginOrRegister (visible, type) {
      console.log('visible', visible)
      console.log('type', type)
      this.dialog_visible = visible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="index">
    <my-header @LoginOrRegister="LoginOrRegister"></my-header>
    <article-list></article-list>
    <my-footer></my-footer>
    <login v-show="dialog_visible" :dialog_visible="dialog_visible"  @dialogVisibleEvent="LoginOrRegister"></login>
    <re v-show="dialog_visible" :dialog_visible="dialog_visible"  @dialogVisibleEvent="LoginOrRegister"></login>
    <back-top></back-top>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
import ArticleList from './components/list'
import Login from '../../user/login/login'
import Register from '../../user/login/register'
import MyFooter from '../../../common/footer/footer'
import BackTop from '../../../common/backTop/backTop'
export default {
  name: 'Home',
  components: {
    MyHeader,
    ArticleList,
    Login,
    Register,
    MyFooter,
    BackTop
  },
  data () {
    return {
      dialog_visible: false,
      type: '-1'
    }
  },
  methods: {
    LoginOrRegister (visible, type) {
      console.log('visible', visible)
      console.log('type', type)
      this.dialog_visible = visible
      this.type = type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

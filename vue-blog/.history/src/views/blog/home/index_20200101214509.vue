<template>
  <div class="index-con">
    Home
    <my-header></my-header>
  </div>
</template>

<script>
import HomeHeader from '../../../common/header/header'
export default {
  name: 'Home',
  components: {
    HomeHeader
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

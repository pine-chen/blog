<template>
  <div class="admin">
    <admin-header></admin-header>
    Admin
  </div>
</template>

<script>
import AdminHeader from './components/header'
export default {
  name: 'Admin',
  components: {
    AdminHeader
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

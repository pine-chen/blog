<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>
import Index from './views/blog/index'
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
</style>

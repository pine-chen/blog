<template>
<div class="edit">
    <edit-header @submitArticle="submitArticle" @saveAritcle="saveAritcle"></edit-header>
    
</div>
</template>

<script>
import { MavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import EditHeader from './components/header'
export default {
  name: 'Edit',
  components: {
    EditHeader,
    MavonEditor
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

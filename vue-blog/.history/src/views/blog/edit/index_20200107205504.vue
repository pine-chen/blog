<template>
<div class="edit">
    <edit-header></edit-header>
    <mavon-editor class="editor" style="height: 100%" ref="editor" v-model="form.articleText"></mavon-editor>
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

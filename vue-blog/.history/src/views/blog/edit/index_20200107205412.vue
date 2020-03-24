<template>
<div class="edit">
    <edit-header></edit-header>
</div>
</template>

<script>
import { MavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.c'
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

<template>
<div class="edit">
    <edit-header></edit-header>
    <div class="edit-wrapper">
      <el-input
        placeholder="请输入文章标题"
        v-model="title.input"
        class="input-group input-with-select"
        >
        <el-select v-model="title.select" slot="prepend" placeholder="请选择">
          <el-option label="原创" value="1"></el-option>
          <el-option label="转载" value="2"></el-option>
        </el-select>
      </el-input>
    </div>
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
      title: {
        articleTitle: '',
        select: '0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

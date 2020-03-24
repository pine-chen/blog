<template>
<div class="edit">
    <edit-header @submitArticle="submitArticle" @saveAritcle="saveAritcle"></edit-header>
    <div class="edit-wrapper">
      <el-input
        placeholder="请输入文章标题"
        v-model="input"
        class="input-group input-with-select"
        >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
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
        input: '',
        select: '0'
      }
      input: '',
      select: '0'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

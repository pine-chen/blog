<template>
<div class="edit">
    <edit-header></edit-header>
    <div class="edit-wrapper">
      <el-input
        placeholder="请输入文章标题"
        v-model="title.articleTitle"
        class="input-with-select"
        >
        <el-select v-model="title.articleType" slot="prepend" placeholder="请选择">
          <el-option label="原创" value="1"></el-option>
          <el-option label="转载" value="2"></el-option>
        </el-select>
      </el-input>
      <div class="reprint-link" v-show="title.articleType === '2'">
        <el-input placeholder="请输入原文链接" v-model="input1">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
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
        articleType: '',
        link: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  min-height: 600px;
  .edit-wrapper {
    padding: 20px;
    height: 600px;
    width: 95%;
    margin: 0 auto;
    .editor {
      margin-top: 50px;
    }
    .reprint-link {
    }

    >>> .el-input--suffix, .el-input-group__prepend {
      width: 100px;
    }
    .reprint-link {
      margin-top: 20px;
    }
  }
  .tags-con {
    margin-top: 20px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
</style>

<template>
<div class="edit">
    <edit-header></edit-header>
    <div class="edit-wrapper">
      <el-input
        placeholder="请输入文章标题"
        v-model="title.articleTitle"
        class="input-group input-with-select"
        >
        <el-select v-model="title.articleType" slot="prepend" placeholder="请选择">
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
        articleType: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.write {
  min-height: 600px;

  .edit-wrapper {
    padding: 20px;
    height: 600px;
    width: 95%;
    margin: 0 auto;

    .editor {
      margin-top: 50px;
    }

    .reprint-link-con {
      .input-group, .el-input {
        border: #ccc 2px solid;
        border-radius: 5px;
      }
    }

    >>> .el-input--suffix {
      width: 100px;
    }

    .reprint-link-con {
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

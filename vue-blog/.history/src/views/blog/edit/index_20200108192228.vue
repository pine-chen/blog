<template>
<div class="edit">
    <edit-header @submitArticle="submitArticle" @saveArticle="saveArticle"></edit-header>
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
        <el-input placeholder="请输入原文链接" v-model="title.articleLink"></el-input>
      </div>
      <div class="tag">
        <el-tag
          :key="tag"
          size="medium"
          effect="plain"
          type="warning"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="mini" type="warning" plain @click="showInput">+ New Tag</el-button>
      </div>
      <mavon-editor class="editor" style="height: 100%" ref="editor" v-model="title.articleText"></mavon-editor>
    </div>
</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import qs from 'qs'
import EditHeader from './components/header'
export default {
  name: 'Edit',
  components: {
    EditHeader,
    mavonEditor
  },
  data () {
    return {
      // 标题
      title: {
        articleTitle: '',
        articleType: '',
        articleLink: ''
      },
      // 标签
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    // 得到需要编辑的文章
    getEditArticle () {
      this.axios
        .post(
          '/api/blog/getEditArticle',
          qs.stringify({
            blogId: this.$route.params.blogId
          })
        )
        .then(res => {
          console.log(res);
          let data = res.data.data;
          this.form.articleTitle = data.title;
          this.form.articleType = data.type+"";
          this.form.articleText = data.markdown;
          this.form.link = data.link;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 保存文章到草稿
    saveAritcle () {
      this.$message({
        type: 'success',
        message: '草稿箱功能暂时未实现，所以此功能暂缓'
      })
    },
    // 发布文章按钮
    submitArticle () {
      // 获取 markdown 暂时用不到
      let markdown = this.$refs.editor.d_value

      // 获取编译后的 html
      let html = this.$refs.editor.d_render
      this.form.articleValue = html
      // debugger;
      // console.log("submit");
      // console.log(markdown);
      // console.log(html);

      if (this.form.articleType === '2') {
        let link = this.form.link
        let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)/
        if (!reg.test(link)) {
          this.$message({
            type: 'error',
            message: '请输入正确的网址'
          })
          return
        }
      }

      // 如果路由中有参数 说明是编辑
      if (this.$route.params.blogId) {
        this.editArticle(html, markdown)
      } else {
        // 没有参数就是添加文章
        this.addArticle(html, markdown)
      }
    },

    // tags 事件
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  min-height: 600px;
  .edit-wrapper {
    padding: 20px;
    height: 540px;
    width: 95%;
    margin: 0 auto;
    .editor {
      margin-top: 50px;
    }
    .reprint-link {
      .el-input {
        border-radius: 5px;
      }
    }

    >>> .el-input--suffix {
      width: 100px;
    }
    .reprint-link {
      margin-top: 20px;
    }
    .tag {
      margin-top: 20px;
      .el-tag + .el-tag {
        margin-left: 10px;
      }
      .button-new-tag {
        margin-left: 10px;
        height: 28px;
        line-height: 28px;
        padding-top: 0;
        padding-bottom: 0;
      }
      .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
      }
      >>> .input-new-tag :focus{
        border-color:#E6A23C;
      }
    }
  }
}
</style>

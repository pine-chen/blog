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
import axios from 'axios'
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
        articleValue: '',
        articleText: '',
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
      axios.get('/api/blog/detail', qs.stringify({
        articleId: this.$route.params.articleId
      }))
        .then(this.getEditArticleSucc)
        .catch(error => {
          console.log(error)
        })
    },
    // 获取文章成功
    getEditArticleSucc (res) {
      let code = res.data.errno
      if (code === 1) {
        let data = res.data.data
        this.form.articleTitle = data.title
        this.form.articleType = data.type + ''
        this.form.articleText = data.markdown
        this.form.link = data.link
        console.log(res.data.data)
      }
    },
    // 保存文章
    saveAritcle () {
      this.$message({
        type: 'success',
        message: '草稿箱功能暂时未实现，所以此功能暂缓'
      })
    },
    // 发布文章
    submitArticle () {
      // 获取 markdown 暂时用不到
      let markdown = this.$refs.editor.d_value

      // 获取编译后的 html
      let html = this.$refs.editor.d_render
      this.title.articleValue = html
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
      if (this.$route.params.articleId) {
        this.editArticle(html, markdown)
      } else {
        // 没有参数就是添加文章
        this.addArticle(html, markdown)
      }
    },
    // 添加文章
    addArticle (html, markdown) {
      // addArticle
      console.log(this.$store.state.auth.id)
      debugger
      this.axios
        .post(
          '/api/blog/new',
          qs.stringify({
            author_id: this.$store.state.auth.id,
            title: this.title.articleTitle,
            content: html,
            type: this.title.articleType,
            link: this.time-select-item.link,
            markdown: markdown
          })
        )
        .then(res => {
          // console.log(res);
          let code = res.data.errno
          let message = res.data.message
          if (code === 0) {
            let blogId = res.data.data.id
            this.$message({
              type: 'success',
              message: message
            })
            setTimeout(() => {
              this.$router.push({
                name: 'ArticleDetail',
                params: {
                  blogId: blogId
                }
              })
            }, 1500)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 编辑文章
    editArticle (html, markdown) {
      this.axios
        .post(
          '/api/blog/editArticle',
          qs.stringify({
            // userId: this.$store.state.auth.id,
            blogId: this.$route.params.articleId,
            title: this.form.articleTitle,
            detail: html,
            type: this.form.articleType,
            link: this.form.link,
            markdown: markdown
          })
        )
        .then(res => {
          console.log(res)
          let code = res.data.errno
          let message = res.data.message
          if (code === 0) {
            let blogId = this.$route.params.blogId
            this.$message({
              type: 'success',
              message: message
            })
            setTimeout(() => {
              this.$router.push({
                name: 'ArticleDetail',
                params: {
                  blogId: blogId
                }
              })
            }, 1500)
          } else {
            this.$message({
              type: 'error',
              message: message
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
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
  },
  mounted () {
    if (this.$route.params.articleId) {
      this.getEditArticle()
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

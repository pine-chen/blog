<template>
  <div class="article">
    <my-header></my-header>
    <div class="article-detail markdown-body">
      <div class="article-title-wrapper">
        <span class="article-title">文章标题</span>
      </div>
      <el-tag >原创</el-tag>
      <el-tag >转载自 www.github.com</el-tag>
      <el-tag type="info">作者：chen</el-tag>
      <el-tag type="success">10 浏览</el-tag>
      <span class="create-time">2020.01.02</span>
      <!-- 是本文章的作者才能进行编辑和删除 -->
      <div class="fr editor">
        <el-button
          type="success"
          size="small"
          plain
          class="edit-button fr"
          @click.native="toEdit"
        >编辑</el-button>
        <el-button type="danger" size="small" plain class="fr" @click.native="handleDel">删除</el-button>
      </div>

      <div class="article-content">content</div>
    </div>
    <!-- 返回顶部组件 -->
    <back-top></back-top>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import MyHeader from '../../../common/header/header'
import BackTop from '../../../common/backTop/backTop'
export default {
  name: 'ArticleDtail',
  components: {
    MyHeader,
    BackTop
  },
  data () {
    return {
      article: '',
      articleData: {}
    }
  },
  methods: {
    // 获取文章数据
    getArticleData () {
      console.log('url', this.$route.params.articleId)
      axios.get('/api/article.json', qs.stringify({
        articleId: this.$route.params.articleId
      }))
        .then(this.getArticleDataSucc)
        .catch(error => {
          console.log(error)
        })
    },

    getArticleDataSucc (res) {
      let code = res.data.errno
      if (code === 1) {
        this.articleData = res.data.data
        console.log(res.data.data)
      }
    }
  },

  mounted () {
    this.getArticleData()
  }
//   methods: {
//     getData () {
//       this.axios
//         .post(
//           '/api/blog/detail',
//           qs.stringify({
//             blogId: this.$route.params.blogId
//           })
//         )
//         .then(res => {
//           console.log(res)
//           let code = res.data.errno
//           // let message = res.data.message;

//           console.log(res.data.data)
//           if (code >= 0) {
//             this.articleDetail = res.data.data
//             // debugger
//             let blogId = res.data.blogId
//             console.log(res.data.blogId)
//             // this.$message({
//             //   type: "success",
//             //   message: message
//             // });
//           } else {
//             this.$message({
//               type: 'error',
//               message: message
//             })
//           }
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     },

//     // 删除文章提示
//     handleDel () {
//       this.$confirm('此操作将删除该博客, 是否继续?', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning'
//       })
//         .then(() => {
//           this.doDel()
//         })
//         .catch(() => {
//           this.$message({
//             type: 'info',
//             message: '已取消删除'
//           })
//         })
//     },
//     // 删除
//     doDel () {
//       this.axios
//         .post(
//           '/api/blog/delArticle',
//           qs.stringify({
//             blogId: this.$route.params.blogId
//           })
//         )
//         .then(res => {
//           console.log(res)
//           let code = res.data.errno
//           let message = res.data.message
//           if (code === 0) {
//             this.goHome()
//             this.$message({
//               type: 'success',
//               message: message
//             })
//           }
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     },
//     // 添加访问量
//     addPageView () {
//       this.axios
//         .post(
//           '/api/blog/addview',
//           qs.stringify({
//             blogId: this.$route.params.blogId
//           })
//         )
//         .then(res => {
//           console.log(res)
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     },
//     // 返回我的文章
//     goHome () {
//       setTimeout(() => {
//         this.$router.push({
//           name: 'Article'
//         })
//       }, 1500)
//     },
//     // 去编辑文章
//     toEdit () {
//       this.$router.push({
//         name: 'Write',
//         params: {
//           blogId: this.$route.params.blogId
//         }
//       })
//     },
//   mounted () {
//     this.getData()
//     this.addPageView()
//     this.$store.dispatch('loginCheck')
//   },
//   computed: {
//     auth () {
//       return this.$store.state.auth
//     }
//   }
}
</script>

<style lang="scss" scoped>
.article {
  position: relative;

  .article-detail {
    .article-title-wrapper {
      height: 60px;
      line-height: 60px;
      margin: 30px 0 20px;

      .article-title {
        padding-left: 10px;
        font-size: 40px;
        font-weight: 700;
      }
    }

    .create-time {
      margin-left: 10px;
      color: #bbb;
    }

    .edit-button {
      margin: 0 10px;
    }

    .article-content {
      margin-top: 50px;
    }
  }
}

@media only screen and( max-width:960px) {
  // 当屏幕宽度小于960时 认为是移动端
  .article-detail {
    width: 90%;
    margin: 20px auto;
  }
  .editor {
    display: none;
  }
}
@media only screen and( min-width:960px) {
  // 当屏幕宽度大于960时 认为是PC端
  .article-detail {
    width: 60%;
    margin: 20px auto;
  }
  .editor {
    display: block;
  }
}
</style>

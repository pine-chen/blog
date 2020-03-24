<template>
  <div class="article-list">
    <article-card></article-card>
  </div>
</template>

<script>
import axios from 'axios'
import ArticleCard from './articleCard'
export default {
  name: 'List',
  components: {
    ArticleCard
  },
  data () {
    return {
        
    }
  },
  methods: {
    getArticleList () {
      axios.get('/api/home.json')
        .then(this.getArticleListSucc)
        .catch(error => {
          console.log(error)
        })
    },
    getArticleListSucc (res) {
      console.log('res', res)
      let code = res.errno
      if (code === 1) {
        this.articleList = res.data.data
      }
    }
  },
  mounted () {
    this.getArticleList()
  }
//   mounted () {
//     this.getMyArticle()
//   },
//   data () {
//     return {
//       myArticle: []
//     }
//   },
//   methods: {
//     getMyArticle () {
//       this.axios
//         .post(
//           '/api/blog/getMyArticle'
//         )
//         .then(res => {
//           console.log(res)
//           let code = res.data.errno
//           if (code === 0) {
//             // let message = res.data.message;
//             this.myArticle = res.data.data
//           }
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }
//   }
}
</script>

<style lang="scss" scoped>
@media only screen and( max-width:960px) {
  // 当屏幕宽度小于960时 认为是移动端
  .noData-con {
    width: 300px;
    margin: 0px auto;
    padding-top: 130px;
  }
}

// PC端
@media only screen and( min-width:960px) {
   .noData-con {
    width: 300px;
    margin: 0px auto;
    padding-top: 280px;
  }
}
</style>

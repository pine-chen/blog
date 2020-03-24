<template>
  <div class="aritcle-list-con">
    <!-- PC端 -->
    <div class="pc-show">
      <div class="aiticle-card">
        <div class="content">
          <el-card
            class="box-card"
            shadow="never"
            @click.native="getDetail(item.id)"
            >
            <div class="top">
              <div class="article-titie">
                重排(reflow)和重绘(repaint)
              </div>
              <div class="article-content">HTML 被 HTML 解析器解析成 DOM 树，CSS  被 CSS 解析器解析成 CSSOM 树；结合 DOM 树和 CSSOM 树，生成一棵渲染树(Render Tree)，这一过程称为 Attachment；生成布局(flow)，浏览器在屏幕上“画”出渲染树中的所有节点；将布局绘制(paint)在屏幕上，显示出整个页面。第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染。</div>
            </div>
            <div class="bottom">
                <div class="article-create-time">
                  <span class="span-time">2020.01.03</span>
                </div>
                <div class="button">
                  <el-button type="primary" icon="el-icon-edit" round size="mini">编辑</el-button>
                  <el-button type="danger" icon="el-icon-delete" round size="mini">删除</el-button>
                </div>
            </div>
          </el-card>
        </div>
        <div class="u-page-con">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :hide-on-single-page="hiddenPage"
            :current-page="currentPage"
            :page-sizes="[5, 10]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    articleList: Array
  },
  data () {
    return {
      articleSimple: [],
      // 当前页
      currentPage: 1,
      // 只有一页时隐藏翻页栏
      hiddenPage: false
    }
  },
  methods: {
    getDetail (id) {
      console.log(id)
      this.$router.push({
        name: 'Detail',
        params: {
          articleId: id
        }
      })
    },

    handleSizeChange (pageSize) {
      console.log(`每页 ${pageSize} 条`)
    },
    handleCurrentChange (page) {
      console.log(`当前页: ${page}`)
    }
  }
}
</script>

<style lang="scss" scoped>
// pc端样式
.pc-show {
  display: block;
  .aiticle-card {
    .content {
      margin: 0 10px;
      text-align: center;
      .box-card {
        display: inline-block;
        margin-top: 30px;
        width: 1000px;
        height: 100px;
        cursor: pointer;
        >>> .el-card__body{
          padding: 10px 10px 0 10px;
        }
        .top {
          text-align: left;
          width: 100%;
          .article-titie {
            font-size: 18px;
          }
          .article-content {
            font-size: 15px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.8;
          }
        }
        .top:hover {
          color: #0085a1;
        }
        .bottom {
          width: 100%;
          text-align: left;
          margin-top: 5px;
          float: left;
          .article-create-time {
            float: left;
            margin-right: 20px;
            .span-time {
              font-size: 14px;
              color: #808080;
              opacity: 0.7;
            }
          }
          .button {
              float: right;
          }
        }
      }
    }
    .u-page-con {
      text-align: center;
      padding: 200px 0 0;
      width: 60%;
      margin: 0 auto;
    }
  }
}
// 移动端样式
.phone-show {
  display: none;
  .article-titie {
    font-size: 20px;
    font-weight: 700;
  }
  .article-author {
    padding-top: 10px;
    color:#38ba72;
    font-size: 16px;
  }
  p {
    font-size: 16px;
  }
}

// 移动端样式
@media only screen and( max-width:960px) {
  // 当屏幕宽度小于960时 认为是移动端
  .pc-show {
    display: none;
  }
  .phone-show {
    display: block;
  }

}
</style>

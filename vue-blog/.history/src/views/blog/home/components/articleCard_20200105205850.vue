<template>
  <div class="aritcle-list-con">
    <!-- PC端 -->
    <div class="pc-show">
      <div class="aiticle-card">
        <div class="content">
          <el-card
            class="box-card"
            shadow="never"
            v-for="(item) in articleList"
            :key="item.id"
            @click.native="getDetail(item.id)"
          >
            <div class="top-con">
              <div class="article-titie">
                {{item.title}}
              </div>
              <div class="article-content">{{item.content}}</div>
            </div>
            <div class="buttom-con">
                <div class="article-author">
                    <i class="el-icon-user-solid"></i>
                    {{item.author}}
                </div>
                <div class="article-create-time">
                  <span class="span-time">{{item.time}}</span>
                </div>
                <span class="p-read-number">1人阅读过该文章</span>
                <!-- 标签 -->
                <div class="tags-con">
                  <el-tag>标签一</el-tag>
                  <el-tag type="success">标签二</el-tag>
                  <el-tag type="info">标签三</el-tag>
                  <el-tag type="warning">标签四</el-tag>
                  <el-tag type="danger">标签五</el-tag>
                </div>
            </div>
          </el-card>
        </div>
        <div class="u-page-con">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :hide-on-single-page="value"
            :current-page="currentPage"
            :page-sizes="[5, 10]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="articleList.length"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- 移动端 -->
    <div class="phone-show">
      <div class="aiticle-card">
        <div class="content">
          <el-card
            class="box-card"
            shadow="hover"
            v-for="(item) in articleList"
            :key="item.articleid"
            @click.native="getDetail(item.articleid)"
          >
            <div class="article-titie">{{item.title}}</div>
            <p>
              <span class="p-create-time">创建时间：</span>
              <span class="span-time">{{item.createtime}}</span>
            </p>
            <span class="p-read-number">有{{item.preview}}人阅读过该文章</span>

            <div class="article-author">
              <i class="iconfont">&#xe654;</i>
              {{item.username}}
            </div>
            <!--右边-->
          </el-card>
        </div>
        <!-- <div class="u-page-con">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="myArticle.length"
          ></el-pagination>
        </div> -->
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
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 默认每页显示的条数（可修改）
      pageSize: 5,
      // 只有一页
      value: false
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
        height: 200px;
        cursor: pointer;
        .top-con {
          text-align: left;
          width: 100%;
          min-height: 120px;
          .article-titie {
            font-size: 20px;
          }
          .article-content {
            margin-top: 10px;
            font-size: 15px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.8;
          }
        }
        .top-con:hover {
          color: #0085a1;
        }
        .buttom-con {
          width: 100%;
          text-align: left;
          margin-top: 10px;
          float: left;
          .article-author {
            float: left;
            margin-right: 20px;
            color: #808080;
          }
          .article-create-time {
            float: left;
            margin-right: 20px;
            .span-time {
              font-size: 14px;
              color: #808080;
              opacity: 0.7;
            }
          }
          .p-read-number {
            float: left;
            margin-right: 20px;
            font-size: 14px;
            color: #808080;
            opacity: 0.7;
          }
          .tags-con {
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

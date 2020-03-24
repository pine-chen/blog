<template>
  <div class="info">
    <my-header></my-header>
    <div class="wrapper">
      <el-tabs class="tabs" :tab-position="tabPosition">
       <el-tab-pane class="tab">
         <span slot="label"><i class="el-icon-notebook-2"></i> 基础设置</span>
         <table>
            <thead><tr><th class="setting-head responsive-head"></th> <th></th></tr></thead>
            <tbody>
              <tr>
                 <td>昵称</td>
                 <td><input type="text" value="nickname"></td>
               </tr>
              <tr>
                 <td>邮箱</td>
                 <td><input type="email" value="1412223531@qq.com"></td>
              </tr>
              <tr>
                 <td>手机</td>
                 <td><input type="tel" value="13866895797"></td>
              </tr>
              <tr>
                 <td>旧密码</td>
                 <td><input type="password"></td>
              </tr>
              <tr>
                 <td>新密码</td>
                 <td><input type="password"></td>
              </tr>
            </tbody>
         </table>
       </el-tab-pane>
       <el-tab-pane>
         <span slot="label"><i class="el-icon-user"></i> 个人资料</span>
         <table>
           <thead><tr><th class="setting-head responsive-head"></th> <th></th></tr></thead>
           <tbody>
             <tr>
               <td>性别</td>
               <td><input type="radio"><span>男</span></td>
               <td><input type="radio"><span>女</span></td>
               <td><input type="radio"><span>保密</span></td>
             </tr>
             <tr>
               <td>年龄</td>
               <td><input type="number" value="22"></td>
             </tr>
             <tr>
               <td>个人简介</td>
               <td><input type="text" placeholder="填写你的个人简介"></td>
             </tr>
           </tbody>
         </table>
       </el-tab-pane>
       <el-tab-pane>
         <span slot=label><i class="el-icon-setting"></i> 账号管理</span>
         <span>删除账号</span>
       </el-tab-pane>
       <button type="submit">保存</button>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import MyHeader from '../../../common/header/header'
export default {
  name: 'Info',
  components: {
    MyHeader
  },
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
.info{
  .wrapper{
    -webkit-display:flex;
    display:flex;
    -webkit-justify-content:center;
    justify-content:center;
    margin-top: 50px;
    .tabs{
      width:600px;
      .tab{
        table{
          width: 100%;
          thead{
            tr{
              border: none;
            }
            .setting-head{
              width: 125px;
            }
            th{
              text-align: left;
              padding:0;
            }
          }
          .base{
            tr{
              display: table-row;
              vertical-align: inherit;
              border-color: inherit;
              border-bottom: 1px solid #f0f0f0;
              td{
                padding: 20px 0;
                font-size: 15px;
                color: #969696;
                input{
                  padding: 5px 10px;
                  font-size: 15px;
                  border: 1px solid #c8c8c8;
                  border-radius: 4px;
                  background-color: hsla(0,0%,71%,.1);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

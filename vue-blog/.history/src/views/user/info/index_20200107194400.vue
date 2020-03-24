<template>
  <div class="info">
    <my-header></my-header>
    <div class="wrapper">
      <el-tabs class="tabs" :tab-position="tabPosition">
       <el-tab-pane class="tab">
         <span slot="label"><i class="el-icon-notebook-2"></i> 基础设置</span>
         <table>
            <thead><tr><th class="setting-head responsive-head"></th> <th></th></tr></thead>
            <tbody class="base">
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
         <input type="submit" class="setting-save" value="保存" />
       </el-tab-pane>
       <el-tab-pane class="tab">
         <span slot="label"><i class="el-icon-user"></i> 个人资料</span>
         <table>
           <thead><tr><th class="setting-head responsive-head"></th> <th></th></tr></thead>
           <tbody class="information">
             <tr>
               <td class="setting-title">性别</td>
               <td class="top-line">
                 <input type="radio"><span>男</span>
                 <input type="radio"><span>女</span>
                 <input type="radio"><span>保密</span>
                </td>
             </tr>
             <tr>
               <td class="setting-title">年龄</td>
               <td><input type="number" value="22"></td>
             </tr>
             <tr>
               <td class="setting-title">个人简介</td>
               <td>
                 <form><textarea placeholder="填写你的个人简介"></textarea></form>
               </td>
             </tr>
           </tbody>
         </table>
         <input type="submit" class="setting-save" value="保存" />
       </el-tab-pane>
       <el-tab-pane class="tab">
         <span slot=label><i class="el-icon-setting"></i> 账号管理</span>
         <el-collapse>
            <el-collapse-item title="删除账号">
              <div class="explain">删除帐号是不可逆的操作，删除后将无法恢复。</div>
              <el-button type="danger" size="small" round>确认删除</el-button>
              <el-button type="success" size="small" round>保留账号</el-button>
            </el-collapse-item>
         </el-collapse>
       </el-tab-pane>
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
          .information{
            tr{
              border-bottom: 1px solid #f0f0f0;
              .setting-title{
                font-size: 15px;
                color: #969696;
              }
              td{
                padding: 20px 0;
                textarea{
                  width: 90%;
                  height: 100px;
                  margin-bottom: 10px;
                  padding: 8px 10px;
                  font-size: 15px;
                  border: 1px solid #c8c8c8;
                  border-radius: 4px;
                  background-color: hsla(0,0%,71%,.1);
                  display: block;
                  resize: none;
                  outline-style: none;
                }
                input{
                  padding: 5px 10px;
                  font-size: 15px;
                  border: 1px solid #c8c8c8;
                  border-radius: 4px;
                  background-color: hsla(0,0%,71%,.1);
                }
              }
              .top-line{
                input[type=radio]{
                  margin: 4px 0 0;
                  line-height: normal;
                }
                span{
                  margin: 0 20px 0 6px;
                  font-size: 15px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
        .setting-save{
          outline:none;
          width: 100px;
          height: 36px;
          margin: 30px 0 0px;
          background: #3db922;
          border-radius: 20px;
          border: none;
          color: #f0f0f0;
          font-size: 16px;
        }
        .explain{
          padding: 
        }
      }
    }
  }
}
</style>

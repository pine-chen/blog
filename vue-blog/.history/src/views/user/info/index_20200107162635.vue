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
       <el-tab-pane>
         <span slot=label><i class="el-icon-setting"></i> 账号管理</span>
         <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
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
      }
    }
  }
}
</style>

<template>
    <div class="backTop">
        <el-backtop>
        <div class="content">
              UP
            </div>
          </el-backtop>
    </div>
</template>

<script>
export default {
  name: 'backTop'
}
</script>

<style lang="scss" scoped>
.content{
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
}
</style>

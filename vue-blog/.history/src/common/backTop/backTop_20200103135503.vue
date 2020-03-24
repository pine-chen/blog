<template>
  <div class="backTop">
    <div class="back-top" @click="goTop" v-show="backTopShow">
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoTop',
  props: {
    showPx: Number,
    backTopShow: Boolean,
    // backTopAllow: Boolean,
    backSeconds: Number
  },
  methods: {
    goTop () {
      // console.log('hi')
      this.$emit('goTop')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .backTop
    z-index 1000
    .back-top
      position fixed
      bottom 100px
      right 30px
      // border 1px solid #999
      text-align center
      color #999
      .top-icon
        font-size 30px
    .back-top :hover
      color #009a61
</style>

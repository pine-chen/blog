<template>
  <div class="backTop">
    <div class="back-top" @click="backTop" v-show="backTopShow">
        UP
    </div>
  </div>
</template>

<script>
export default {
  name: 'backTop',
  props: {
    showPx: Number,
    backTopShow: Boolean,
    // backTopAllow: Boolean,
    backSeconds: Number
  },
  methods: {
    backTop () {
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

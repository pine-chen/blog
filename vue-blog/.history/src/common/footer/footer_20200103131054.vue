<template>
  <div class="m-footer">
    <div class="content">
      <p>个人学习博客</p>
      <p>仅个人学习使用</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      runningTime: 0
    }
  },
  created () {
    this.running()
  },
  methods: {
    running () {
      let startTime = new Date('2019/05/12 00:00:00')
      setInterval(() => {
        let time = new Date() - startTime
        let day = parseInt(time / 1000 / 60 / 60 / 24, 10)
        let hour = parseInt(time / 1000 / 60 / 60 % 24, 10)
        let minute = parseInt(time / 1000 / 60 % 60, 10)
        let second = parseInt(time / 1000 % 60, 10)
        this.runningTime = `${day}天${hour}小时${minute}分${second}秒`
      }, 1000)
    }
  }
}
</script>

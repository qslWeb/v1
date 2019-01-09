<template>

  <div>

    <mt-cell title="默认">
      <mt-progress></mt-progress>
    </mt-cell>

    <mt-cell title="设置 value">
      <mt-progress :value="20"></mt-progress>
    </mt-cell>

   <!-- value	进度条的值（%）
   barHeight	进度条的线宽（像素）			1 -->

    <mt-cell title="左右文字">
      <mt-progress :value="40">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </mt-progress>
    </mt-cell>

    <mt-cell title="定义线宽">
      <mt-progress :value="60" :bar-height="5"></mt-progress>
    </mt-cell>

    <!--
      上面将完整的例子进行分解，以便理解各属性
      本页面上的样式非效果强制样式，是为了本页面上展示所需要。

      start	进度条左侧 DOM
       end	进度条右侧 DOM
      -->

    <div class="page-progress-wrapper">

      <mt-button size="large" type="primary" @click.native="uploadFile">上传文件</mt-button>

      <mt-progress :value="value" v-if="progressVisible" transition="progress-fade">

        <div slot="end">{{ value }}%</div>

      </mt-progress>

    </div>

  </div>

</template>

<style>

     /* 为了在列表元素中显示进度条的外部样式 */
     .mt-progress {width: 100%; position: absolute;top: 5px;}
     .page-progress-wrapper{padding: 0 10px;margin-top: 50px; }
     .page-progress-wrapper  .mt-progress { position: relative; }

       /* 进度条显示与隐藏动画 */
       .page-progress-wrapper .progress-fade-transition {transition: opacity .3s;}
       .page-progress-wrapper .progress-fade-enter,
       .page-progress-wrapper .progress-fade-leave {opacity: 0;}

       /* 进度条自身的定位 */
      .mint-cell-value {flex: 2.5;position: relative;top: -20px;}

</style>

<script>

export default {
  data () {
    return {
      progressVisible: false,
      value: 0,
      uploading: false,
      timer: null
    }
  },

  watch: {
    value (val) { // 当数值大于或等100的时个执行数值初始化，信息提示，关闭自增加计时器
      if (val >= 100) {
        this.uploading = false
        this.progressVisible = false
        setTimeout(() => this.$toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200)
        clearTimeout(this.timer)
      }
    }
  },

  methods: {
    uploadFile () {
      if (!this.uploading) {
        // 从0开始
        this.value = 0
        // 显示进度条
        this.progressVisible = true
        // 上传中的状态
        this.uploading = true
        // 每间隔10毫秒自加1
        this.timer = setInterval(() => this.value++, 10)
      }
    }
  }
}
</script>

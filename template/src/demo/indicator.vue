<template>
  <div>

      <mt-button @click.native="openIndicator" size="large">点击弹出 Indicator</mt-button>
      <mt-button @click.native="openIndicatorWithSpinner" size="large">可配置 spinner</mt-button>
      <mt-button @click.native="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</mt-button>

  </div>
</template>

<script>

export default {
  methods: {
    openIndicator () {
      this.$indicator.open()
      setTimeout(() => this.$indicator.close(), 2000)
    },

    openIndicatorWithSpinner () {
      // spinnerType 加载图标的类型 有以下几种可选类型
      // 'snake'
      // 'fading-circle'
      // 'double-bounce'
      // 'triple-bounce'
      this.$indicator.open({ spinnerType: 'fading-circle' })
      setTimeout(() => this.$indicator.close(), 2000)
    },

    openIndicatorWithText () {
      this.$indicator.open('加载中...')
      setTimeout(() => this.$indicator.close(), 2000)
    }
  },

  beforeDestroy () {
    // 组件销毁前关闭弹层
    this.$indicator.close()
  }
}
</script>

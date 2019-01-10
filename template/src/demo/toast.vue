<template>
  <div class="page-toast">

    <div class="page-toast-wrapper">
      <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
      <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
      <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
    </div>

<!--
message	文本内容	String
position	Toast 的位置	String	'top' 'bottom' 'middle'	默认'middle'
duration	持续时间（毫秒），若为 -1 则不会自动关闭			默认3000
className	Toast 的类名。可以为其添加样式
iconClass	icon 图标的类名
-->

  </div>
</template>

<style scope>
 .page-toast-wrapper {
        padding: 0 20px;
        position: absolute 50% 0 0 0;
        width: 100%;
        transform: translateY(50%);
   }
  .page-toast-wrapper button:not(:last-child) {
          margin-bottom: 20px;
        }

</style>

<script type="text/babel">

export default {
  methods: {
    openToast () {
      // 默认自带关闭时间
      // this.$toast('提示信息')

      // 设置关闭时间
      let vs = this.$toast('提示信息#######')
      setTimeout(() => {
        vs.close()
      }, 1000)
    },

    openToastWithIcon () {
      // 若需在文字上方显示一个 icon 图标，可以将图标的类名作为 iconClass 的值传给 Toast（图标需自行准备）
      this.$toast({
        message: '操作成功',
        iconClass: 'mintui mintui-success',
        duration: 1000
      })
    },

    openBottomToast () {
      this.$toast({
        message: '提示信息',
        position: 'bottom'
      })
    }
  }
}
</script>

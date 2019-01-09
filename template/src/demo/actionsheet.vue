<template>
  <div>

      <!-- 带取消按钮 -->
      <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>
      <!-- 不带取消按钮 -->
      <mt-button @click.native="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</mt-button>

      <!-- 上面是触发的方法，下面是对应的弹层组件，若无弹层组件，触发不会有弹层显示 -->
     <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

     <!-- 根据触发的函数对应相关的弹层组件 -->
     <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>

        <!-- actions  菜单项数组   Array -->

        <!-- cancelText   取消按钮的文本。若设为空字符串，则不显示取消按钮 默认'取消'-->

       <!-- closeOnClickModal  是否可以通过点击 modal(弹层的背景层灰透明底版) 层来关闭 actionsheet 默认 true，用法与actions一样 -->
  </div>
</template>

<script >
export default {
  data () {
    return {// 需要初始化数值
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: []
    }
  },

  methods: {// 调用的方法
    takePhoto () {
      console.log('taking photo')
    },

    openAlbum () {
      console.log('opening album')
    },

    goBack () {
      history.go(-1)
    }
  },

  mounted () {
    // 防止this指向错误
    var that = this
    // 设置显示列表主题名与绑定操作事情
    that.actions = [{
      name: '拍照',
      method: that.takePhoto
    },

    {
      name: '从相册中选择',
      method: that.openAlbum
    }]

    that.actions2 = [{
      name: '确定'
    },
    {
      name: '返回上一步',
      method: that.goBack
    }]
  }
}
</script>

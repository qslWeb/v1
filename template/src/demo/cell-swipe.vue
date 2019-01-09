<template>
  <div>

 <p>左拉</p>

    <mt-cell-swipe
      v-for="(n,index) in 3"
      icon="back"
      :key="index"
      to="/"
      label="小城故事多"
      is-link
      :right="rightButtons"
      title="swipe me">
    </mt-cell-swipe>

      <p>右拉</p>

      <!-- <mt-cell-swipe
      v-for="(n,indexs) in 3"
      :key="indexs"
      :left="rightButtons"
      title="**标题**">
    </mt-cell-swipe> -->

  </div>
</template>

<script>
export default {
  // 设置按钮
  // content 可以是 HTML 或者纯文本。
  created () {
    this.rightButtons = [
      {
        content: '取消',
        style: { background: 'lightgray', color: '#fff' },
        // 若无其它需要可以不写
        handler: () => this.leftButtonHandler()
      },
      {// 若是需要删除则需要将删除的方法写在methods内
        content: '删除',
        style: { background: 'red', color: '#fff' },
        handler: () => this.deteleList()
      }
    ]
  },

  methods: {
    // 触发的第一个
    leftButtonHandler (evt) {
      console.log(123)
    },
    // 触发删除事件的方法案例
    deteleList () {
      this.$messagebox('确定删除吗').then((value) => {
        if (value) {
          console.log(value)
        }
      })
    }
  }
}
</script>

<template>
  <div>

    <div  ref="wrapper" :style="{ height: wrapperHeight + 'px' }">

      <ul

      v-infinite-scroll="loadMore"

      infinite-scroll-disabled="loading"

      infinite-scroll-distance="50"

      infinite-scroll-listen-for-event="uuu">

        <li v-for="(item,index) in list"  :key="index">{{ item }}</li>

      </ul>

       <!-- v-infinite-scroll 执行加载的方法 -->

      <!-- infinite-scroll-disabled  若为真，则无限滚动不会被触发 默认 false -->

      <!-- infinite-scroll-distance 滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值 -->

      <!-- infinite-scroll-immediate-check 若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。 默认 true-->

      <!-- infinite-scroll-listen-for-event 一个 event，被执行时会立即检查是否需要执行加载方法。(没有查到怎样使用) -->

     <!-- 底部加载状态图标 ,本案例-->
      <p v-show="loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>

    </div>

  </div>
</template>

<script>

export default {
  // 引用自定义指令
  directives: this.$infiniteScroll,
  data () {
    return {
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0
    }
  },

  methods: {
    // 加载固有的方法
    loadMore () {
      // 加载状态显示值
      this.loading = true
      setTimeout(() => {
        // 获取最后一个值
        let last = this.list[this.list.length - 1]
        // 每次追加10个数
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        // 数据加载完成后关闭加载状态
        this.loading = false
      }, 2500)
    },
    uuu (m) {
      alert('123')
    }
  },

  mounted () {
    // 获取显示区域到底部的高度
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    // document.documentElement.clientHeight  页面高度
    // this.$refs.wrapper.getBoundingClientRect().top 显示区域块与顶部的距离
    for (let i = 1; i <= 20; i++) { // 页面显示初始值
      this.list.push(i)
    }
  }
}
</script>

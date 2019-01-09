<template>

<div>
  <!-- 案例一 -->
  <!-- <div class="page-search">
    <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
  </div> -->

<!--
value	搜索结果绑定值
cancel-text	取消按钮文字			默认取消
placeholder	搜索框占位内容			默认搜索
result	搜索结果列表
autofocus	自动聚焦	默认false
show	始终显示搜索列表 	默认false
-->

<!-- 案例二 -->
<!-- <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> -->

<!-- 案例三 异步-->
<!-- <mt-search v-model="value" :result.sync="filterResult"></mt-search> -->

<!-- 案例四 自定义结果 -->
<mt-search v-model="value">
  <mt-cell
    v-for="(item,index) in filterResult"
    :key="index"
    :title="item"
    :value="item">
  </mt-cell>
</mt-search>

</div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },

  computed: {
    filterResult () { // 过滤查找
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  }
}
</script>

<style>
  .page-search {height: 100%;}
</style>

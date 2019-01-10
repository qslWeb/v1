<template>
  <div>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <div>
      <mt-cell class="page-part" title="当前选中">\{{ selected }}</mt-cell>
    </div>

    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="1">
        <mt-cell v-for="(n,index1) in 10" :title="'内容 ' + n" :key="index1"/>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <mt-cell v-for="(n,index2) in 4" :title="'测试 ' + n" :key="index2"/>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,index3) in 6" :title="'选项 ' + n" :key="index3"/>
      </mt-tab-container-item>

    </mt-tab-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

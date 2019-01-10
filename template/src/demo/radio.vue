<template>
  <div class="page-radio">

    <!--
      title="" 是组标题，显示在列表上方
      options	选择项
      value	绑定值
      align	单选框对其位置	left（默认), right
      -->

    <mt-radio
      class="page-part"
      title="单选框列表"
      v-model="value1"
      :options="options1" />
    <div>
      <mt-cell title="选中的项">\{{ value1 }}</mt-cell>
    </div>

    <mt-radio
      class="page-part"
      title="第二个单选框列表"
      v-model="value2"
      :options="options2" />
    <div>
      <mt-cell title="选中的项">\{{ value2 }}</mt-cell>
    </div>

    <mt-radio
      align="right"
      class="page-part"
      title="右对齐"
      v-model="value3"
      :options="options3" />
  </div>
</template>

<script>
export default {

  data () {
    return {
      value1: '',
      value2: '值A',
      value3: ''
    }
  },

  created () {
    this.options1 = ['选项A', '选项B', '选项C']
    this.options3 = ['选项A', '选项B', '选项C']
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ]
  }
}
</script>

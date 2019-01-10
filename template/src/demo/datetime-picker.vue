<template>
  <div>

      <!-- 此处为按钮触发示例，实际操作与按钮无关，只与触发事件有关 -->
      <mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>

      <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>

      <mt-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</mt-button>

      <mt-button @click.native="open('picker4')" size="large">自定义模板</mt-button>

      <mt-button @click.native="open('picker5')" size="large">设定初始值</mt-button>

    <!-- 是picker1的事件弹层 -->

    <!-- 1.ref 相当于id -->
    <!-- 2.v-model是给组件双向绑定值 -->
    <!-- 3.closeOnClickModal是否点弹层以外空白区域关闭弹层，false则不关闭，true则关闭，默认为true -->
    <!-- 4.@visible-change是自定义指令发生变化时触发函数 -->
    <!-- 5.@confirm是自定义指令当点确认时候触发函数 -->
    <!-- 6.type默认datetime: 日期时间选择器，可选择年、月、日、时、分，value 值为一个 Date 对象 -->
    <mt-datetime-picker

      ref="picker1"

      v-model="value"

      :closeOnClickModal="false"

      @visible-change="handleVisibleChange"

      @confirm="handleChange">

    </mt-datetime-picker>

    <!-- 是picker2的事件弹层 -->
    <!-- date: 日期选择器，可选择年、月、日，value 值为一个 Date 对象 -->
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="value2"
      @confirm="handleChange">
    </mt-datetime-picker>

    <!-- 是picker3的事件弹层 -->
    <!-- time: 时间选择器，可选择时、分，value 值为一个格式为 HH:mm 的字符串 -->
    <mt-datetime-picker
      ref="picker3"
      type="time"
      v-model="value3"
      @confirm="handleChange">
    </mt-datetime-picker>

    <!-- 是picker4的事件弹层 -->
    <!-- 自定义模板 -->
    <mt-datetime-picker
      ref="picker4"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>

    <!-- 是picker5的事件弹层 -->

    <mt-datetime-picker
      ref="picker5"
      type="time"
      cancelText="返回"
      v-model="value5"
      @visible-change="handleVisibleChange5"
      @confirm="handleChange">
    </mt-datetime-picker>

   <div style="margin-top:30px">\{{visible5}}</div>

<!--
cancelText 取消按钮文本	String	'取消'
confirmText 确定按钮文本	String	'确定'
startDate 日期的最小可选值	Date	十年前的 1 月 1 日
endDate 日期的最大可选值	Date	十年后的 12 月 31 日
startHour 小时的最小可选值	Number	0
endHour 小时的最大可选值	Number	23
yearFormat 年份模板	String	'{value}'
monthFormat	月份模板	String	'{value}'
dateFormat	日期模板	String	'{value}'
hourFormat	小时模板	String	'{value}'
minuteFormat 分钟模板	String	'{value}' -->

  </div>
</template>

<script>

export default {
  data () {
    return {
      // 组件双向绑定值初始化 与
      // 弹层状态获取值的初始化（一般初始状态都为false,改为true并不影响弹层的显示状态）
      value: null,
      value2: null,
      value3: null,
      value4: null,
      value5: '04:32',
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false
    }
  },

  methods: {

    // 展示弹层的方法  open 和 close，分别用于打开和关闭
    open (picker) {
      this.$refs[picker].open()
    },

    // 确定后的操作事件
    handleChange (value) {
      // 引用toast提示功能
      this.$toast({
        message: '已选择 ' + value.toString(),
        position: 'bottom'
      })
    },

    // 弹层显示状态的反馈
    handleVisibleChange (isVisible) {
      console.log('弹窗是否展示:', isVisible)
    },

    // 获取第五个弹层状态,用来说明data内的visible只是用来获取弹层状态
    handleVisibleChange5 (isVisible) {
      this.visible5 = isVisible
    }
  }
}
</script>

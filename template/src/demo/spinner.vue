<template>
  <div class="page-spinner">

<!--

type	显示类型，提供四种风格，可以指定名称或者序号
snake
double-bounce
triple-bounce
fading-circle	 默认snake

color	颜色，接受 hex、rgb 等颜色值	默认#ccc

size	尺寸，单位 px		默认 28

 -->

    <!-- 或者接受传入类型的序号 -->
     <!--
     <mt-spinner :type="0"></mt-spinner>
     <mt-spinner :type="1"></mt-spinner>
     <mt-spinner :type="2"></mt-spinner>
     <mt-spinner :type="3"></mt-spinner>
     -->

    <mt-cell title="snake">
      <mt-spinner color="#26a2ff" type="snake" :size="16"></mt-spinner>
    </mt-cell>

    <mt-cell title="double-bounce">
      <mt-spinner color="#26a2ff" type="double-bounce"></mt-spinner>
    </mt-cell>

    <mt-cell title="triple-bounce">
      <mt-spinner color="#26a2ff" type="triple-bounce"></mt-spinner>
    </mt-cell>

    <mt-cell title="fading-circle">
      <mt-spinner color="#26a2ff" type="fading-circle"></mt-spinner>
    </mt-cell>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

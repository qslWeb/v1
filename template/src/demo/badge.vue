<template>
  <div>

       <!-- type显示类型  primary, error, success, warning    默认primary -->
       <!-- color自定义颜色值 -->
       <!-- size尺寸 normal, large, small 默认normal -->

        <!-- 大 -->

        <mt-badge type="primary" size="large">30</mt-badge>
        <mt-badge type="error" size="large">10</mt-badge>
        <mt-badge type="success" size="large">10</mt-badge>
        <mt-badge type="warning" size="large">10</mt-badge>

        <!-- 中 -->

        <mt-badge type="primary">30</mt-badge>
        <mt-badge type="error">10</mt-badge>
        <mt-badge type="success">10</mt-badge>
        <mt-badge type="warning">10</mt-badge>

      <!-- 小 -->

        <mt-badge type="primary" size="small">30</mt-badge>
        <mt-badge type="error" size="small">10</mt-badge>
        <mt-badge type="success" size="small">10</mt-badge>
        <mt-badge type="warning" size="small">10</mt-badge>

      <!-- 自定义 -->

        <mt-badge size="small" color="#888">自定义颜色</mt-badge>

        <!-- 示例 -->

      <mt-cell title="徽章">
        <span style="margin-right: 5px;">未读消息</span>
        <mt-badge type="error" size="small">10</mt-badge>
      </mt-cell>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>

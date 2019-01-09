<template>

    <div style="margin-bottom:30px">

    <!-- 案例一 -->
    <mt-cell title="标题文字"></mt-cell>

    <!-- 案例二 -->
    <mt-cell title="标题文字" value="说明文字"></mt-cell>

    <!-- 案例三 -->
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>

   <!-- 案例四 -->
    <mt-cell title="标题文字" icon="more">
      <span>icon 是图片</span>
      <!-- <img slot="icon" src="../assets/100x100.png" width="24" height="24"> -->
    </mt-cell>

   <!-- 案例五 -->
    <mt-cell title="标题文字" is-link value="带链接"></mt-cell>

   <!-- 案例六 -->
    <mt-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>

   <!-- 案例七 -->
    <mt-cell title="标题文字">
      <mt-button size="small" type="primary" icon="back">按钮</mt-button>
    </mt-cell>

   <!-- 案例八 -->
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>

    <!-- 案例九 -->
    <mt-cell title="原生跳转" label="跳转到 https://mint-ui.github.io" is-link to="https://mint-ui.github.io"></mt-cell>

    <!-- 案例十 -->
    <mt-cell title="路由跳转" label="跳转到 /#/toast" is-link :to="{ name: 'Toast' }"></mt-cell>

  </div>

</template>

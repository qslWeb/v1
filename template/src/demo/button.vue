<template>
  <div>

    <!-- icon图标 more, back -->
    <!-- size尺寸 small, normal, large,默认 normal -->
    <!-- type按钮显示样式 default, primary, danger,默认default -->

    <div style="margin-bottom:30px;margin-top:40px">
       <!-- 大按钮 -->
      <mt-button size="large">default</mt-button>
      <mt-button size="large" type="primary">primary</mt-button>
      <mt-button size="large" type="danger">danger</mt-button>

    </div>

    <div style="margin-bottom:30px">
      <!-- 正常按钮 -->
      <mt-button>default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </div>

     <div style="margin-bottom:30px">
       <!-- 小按钮 -->
      <mt-button size="small">default</mt-button>
      <mt-button size="small" type="primary">primary</mt-button>
      <mt-button size="small" type="danger">danger</mt-button>
    </div>

      <div style="margin-bottom:30px">
        <!-- 禁用按钮  -->
      <mt-button disabled size="large">default</mt-button>
      <mt-button disabled size="large" type="primary">primary</mt-button>
      <mt-button disabled size="large" type="danger">danger</mt-button>
    </div>

     <!-- plain幽灵按钮,默认false（边框线按钮无背景色）-->
    <div style="margin-bottom:30px">
      <mt-button plain size="large">default</mt-button>
      <mt-button plain size="large" type="primary">primary</mt-button>
      <mt-button plain size="large" type="danger">danger</mt-button>
    </div>

    <div style="margin-bottom:30px">
      <mt-button>
        <!-- <img src="../assets/100x100.png" height="20" width="20" slot="icon"> -->
        带自定义图标
      </mt-button>
    </div>

    <div style="margin-bottom:30px">
    <mt-button icon="back"></mt-button>
    <mt-button icon="more"></mt-button>
    </div>

  </div>
</template>

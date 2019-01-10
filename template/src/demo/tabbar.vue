<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>

      <mt-tab-container class="page-tabbar-container" v-model="selected">

        <mt-tab-container-item id="外卖">
          <mt-cell v-for="(n,index) in 10" :title="'餐厅 ' + n" :key="index"/>
        </mt-tab-container-item>

        <mt-tab-container-item id="订单">
          <mt-cell v-for="(n,index1) in 5" :title="'订单 ' + n" :key="index1"/>
        </mt-tab-container-item>

        <mt-tab-container-item id="发现">
          <mt-cell v-for="(n,index2) in 7" :title="'发现 ' + n" :key="index2"/>
        </mt-tab-container-item>

        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="(n,index3) in 6" :title="'我的 ' + n" :key="index3"/>
          </div>

          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>

        </mt-tab-container-item>

      </mt-tab-container>
    </div>

    <!--
    fixed	固定在页面底部	Boolean		false
    value	返回当前选中的 tab-item 的 id	*

    Slot中的id	选中后的返回值
     -->

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '外卖'
    }
  }
}
</script>

<style scope>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>

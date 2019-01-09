<template>
  <div>

    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>
    </div>

      <!--
      value	当前激活的 id	*
      swipeable	显示滑动效果	Boolean		false
       -->

    <div class="page-tab-container">

      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>

        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="(n,index1) in 10" title="tab-container 1" :key="index1"></mt-cell>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="(n,index2) in 5" title="tab-container 2" :key="index2"></mt-cell>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="(n,index3) in 7" title="tab-container 3" :key="index3"></mt-cell>
        </mt-tab-container-item>

      </mt-tab-container>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'tab-container1'
    }
  }
}
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>

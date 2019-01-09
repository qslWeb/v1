<template>
  <div>

    <mt-header fixed title="固定在顶部"></mt-header>

      <div style="margin-top:60px">
      <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
     </div>

     <div style="margin-top:20px">
      <mt-header title="多个按钮">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button @click="handleClose">关闭</mt-button>
        <mt-button icon="more" slot="right" @click="handleClose"></mt-button>
      </mt-header>
   </div>

      <div style="margin-top:20px">
      <mt-header title="左侧仅文字">
        <router-link to="/" slot="left">
            <mt-button>返回</mt-button>
          </router-link>
      </mt-header>
       </div>

    <div style="margin-top:20px">
      <mt-header title="右侧仅文字">
        <router-link to="/" slot="right">
          <mt-button>分享</mt-button>
        </router-link>
      </mt-header>
     </div>

     <div style="margin-top:20px">
      <mt-header title="仅图标">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    handleClose () {
      alert(' 关闭 ')
    }
  }
}
</script>

<template>
  <div>

      <mt-button @click.native="openAlert" size="large">打开 alert 提示框</mt-button>
      <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
      <mt-button @click.native="openPrompt" size="large">打开 prompt 提示框</mt-button>

  </div>
</template>

<script>

export default {
  methods: {
    openAlert () {
      this.$messagebox.alert('操作成功!', '提示')
    },

    openConfirm () {
      this.$messagebox.confirm('确定执行此操作?', '提示').then(action => {
        console.log(action)
      })
    },

    openPrompt () {
      this.$messagebox.prompt(' ', '请输入姓名').then(({ value, action }) => {
        if (value) {
          this.$messagebox.alert(`你的名字是 ${value}`, '输入成功')
        }
      })
    }
  }
}
</script>

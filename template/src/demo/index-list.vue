<template>
  <div>

    <div style="height:800px">
     <p ></p>
    </div>

    <div style="width: 100%;border-top: 1px solid #ddd;">

      <!-- :show-indicator="false"是点击后的弹层提示，若改为false则不显示 ,默认为true -->
      <!-- height测尽量设置或不变，若页面出现不正确的或不稳定的情况下才设置高度 -->
      <!-- height设置高度有利于右侧锚点的显示,最高好度与完全展示锚点目录的高度相同 -->
      <mt-index-list :show-indicator="false" :height="486">
        <mt-index-section v-for="(item,int) in alphabet" :index="item.initial" :key="int">
          <mt-cell v-for="(cell,ints) in item.cells" :title="cell" :key="ints"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>

  </div>
</template>

<script type="text/babel">
// 设定数据源，举例使用

const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane']

export default {
  data () {
    return {
      alphabet: []
    }
  },

  created () { // 将字符串分割成数组，并追加到alphabet中
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
      let cells = NAMES.filter(name => name[0] === initial)
      this.alphabet.push({
        initial,
        cells
      })
    })
  }
}
</script>

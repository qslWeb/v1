 // -----创建自动导注册全局组件--------
 import Vue from 'vue'
 import upperFirst from 'lodash/upperFirst'
 import camelCase from 'lodash/camelCase'
 
   const requireComponent = require.context(
     // 在当前目录中查找文件
     '@/components',
     // 不要查看子目录
     false,
     // 仅包含“_icbc-”前缀.vue文件
     /_icbc-[\w-]+\.vue$/
   )
   
   // 对于每个匹配的文件名...
   requireComponent.keys().forEach((fileName) => {
     // 获取组件配置
     const componentConfig = requireComponent(fileName)
     // 获取组件名称的PascalCase版本
     const componentName = upperFirst(
       camelCase(
         fileName
           // 从头开始删除“./_”
           .replace(/^\.\/_/, '')
            // 从末尾删除文件扩展名
           .replace(/\.\w+$/, '')
       )
     )
     // 全局注册组件
     Vue.component(componentName, componentConfig.default || componentConfig)
     console.log(componentName)
   })
import  Mock from  'mockjs'


Mock.mock(/getNewList/,{//这是请求的api接口

    'list|5':[//表示同格式生成5份
      {
        name:"@ctitle(2,10)",//随机生成名字2到10个字符，也可以不设定
        url:'@url'    //随机生成路径
      }
      ]
    
    });


// 一般性数据生产模型
 Mock.mock(/order/,{

  Datas:[]
      
      
      
})    
let Mock = require('mockjs')
let data = Mock.mock({
   tabs:['推荐','女装','鞋包','手机','食品','母婴','男装','百货','内衣','电器','家纺','水果','家具','美妆','家装','运动','车品','医药','电脑','海淘','饰品','玩乐'],
   navArea:[
      {
         title:"限时秒杀",
         imgsrc:"https://commimg.pddpic.com/oms_img_ng/2022-05-18/95565fe1-eb7c-4a66-aef1-e86a31f92a46.gif?imageView2/2/w/117/q/80"
      },{
         title:"断码清仓",
         imgsrc:"https://commimg.pddpic.com/oms_img_ng/2022-05-19/eada5bf9-0038-4124-93be-cf3945d30e9d.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"发现好货",
         imgsrc:"https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"多多果园",
         imgsrc:"https://img.pddpic.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"9块9特卖",
         imgsrc:"https://img.pddpic.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"多多爱消除",
         imgsrc:"https://img.pddpic.com/goods/2020-01-14/37fe68d866cb25a887beeb74699196b9.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"充值中心",
         imgsrc:"https://img.pddpic.com/goods/2020-01-14/0fab520471880b5728fb7150d77f5390.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"医药箱",
         imgsrc:"https://img.pddpic.com/goods/2020-02-26/f9e3069d2e461cd5f5eb7d77ffce9d9d.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"签到",
         imgsrc:"https://img.pddpic.com/goods/2020-02-24/1ac41ebf88457e29ac4f8b5a01e72f1d.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"多多赚大钱",
         imgsrc:"https://commimg.pddpic.com/oms_img_ng/2020-06-05/6709569b-84e6-4556-b82d-4c9f32840257.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"行家帮你选",
         imgsrc:"https://commimg.pddpic.com/oms_img_ng/2020-12-04/c1a20306-bdb3-42c5-b0bb-e4018ce9f4d6.png?imageView2/2/w/117/q/80/format/webp"
      },{
         title:"省钱月卡",
         imgsrc:"https://img.pddpic.com/goods/2020-01-14/54ece7ca8c54cd8925d631323659e42f.png?imageView2/2/w/117/q/80/format/webp"
      }
   ],
   "baiyi|4":[{
      "image":"@image('100x100','@color','#fff','@increment')",
      "price":"@integer(70,6000)"
   }]
})
Mock.mock('/get','get',data)
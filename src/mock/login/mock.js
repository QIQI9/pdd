let Mock = require('mockjs')

Mock.mock("/login","post",function(){
   return {
      message:"验证成功",
      token:"success",
      
   }
})



var Mock = require('mockjs')



export const User = Mock.mock({
  success: true,
  code: 1000,
  content: {
    id: Mock.Random.guid(), // 随机id
    name: Mock.Random.first(),
  }
})
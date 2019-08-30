import Mock from 'mockjs'; // 导入mockjs 模块
let Students = []; // 定义我们需要的数据
const COUNT = [1, 2, 3, 4, 5]; // 定义我们需要数量
for (let i = 1; i <= COUNT.length; i++) {
  Students.push(Mock.mock({ // 根据数据模板生成模拟数据。
    id: Mock.Random.increment(), // 随机id
    name: Mock.Random.cname(), // 随机姓名
    cardId: Mock.Random.id(), // 随机身份证号
    age: Mock.Random.natural(15,18) // 随机数字
  }));
}
export { // 导出列表数据
  Students
};
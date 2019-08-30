import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

import Api from 'Apis/Api.js'

import {
  Students
} from './Data/students'; // 导入Todos数据

import {
  User,
}  from './Data/user'; // 导入User数据
export default {
  /**
   * mock start
   */
  start() { // 初始化函数
    let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
    // 获取student列表
    mock.onGet(Api.student.list).reply(config => { //  config 指 前台传过来的值
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            success: true,
            content:Students // 返回状态为200，并且返回todos数据
          }]);
        }, 200);
      });
    });
    // 新增一条student
    mock.onPost(Api.student.list).reply(config => {
      Students.push({
        id: Mock.Random.guid(),
        title: 'newList',
        isDelete: false,
        locked: false,
        record: []
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200]);
        }, 200);
      });
    });

   
    // Mock.mock(Api.user.login, 'post', User)

  }
};
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

import { USER_API } from 'Apis/Api.js'

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
    mock.onGet('/student/list').reply(config => { //  config 指 前台传过来的值
      let mockStudent = Students.map(student => { // 重组 Todos数组，变成我们想要的数据
        return {
          id: student.id, 
          title: student.title,
          count: student.record.filter((data) => {
            if (data.checked === false) return true;
            return false;
          }).length, // 过滤到record里面 ‘checked’ 为true的数据，因为它们已经被完成了
          locked: student.locked,
          isDelete: student.isDelete
        };
      }).filter(student => {
        if (student.isDelete === true) return false; // 过滤掉 ‘isDelete’为true，因为已经被删除了。
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            students: mockStudent // 返回状态为200，并且返回todos数据
          }]);
        }, 200);
      });
    });
    // 新增一条student
    mock.onPost('/student/addTodo').reply(config => {
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

    // 登录 
     mock.onPost(USER_API.login).reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            ...User
            // 返回状态为200，并且返回user数据
          }]);
        }, 200);
      });
    });
  }
};
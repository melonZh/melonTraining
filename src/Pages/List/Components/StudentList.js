import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { 
  Table,
  Button,
  Popconfirm,
} from 'antd'





const StudentList = props => {
  const {
    dataSource,
    onClickView,
    onClickUpdate,
    onClickRemove,
  } = props
  console.log('dataSource', dataSource)
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '身份证号',
      dataIndex: 'cardId',
      key: 'address',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={onClickView}>查看</Button>
          <Button type="link" onClick={onClickUpdate}>编辑</Button>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={onClickRemove}
            okText="确认"
            cancelText="取消"
          >
            <Button type="link">删除</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];
  
  
 return (
  <Table
    columns={columns}
    dataSource={dataSource}
    rowKey="id"
    bordered
  />
 )
}


StudentList.prototype = {
  dataSource: PropTypes.array.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
  onClickView: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
}


export default StudentList
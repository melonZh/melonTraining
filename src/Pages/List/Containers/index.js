
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  Button,
} from 'antd';



// style

import Style from './index.less'

import StudentList from '../Components/StudentList'

import StudentFromModal from '../Components/StudentForm'

import {
  _ReadALL as readALLAction,
  _ReadOne as readOneAction,
  _Create as cteateAction,
  _Update as updateAction,
  _Delete as deleteAction,
} from 'Actions/student'



const List = (props) => {
  const { students: { list } } = props
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [formtype, setFormtype] = useState('view')



  const showModal = type => {
    setFormtype(type)
    setShowStudentForm(true)
  }

  const hideModal = () => {
    setFormtype('view')
    setShowStudentForm(false)
  }



  useEffect(() => {
    const { readALLAction } = props
    readALLAction().then(
      res => {
        console.log('res', res)
      }
    )
  }, [])
  
  const onFormSubmit = () => {

  }

  const onClickRemove = id => {

  }

  return (
    <div >
      <Button type="primary" onClick={() => showModal('create')} style={{ margin: 20 }}>
        新增
      </Button>
      {/* 列表  */}

      <StudentList
        dataSource={list}
        onClickUpdate={() => showModal('update')}
        onClickView={() => showModal('view')}
        onClickRemove={onClickRemove}
      />
      <StudentFromModal 
        visible={showStudentForm}
        onCancel={hideModal}
        onCreate={onFormSubmit}
      />

    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  readALLAction,
  readOneAction,
  cteateAction,
  updateAction,
  deleteAction,
}

const ListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)


export default ListPage
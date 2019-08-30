

import React from 'react';

import PropTypes from 'prop-types';

import {
  Form,
  Input,
  Button, 
  Modal,
} from 'antd';




const NormalStudentForm = (props) => {
  const { visible, onCancel, onCreate, form } = props;
  const { getFieldDecorator } = form;

  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <Form.Item label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the title of collection!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description')(<Input type="textarea" />)}
        </Form.Item>
        
      </Form>
    </Modal>
  );
    
    
}

const StudentForm = Form.create({ name: 'normal_student_form' })(NormalStudentForm);

StudentForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate:  PropTypes.func.isRequired,
}

export default StudentForm


import React from 'react';

import PropTypes from 'prop-types';

import {
  Form,
  Input,
  Button, 
} from 'antd';

import Style from './LoginForm.less'


const NormalLoginForm = (props) => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault()
    const { form, onSubmit } = props
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    });
  }


  return (
    <Form onSubmit={handleSubmit} className={Style.loginForm}>
      <Form.Item>
        {getFieldDecorator('userId', {
          rules: [{ required: true, message: '请输入用户名!' }],
        })(
          <Input placeholder="请输入用户名" />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入密码!' }],
        })(
          <Input
            type="password"
            placeholder="请输入密码"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={Style.loginFormButton}
        >
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, } from 'antd';
import './index.scss'
import logo from './imgs/wer.png'


export default function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // 1、获取用户的输入
    // 2、发起网络请求axios
  };
  return (
    <div className='login'>
      <div className='bg'>
        <header>
            <img src={logo} alt="123" />
            <h1>商品管理系统</h1>
          </header>
          <section>
            <h1>用户登录</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                /*
                  用户名/密码的合法性要求
                    1.必须输入
                    2.必须大于等于4位
                    3.必须小于等于12位
                    4.必须是英文、数字或下划线组成
                */ 
                rules={[
                  {
                    required: true,
                    message: '请输入您的用户名!',
                  },
                  {
                    max: 12,
                    message: '必须小于等于12位',
                  },
                  {
                    min: 4,
                    message: '必须大于等于4位',
                  },
                  {
                    pattern: /^\w+$/,
                    message: '必须是英文、数字或下划线组成',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}} />} 
                placeholder="用户名" />
                
              </Form.Item>
              
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入您的密码!',
                  },
                  // 自定义验证
                  (rule, value) =>{ 
                    console.log(rule,value);
                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}  />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                 登录
                </Button>
              </Form.Item>
            </Form>
          </section>
      </div>
    </div>
  )
}

import React from 'react'
import {useNavigate,Navigate} from 'react-router-dom'
import { connect } from 'react-redux';
import {createSaveUserInfoAction} from '../../redux/action_creators/login_action'
import {reqLogin} from '../../api/index'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, message} from 'antd';
import './index.scss'
import logo from '../../static/imgs/wer.png'


 function Login(props) {
  const navigate=useNavigate()
  const {isLogin} =props
  const onFinish = async(values) => {
    // 1、获取用户的输入
    console.log('Received values of form: ',values);
    // 2、发起网络请求axios
    const result=await reqLogin(values)
    console.log(result,123)
    const {code,msg,data} = result
    if(code===0){
      // 1.将服务器返回的user信息，还有token交由redux管理
      props.saveUserInfo(data)
      // 2.跳转到admin页面
      navigate('/admin/home',{
        replace:true
      })
      message.success('登录成功！')

    }else{
      // 弹出一个提示框
      message.warning(msg)
    }
  };
  if(isLogin){
    return <Navigate to={'/admin/home'}/>
  }

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
                  // (rule, value) =>{ 
                  //   console.log(rule,value);
                  // }
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

export default connect (
  state => ({isLogin:state.userInfo.isLogin}),
  {
    saveUserInfo:createSaveUserInfoAction
  }
)(Login)

import {useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import {reqCategoryList} from '../../api/index'
import {createDeleteUserInfoAction} from '../../redux/action_creators/login_action'
import {connect} from 'react-redux'
import jsCookie from 'js-cookie'
import { Layout } from 'antd';

import Header from './Header';
import './index.scss'


function Admin(props) {
  const {Footer, Sider, Content } = Layout;
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  const navigate=useNavigate()
  // 退出登录方法
  function logout(){
    props.deleteUserInfo()
  }


  // async function demo(){
  //   const result= await reqCategoryList()
  //   console.log(result);
  // }

  useEffect(()=>{
    console.log(props);
    // 判断用户是否登录，若未登录跳转Login页面
    if(!isLogin) navigate('/login',{replace:true})
   
  })
  const {user,isLogin}=props.userInfo
    return (
        <Layout className='admin'>
          <Sider className='sider' style={siderStyle}>Sider</Sider>
          <Layout >
            <Header />
            <Content  className='content'>
              <div className='content_view'>

              </div>
            </Content>
            <Footer className='footer'>推荐使用谷歌浏览器，获取最佳用户体验</Footer>
          </Layout>
        </Layout>
    )
}
// 如下代码中的所有key是控制容器组件传递给UI组件的key
// 如下代码中的所有value是控制容器组件传递给UI组件的value
export default  connect(
  state => ({userInfo:state.userInfo}),
  {
    deleteUserInfo:createDeleteUserInfoAction
  }
)(Admin)

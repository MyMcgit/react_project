import React from 'react'
import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {createDeleteUserInfoAction} from '../../../redux/action_creators/login_action'
import {Button, Modal} from 'antd'
import {FullscreenOutlined,FullscreenExitOutlined} from '@ant-design/icons'
// 引入全屏插件
import screenfull from 'screenfull'
// 引入day.js
import dayjs from 'dayjs'

import { reqweather } from '../../../api'
import './index.scss'
function Header(props) {
    const [isfull,setisfull] =  useState(screenfull.isFullscreen)
    const [time,settime] = useState(dayjs().format('YYYY年 MM月DD日 HH:mm:ss'))
    const [lives,setlives] = useState([])
    useEffect(()=>{
      // 获取天气预报(高德接口)
      reqweather().then((res)=>{setlives(res.lives[0])})
      // 给screenfull绑定监听
      screenfull.on('change', () => {
        setisfull(screenfull.isFullscreen)
      });
      // 给header组件加上定时器
      const timer= setInterval(() => {
        settime(dayjs().format('YYYY年 MM月DD日 HH:mm:ss'))
      }, 1000);
      return ()=>{
        clearInterval(timer)
      }
    },[isfull]
    )
  
    // 退出登录方法
    function logout(){
      confirm({
        content: <Button onClick={Modal.destroyAll}>退出需要重新登录</Button>,
        onOk() {
          props.deleteUserInfo()
        },
        cancelText:'取消',
        okText:'确定',
      });
      
    }
    function fullscreen(){
      // 切换全屏
      screenfull.toggle()
    }

    const {username} = props.userInfo.user
    const { confirm } = Modal;
  return (
    <header className='header'>
        <div className='header_top'>
        <Button size='small' onClick={fullscreen}>{isfull ?<FullscreenExitOutlined /> :<FullscreenOutlined /> }</Button>
            <span className='username'>欢迎，{username}</span>
            <Button type='link' className='logout' onClick={logout}>退出登录</Button>
        </div>
        <div className='header_bottom'>
            <div className='header_bottom_left'>柱状图</div>
            <div className='header_bottom_right'>
             {time}
             &nbsp;&nbsp;&nbsp;
            {lives.weather} &nbsp;&nbsp;&nbsp;{lives.temperature}℃
            </div>
        </div>
    </header>
  )
}
export default  connect(
  state => ({userInfo:state.userInfo}),
  {
    deleteUserInfo:createDeleteUserInfoAction
  }
)(Header)

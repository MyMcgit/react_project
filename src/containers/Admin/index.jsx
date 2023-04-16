import {useEffect} from 'react'
import {connect} from 'react-redux'
import {useNavigate } from 'react-router-dom';
import {createDeleteUserInfoAction} from '../../redux/action_creators/login_action'
function Admin(props) {
  const navigate=useNavigate()
  function logout(){
    props.deleteUserInfo()
  }
  useEffect(()=>{
    console.log(props);
    if(!isLogin){
      navigate('/login',{replace:true})
   }
  })
  const {user,token,isLogin}=props.userInfo
    return (
      <div>
        你的名字是{user.username}
        <button onClick={logout}>退出登录</button>
      </div>
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

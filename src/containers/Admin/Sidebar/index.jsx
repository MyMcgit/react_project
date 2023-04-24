import React from 'react'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { createSaveTitleAction } from '../../../redux/action_creators/title_action';
//引入菜单配置
import menu from '../../../config/menu_config'
import { Menu } from 'antd';
import logo from '../../../static/imgs/wer.png'
import './index.scss'
  // 定义创建菜单的递归函数
  function createMenu(menuarr){
    if(menuarr){
      return menuarr.map(item=>{
        return {
          key:item.key,
          icon:item.icon,
          children:createMenu(item.children),
          label:item.title
        }
      })
    }
  }
  // 定义items
  const items = createMenu(menu)

function Sidebar(props) {
    // const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()
    // const toggleCollapsed = () => {
    // setCollapsed(!collapsed);
    // };
    const navigate=useNavigate()

    // 选中标签跳转至对应路径
    function selectItem({ item, key, keyPath, selectedKeys, domEvent }){
      
      // console.log(domEvent.target.innerHTML);
      // 保存title至redux
      props.saveTitle(domEvent.target.innerHTML)
        if(keyPath[1]){
            navigate(keyPath[1]+'/'+keyPath[0])
        }else{
            navigate(key)
        }
    }
  return (
    <div className='sidebar'>
        <header className='nav_header'>
            <img src={logo} alt="" />
            <h1>商品管理系统</h1>
        </header>
      <Menu
        defaultSelectedKeys={location.pathname.split('/').reverse()[0]}
        defaultOpenKeys={location.pathname.split('/').splice(2)}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
        onSelect={selectItem}
      />
    </div>
  )
}
export default  connect(
  state => ({}),
  {
    saveTitle:createSaveTitleAction
  }
)(Sidebar)

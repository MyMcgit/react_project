// 引入需要的icon
import {
    HomeOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
    ToolOutlined
  } from '@ant-design/icons';
// 项目的菜单配置
export default [
   {
    title:'首页',//菜单的标题名称
    key:'home',//对应path
    icon:<HomeOutlined/>
   },
   {
    title:'商品',
    key:'prod_about',
    icon:<AppstoreOutlined />,
    children:[//子菜单列表
        {
            title:'分类管理',
            key:'category',
            icon:<UnorderedListOutlined />
        },
        {
            title:'商品管理',
            key:'product',
            icon:<ToolOutlined />
        }
    ]
   }
]
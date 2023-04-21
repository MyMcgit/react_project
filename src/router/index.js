
import { Navigate } from 'react-router-dom'
import Login from '../containers/Login'
import Admin from '../containers/Admin'
import Home from '../conponent/Home'
import Category from '../containers/Category'
import Product from '../containers/Product'
import Role from '../containers/Role'
import User from '../containers/User'
import Bar from '../containers/Bar'
import Line from '../containers/Line'
import Pie from '../containers/Pie'
export default [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/admin',
        element: <Admin/>,
        children:[
            {
                path:'home',
                element: <Home/>,
            },
            {
                path:'prod_about',
                children:[
                    {
                        path:'category',
                        element: <Category/>,
                    },
                    {
                        path:'product',
                        element: <Product/>,
                    }
                ]
            },
            {
                path:'user',
                element: <User/>,
            },
            {
                path:'role',
                element: <Role/>,
            },
            {
                path:'charts',
                children:[
                    {
                        path:'bar',
                        element: <Bar/>,
                    },
                    {
                        path:'pie',
                        element: <Pie/>,
                    },
                    {
                        path:'line',
                        element: <Line/>,
                    }
                ]
            }

        
        ]
    },
    {
        path:'/',
        element: <Navigate to='/admin'/>
    }
]
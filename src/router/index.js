
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
export default [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/admin',
        element: <Admin/>
    },
    {
        path:'/',
        element: <Navigate to='/login'/>
    }

]
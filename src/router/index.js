
import { Navigate } from 'react-router-dom'
import Login from '../containers/Login'
import Admin from '../containers/Admin'
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
import { useRoutes} from 'react-router-dom';
import {arr} from './router'
export default  function App() {
    const element=useRoutes(arr)
    return ( 
        <div className = "app" >
                {element}
        </div>
    );
}


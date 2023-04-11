import { useRoutes} from 'react-router-dom';
import routeTable from './router'
export default  function App() {
    const element=useRoutes(routeTable)
    return ( 
        <div className = "app" >
                {element}
        </div>
    );
}


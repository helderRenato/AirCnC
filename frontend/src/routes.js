import {BrowserRouter, Switch, Route} from 'react-router-dom';

//importar as minhas rotas
import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard/index';
import New from './pages/New/index';

export default function Routes(){
    return(
        <BrowserRouter> 
            <Switch>
                <Route path = "/" exact component = {Login}></Route>
                <Route path = "/dashboard" component = {Dashboard}></Route>
                <Route path = "/new" component = {New}></Route>
            </Switch>
        </BrowserRouter>
    );
}
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sb-admin-2.min.css';
import Sidebar from "./sidebar.js";
import NavbarTop from './navbar';
import Dashboard from './dashboard/dashboard';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";
import UserList from './userlist';
import UserEdit from './useredit';
import UserCreate from './usercreate';
import ProductList from './productlist';
import ProductEdit from './productedit';
import ProductCreate from './productcreate';

function App() {
  return (
    
    <Router>
    <div id="wrapper">

      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavbarTop>
          </NavbarTop>
          <div class="container-fluid">

              <Switch>
                <Route path="/dashboard" component={Dashboard} exact={true} />
                <Route path="/userlist" component={UserList} exact={true} />
                <Route path="/useredit/:id" component={UserEdit} exact={true} />
                <Route path="/usercreate" component={UserCreate} exact={true} />
                <Route path="/productlist" component={ProductList} exact={true} />
                <Route path="/productedit/:id" component={ProductEdit} exact={true} />
                <Route path="/productcreate" component={ProductCreate} exact={true} />
             
          
              </Switch>
              

          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;

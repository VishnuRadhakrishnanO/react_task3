import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sb-admin-2.min.css';
import Sidebar from "./sidebar.js";
import NavbarTop from './navbar';
import Dashboard from './dashboard/dashboard';


function App() {
  return (
    <div id="wrapper">

      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
      <NavbarTop>
      </NavbarTop>
      <div class="container-fluid">

        <Dashboard>
        </Dashboard>
      
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;

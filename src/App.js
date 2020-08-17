import React from 'react';
import './App.css';
import LoginContainer from "./components/commons/pages/login/LoginContainer";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './layout/layout.scss';
import { BrowserRouter } from "react-router-dom";
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'
import EventContainer from "./components/modules/event/EventContainer";
import RegistrationContainer from "./components/commons/pages/registration/RegistrationContainer";


function App() {
    const token = sessionStorage.getItem("2");
  return (
      <div className={"layout-wrapper layout-static"} >

      <div className="layout-header">

          </div>
          <div className="layout-sidebar layout-sidebar-dark">
              <div className="layout-menu-container">
              </div>
          </div>
          <div className="layout-main">
              <BrowserRouter>
                  <Route exact path="/login" component={LoginContainer} />
                  <Route exact path="/register" component={RegistrationContainer} />
                  <Route exact path="/event"  >
                      {token ? <EventContainer/> : <Redirect to={"/login"}/> }
                  </Route>
              </BrowserRouter>

              
          </div>
      </div>
  );
}

export default App;

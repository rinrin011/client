import React from 'react';
import { BrowserRouter, Link, Switch, Route, useLocation ,Redirect} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './HeaderPage/Header';
import Navigation from './Navigation';
import MyHomePage from './BodyPage/MyHomePage';
import ContactPage from './BodyPage/ContactPage';
import ManageAccount from './BodyPage/ManageAccount';
import InformationPage from './BodyPage/InformationPage';

const Main = () => {
    const location = useLocation();
    const [showNavigation, setShowNavigation] = useState(true);
  
    // Sử dụng useEffect để ẩn Navigation khi bạn ở trang ManageAccount
    useEffect(() => {
      if (location.pathname.startsWith('/ManageAccount')) {
        setShowNavigation(false);
      }else if(location.pathname.startsWith('/InformationPage')){
        setShowNavigation(false);
      }else {
        setShowNavigation(true);
      }
    }, [location.pathname]);
  
    return (
      <div className="App">
        <Header />
        {showNavigation && <Navigation />}
        <Switch>
          <Route exact path="/MyHomePage"><MyHomePage/></Route>
          <Route path="/ContactPage"><ContactPage /></Route>
          <Route path='/ManageAccount'><ManageAccount /></Route>
          <Route path='/InformationPage'><InformationPage /></Route>
          <Redirect to='/MyHomePage' />
        </Switch>
      </div>
    );
  }
    
  export default Main;
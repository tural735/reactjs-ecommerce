import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../routes/Routes';
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
  return <BrowserRouter>
  <Route render={props=>(
    <>
      <div className="container">
        <Header {...props}/>
        <div className="main">
          <Routes/>
        </div>
        <Footer/>
      </div>
    </>
  )}/>
  </BrowserRouter>;
};

export default Layout;

import React, { useState } from "react";
import Login from "./Components/Login/login.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import WelcomPage from "./Components/WelcomPage/welcomePage";
import Home from "./Components/HomePage/home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import WishList from "./Components/WishList/WishList.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SideMenu from "./Common/SideMenu/sideMenu.jsx";

import "./App.css";

function App() {
  return (
    <>
      {/* <SideMenu /> */}
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/welcoming_Page" component={WelcomPage} />
          <Route exact path="/home_Page" component={Home} />
          <Route exact path="/Cart_Page" component={Cart} />
          <Route exact path="/WishList" component={WishList} />
          <Route exact path="/product_details/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

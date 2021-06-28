import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import LoginPage from "./auth/login";
import RegisterPage from "./auth/register";
import Products from "./components/Products";
import { ProtectedRoute } from "./route/index"



function App() {
  return (
    <Router>
     <Provider store={store}>
     {/* <Nav/> */}
      <Route component = {LoginPage} path="/login" />
      <Route component = {RegisterPage} path="/register" /> 

      <Route path="/" component ={Home} exact />
      <Route path="/cart" component={Cart} exact/>
<<<<<<< HEAD

=======
>>>>>>> 0e225e750393d4f8d580742e0b1f39ae11106b35
      <Route path="/products"  component={Products} exact/>
      <Route path="/products/details/:id" component={Details} exact/>

     </Provider>
    </Router>
  );
}

export default App;

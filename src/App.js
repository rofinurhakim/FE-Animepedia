import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
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
import Riwayat from './components/Riwayat'
import { ProtectedRoute } from "./route/index"



function App() {
  return (
    <Router>
     <Provider store={store}>
      <Switch>
      <Route component = {LoginPage} path="/login" />
      <Route component = {RegisterPage} path="/register" /> 
      <ProtectedRoute path="/" component ={Home} exact />
      <ProtectedRoute path="/products"  component={Products} exact/>
      <Route path="/products/details/:id" component={Details} exact/>
      <ProtectedRoute path="/cart" component={Cart} exact/>
      <Route path="/products/riwayat" component={Riwayat} exact/>
      
    
      </Switch>
    

     </Provider>
    </Router>
  );
}

export default App;

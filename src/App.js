import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Checkout from './components/Checkout.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import SearchResult from './components/SearchResult'
import {initialState} from './reducer'
import Profile from './components/Profile'

function App() {
  return (
    <Router basename={'/ecommerce-project'}>
        <div className="app">
            <Switch>
                <Route path="/profile" render={()=>{
                    if(initialState.isAuthenticated){
                        return <Profile />
                    }
                    else{
                        return <Redirect to="/login" />
                    }
                }}>
                </Route>
                <Route path="/checkout" render={()=>{
                    if(initialState.isAuthenticated){
                        return <Checkout />
                    }
                    else{
                        return <Redirect to="/login" />
                    }
                }}>
                </Route>
                <Route path="/search" render={()=>{
                    if(initialState.isAuthenticated){
                        return <SearchResult />
                    }
                    else{
                        return <Redirect to="/login" />
                    }
                }}>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Signup />
                </Route>
                <Route path="/" render={()=>{
                    console.log(initialState.isAuthenticated)
                    if(initialState.isAuthenticated){
                        return <Home />
                    }
                    else{
                        return <Redirect to="/login" />
                    }
                }}>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;

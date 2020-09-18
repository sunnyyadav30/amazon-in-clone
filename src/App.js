import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Checkout from './components/Checkout.js';
import Login from './components/Login.js';

function App() {
  return (
    <Router>
        <div className="app">
            <Switch>
                <Route path="/checkout">
                    <Header />
                    <Checkout />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;

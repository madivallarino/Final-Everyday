import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Clothing from './Clothing';
import Lifestyle from './Lifestyle';
import Home from "./Home";
import ProductPage from './ProductPage';
import About from './About';
import NavBar from "./NavBar";
import Footer from "./Footer";

const AuthorizedApp = ({user, handleLogout}) => {
   

    return (
        <div>
        <NavBar user={user}/>
        AuthorizedApp
        <Route path="/about">
            <About />
        </Route>
        <Route path="/products/:id">
            <ProductPage />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/lifestyle">
        <Lifestyle />
        </Route>
        <Route path="/clothing">
        <Clothing />
        </Route>
        <Route exact path="/">
            <LandingPage />
        </Route>
        <button onClick={handleLogout}>Logout</button>
        <Footer />
        </div>
    )
}

export default AuthorizedApp;
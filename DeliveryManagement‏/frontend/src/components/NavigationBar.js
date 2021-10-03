import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NavigationBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Edit from './Edit';
import Ads from './Ads'

export default function NavigationBar() {
    return (
        <div class="container-fluid px-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-black py-0 px-0"> <a class="navbar-brand" href="#"><strong><i>webflow</i></strong></a> <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"> <a class="nav-link" href="#/">התחברות</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#/Edit">אזור אישי</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#/Ads">דף הבית</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#/b">הוספת משלוח</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#/c">סוכן חכם למייל</a> </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/Edit" component={Edit} />
                <Route exact path="/Ads" component={Ads} />
            </Switch>
        </div>
    )
}

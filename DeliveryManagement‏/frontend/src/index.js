import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login'
import SignUp from './components/SignUp';
import Edit from './components/Edit';
import Profile from './components/Profile2'
import DataTableDemo from './components/DataTableDemo'
import NavigationBar from './components/NavigationBar'
ReactDOM.render(

  <div>
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Login} /> */}
        {/* <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Edit" component={Edit} />
        <Route exact path="/DataTableDemo" component={DataTableDemo} />
        <Route exact path="/Profile" component={Profile} /> */}
        <Route path="/" component={NavigationBar} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Edit" component={Edit} />

‏
      </Switch>
    </Router>
  </div >,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

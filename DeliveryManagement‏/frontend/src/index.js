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
import Ads from './components/Ads'
import Email from './components/Email'
import New from './components/N'
import NavigationBar from './components/NavigationBar'
//
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './components/Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )

)
export default store;
ReactDOM.render(
  <Provider store={store}>
  <div>
    <Router>
      <Switch>
        <Route path="/" component={NavigationBar} />      
      </Switch>
    </Router>
  </div >
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

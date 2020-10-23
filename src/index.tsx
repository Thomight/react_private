import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import BeerList from './components/BeerList';
import About from './components/About';
import { BrowserRouter, Link, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/beerlist">BeerList</Link></li>
      </ul>
        <Route  path='/'  component={App}/>
        <Route  path='/about'  component={About}/>
        <Route  path='/beerlist'  component={BeerList}/>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

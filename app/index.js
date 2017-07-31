import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  // StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom';

import App from './app';

render (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/f">First</Link></li>
        <li><Link to="/s">Second</Link></li>
      </ul>

      <Route exact path='/' component={ App }/>
      <Route path='/f' component={ First }/>
      <Route path='/s' component={ Second }/>
    </div>
  </Router>,
  document.getElementById('app')
);
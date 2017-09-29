require("babel-core/register");
require("babel-polyfill");

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import appReducer from './reducers';
import HomeComponent from './components/home/index';
import HomeSagas from './components/home/sagas';

require('./styles.scss');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
injectTapEventPlugin();
sagaMiddleware.run(HomeSagas);

render (
  <MuiThemeProvider>
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route exact path='/' component={ HomeComponent }/>
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';

import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import red from './reducers';
import PostIndex from './components/post';
import PostNew from './components/postnew';
import PostShow from './components/postshow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(red)}>
   <BrowserRouter>
   <Switch>
     <Route exact path="/"  component ={PostIndex}/>
     <Route exact path="/post/new" component={PostNew}/>
     <Route path="/post/:id" component={PostShow}/>
   </Switch>
   </BrowserRouter>

  </Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

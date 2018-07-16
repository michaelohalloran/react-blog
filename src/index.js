import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise)
);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={PostsIndex}/>
        <Route exact path="/posts/new" component={PostsNew}/>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

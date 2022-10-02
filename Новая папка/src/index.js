import React from 'react';
import { applyMiddleware,legacy_createStore as createStore } from 'redux';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
const defaultstate = {
  login: false,
  wallet: false
}
const reducer = (state = defaultstate, action) => {
  switch(action.type){
    case "LOGIN":
      return{...state, login: action.payload.login, wallet: action.payload.wallet}
    case "LOGOUT":
      return{...state, cash: action.payload}
    default:
      return state;
  }
}

const store = createStore (reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{'max-width': '1400px', 'margin': '0 auto'}}>
    <Provider store={store}> 
      <App />
      <Footer/>
    </Provider>
  </div>
);
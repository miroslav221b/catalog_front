import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from "./store/store";
import "./index.css"
import LayOut from './LayOut/LayOut';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if(process.env.NODE_ENV == "production")disableReactDevTools()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
  <LayOut/>
  </Provider>
  </React.StrictMode>
  </BrowserRouter>
);


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store'; // Update this path

// Create the Redux store
const store = configureStore({}); // You can pass your initial state here

// Wrap your app with the Provider and pass in the Redux store
const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


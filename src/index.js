import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
import store from './store/store';
import { Provider } from 'react-redux';

ReactGA.initialize('G-GNT6E2KCPZ');

ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();

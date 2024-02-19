import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import './css/footer.css'
import './css/ContactUs.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
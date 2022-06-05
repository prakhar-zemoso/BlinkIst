import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import {useNavigate} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  
  
  <Auth0Provider domain="dev-1fkl-v4a.us.auth0.com" 
  clientId="Yo3iIIbWDomNAyfIFOVBwuhbqt4SSuNe"
  onRedirectCallback={() => {
    const navigate = useNavigate();
    navigate("/mylib");
  }}
  redirectUri={window.location.origin+'/mylib'}>
    <App />
  
  </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

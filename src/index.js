import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainStyle from "./Components/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
      <MainStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

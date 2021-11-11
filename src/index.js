import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/base.scss';
import RealmApp from './provider/realm';
import MongoDB from './provider/mongodb';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RealmApp>
      <MongoDB>
          <App />
        </MongoDB>
      </RealmApp>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

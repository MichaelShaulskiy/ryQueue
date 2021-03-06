import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let queuedVideos = [
  {title: "Hallo", description: "Welt"},
  {title: "Was", description: "Geht"}
]

ReactDOM.render(
  <React.StrictMode>
    <App videos={queuedVideos}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

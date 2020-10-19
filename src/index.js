import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import Container from './components/Container';
import * as serviceWorker from './serviceWorker';

library.add(faEnvelope, faEllipsisH, faTimes, fab);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

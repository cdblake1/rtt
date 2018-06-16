import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Utilities/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Utilities/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.min.css';
import LandingPage from './Views/LandingPage/LandingPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();

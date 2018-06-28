import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Utilities/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Utilities/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.min.css';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './Views/LoginPage/LoginPage';
import FeaturedPage from './Views/FeaturedPage/FeaturedPage';
import LandingPage from './Views/LandingPage/LandingPage';
import ProfilePage from './Views/ProfilePage/ProfilePage';

ReactDOM.render(<ProfilePage />, document.getElementById('root'));
registerServiceWorker();

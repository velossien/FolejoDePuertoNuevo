import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./styles/scss/style.scss');
import routes from './config/routes';

ReactDOM.render(routes, document.getElementById('app'));
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./styles/scss/style.scss');
import Main from './components/Main';
import ImageGallery from './components/ImageGallery';
import { StickyContainer, Sticky } from 'react-sticky';
import routes from './config/routes';

ReactDOM.render(routes, document.getElementById('app'));
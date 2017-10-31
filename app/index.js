import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./styles/scss/style.scss');
import Main from './components/Main';
import Gallery from './components/Gallery';
import { StickyContainer, Sticky } from 'react-sticky';
import routes from './config/routes';

if (process.env.NODE_ENV !== "production") {
    console.log('Looks like we are in development mode!');
};

ReactDOM.render(routes, document.getElementById('app'));
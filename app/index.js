var React = require('react');
var ReactDOM = require('react-dom');
require('./styles/scss/style.scss');
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));
import ReactDOM from 'react-dom';
require('./styles/scss/style.scss');
import routes from './config/Routes.jsx';

ReactDOM.render(routes, document.getElementById('app'));
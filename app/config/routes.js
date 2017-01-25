import React, {Component} from 'react'; 
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Gallery from '../js/Gallery';
import { StickyContainer, Sticky } from 'react-sticky';

var routes = ( 
    <StickyContainer>
        <Router history={hashHistory}>
            <Route path='/' component ={Main}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </StickyContainer>
);

export default routes;
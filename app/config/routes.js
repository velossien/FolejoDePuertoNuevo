import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Gallery from '../components/Gallery';
import About from '../components/About';
import ImageEditorLogin from '../components/ImageEditorLogin';
import ImageEditorMain from '../components/ImageEditorMain';
import { StickyContainer, Sticky } from 'react-sticky';

var routes = (
    <StickyContainer>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={Gallery} />
                <Route path='/Gallery' component={Gallery} />
                <Route path='/About' component={About} />
                <Route path='/ImageEditorLogin' component={ImageEditorLogin} />
                <Route path='/ImageEditorMain' component = {ImageEditorMain}/>
            </Route>
        </Router>
    </StickyContainer>
);

export default routes;
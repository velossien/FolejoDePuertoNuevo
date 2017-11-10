import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import images from "../js/Images.js";
import Main from '../components/Main.jsx';
import { StickyContainer, Sticky } from 'react-sticky';

let routes = (
    <StickyContainer>
        <HashRouter>
            <Route path='/' component={Main}/>
        </HashRouter>
    </StickyContainer>
);

export default routes;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';

import Gallery from '../components/Gallery.jsx';
import About from '../components/About.jsx';

export default class Menubar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sticky>
                <div className="menubar">
                    <ul>
                        <li><NavLink activeClassName='active' to="/Gallery">Gallery</NavLink></li>
                        <li><NavLink activeClassName='active' to="/About">About</NavLink></li>
                    </ul>
                </div>
            </Sticky>
        )
    };
};
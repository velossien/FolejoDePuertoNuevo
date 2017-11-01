import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';

import Gallery from '../components/Gallery';
import About from '../components/About';

export default class Menubar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sticky>
                <div className="menubar">
                    <ul>
                        <li><Link to="/Gallery">Portfolio</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </div>
            </Sticky>
        )
    };
};
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Gallery from './Gallery.jsx';
import About from './About.jsx';

export default class Menubar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menubar">
        <ul>
          <li><NavLink activeClassName="active" to="/Gallery">Gallery</NavLink></li>
          <li><NavLink activeClassName="active" to="/About">About</NavLink></li>
        </ul>
      </div>
    );
  }
}

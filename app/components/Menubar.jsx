import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menubar extends Component {
  render() {
    const galleryUrl = this.props.isOnWorkImages ? 'WorkImages' : 'Gallery';
    return (
      <div className="menubar">
        <ul>
          <li><NavLink activeClassName="active" to={`/${galleryUrl}`}>Gallery</NavLink></li>
          <li><NavLink activeClassName="active" to="/About">About</NavLink></li>
        </ul>
      </div>
    );
  }
}

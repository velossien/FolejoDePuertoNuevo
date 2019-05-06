import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="artistBlock">
          <Link to="/About"><img className="artistImg" src="https://s3.amazonaws.com/kevingrimm.com/img/artistImg.png" /></Link>
          <h1 id="artist-block-title-1">Painting With Light</h1>
          <br />
          <h3 id="artist-block-title-2">The Digital Art of Kevin Grimm</h3>
        </div>
        <img className="banner" src="https://s3.amazonaws.com/kevingrimm.com/img/banner.jpg" />
      </header>
    );
  }
}

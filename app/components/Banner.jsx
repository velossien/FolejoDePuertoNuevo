import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner({isNotOnGameArt}) {
  return (
    <header>
      <div className="artistBlock">
        <Link to="/About"><img className="artistImg" src="https://s3.amazonaws.com/kevingrimm.com/img/artistImg.png" /></Link>
        <h1 id="artist-block-title-1">Painting With Light</h1>
        <br />
        <h3 id="artist-block-title-2">{isNotOnGameArt ? "The Digital Art of Kevin Grimm" : "The Game Art of Kevin Grimm"}</h3>
      </div>
      <img className="banner" src={isNotOnGameArt ? "https://s3.amazonaws.com/kevingrimm.com/img/banner.jpg" : "https://s3.amazonaws.com/kevingrimm.com/img/kevin-grimm-desert-top-banner2.jpg"} />
    </header>
  );
}

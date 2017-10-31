import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="artistBlock">
                    {/* <Link to="/About"><img className="artistImg" src="img/artistImg.png" /></Link> */}
                    <Link to="/About"><img className="artistImg" src="https://s3.amazonaws.com/kevingrimm.com/img/artistImg.png" /></Link>
                    <h1> KEVIN GRIMM </h1>
                    <br />
                    <h3> Environmental concept artist and character designer </h3>
                </div>
                {/* <img className="banner" src='img/banner.jpg' /> */}
                <img className="banner" src='https://s3.amazonaws.com/kevingrimm.com/img/banner.jpg' />
            </header>
        )
    };
};
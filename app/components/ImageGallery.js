import React, { Component } from 'react';
import Gallery from '../js/Gallery.js';
import images from "../js/Images.js";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="gallery">
                    <Gallery photos={images} />
                </div>
                <div className="copyright">
                    <p>&copy; 2017 Grimm</p>
                </div>
            </div>
        );
    }
}
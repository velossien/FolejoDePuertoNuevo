import React, { Component } from 'react';
import images from "../js/Images.js";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="gallery">
                    <GalleryList images={images} />
                </div>
                <div className="copyright">
                    <p>&copy; 2017 Grimm</p>
                </div>
            </div>
        );
    };
};

class GalleryList extends React.Component {
    render() {
        let imageList = this.props.images.map(((obj) => {
            return (
                <Image thumbnailSrc={obj.thumbnailSrc} title={obj.title} key={obj.thumbnailSrc} fullSizeSrc={obj.fullSizeSrc} />
            );
        }));
        return (
            <div className="imageList">
                {imageList}
            </div>
        );
    };
};

class Image extends React.Component {
    render() {
        return (
            <Link to ={"/Gallery/"+this.props.title}><img className="image" src={this.props.thumbnailSrc} /></Link>
        );
    };
};

Image.propTypes = {
    thumbnailSrc: PropTypes.string.isRequired,
    fullSizeSrc: PropTypes.string.isRequired
};
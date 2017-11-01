import React, { Component } from 'react';
import images from "../js/Images.js";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.closeHeader = this.closeHeader.bind(this);
    }

    closeHeader() {
        this.props.onImageClick();
    }

    componentDidMount() {
        this.props.onOpenGallery();
    };

    render() {
        return (
            <div>
                <div className="gallery" onChange={this.componentDidMount}>
                    <GalleryList
                        images={images}
                        onImageClick={this.closeHeader}
                        showHeader={this.props.showHeader}
                    />
                </div>
                <div className="copyright">
                    <p>&copy; 2017 Grimm</p>
                </div>
            </div>
        );
    };
};

class GalleryList extends React.Component {
    constructor(props) {
        super(props);

        this.closeHeader = this.closeHeader.bind(this);
    }

    closeHeader() {
        this.props.onImageClick();
    }

    render() {
        let imageList = this.props.images.map(((obj) => {
            return (
                <Image
                    title={obj.title}
                    thumbnailSrc={obj.thumbnailSrc}
                    fullSizeSrc={obj.fullSizeSrc}
                    key={obj.thumbnailSrc}
                    showHeader={this.props.showHeader}
                    onImageClick={this.closeHeader}
                />
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
    constructor(props) {
        super(props);

        this.closeHeader = this.closeHeader.bind(this);
    }

    closeHeader() {
        this.props.onImageClick();
    }

    render() {
        return (
            <Link to={"/Gallery/" + this.props.title} onClick={this.closeHeader}><img className="image" src={this.props.thumbnailSrc} /></Link>
        );
    };
};

Image.propTypes = {
    thumbnailSrc: PropTypes.string.isRequired,
    fullSizeSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    closeHeader: PropTypes.func.isRequired
};
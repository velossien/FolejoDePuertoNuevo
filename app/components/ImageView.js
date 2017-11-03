import React, { Component } from 'react';
import images from "../js/Images.js";

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: this.props.match.params.fullSizeSrc
        };

        this.goBackGallery = this.goBackGallery.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }

    goBackGallery() {
        this.props.history.push('/Gallery');
    }

    previousImage() {
        let currentImageIndex = images.map((img) => img.title).indexOf(this.state.imgSrc);

        let previousImageTitle;
        if (currentImageIndex == 0) {
            previousImageTitle = (images[(images.length) - 1].title);
            console.log("We are at the beginning!" + previousImageTitle)
        } else {
            previousImageTitle = images[(currentImageIndex - 1)].title;
        }

        this.setState({
            imgSrc: previousImageTitle
        });
        this.props.history.push("/Gallery/" + previousImageTitle);

    }

    nextImage() {
        let currentImageIndex = images.map((img) => img.title).indexOf(this.state.imgSrc);

        let nextImageTitle;
        if (currentImageIndex == (images.length - 1)) {
            nextImageTitle = (images[0].title);
            console.log("We are at the end!" + nextImageTitle)
        } else {
            nextImageTitle = images[(currentImageIndex + 1)].title;
        }

        this.setState({
            imgSrc: nextImageTitle
        });
        this.props.history.push("/Gallery/" + nextImageTitle);

    }

    componentDidMount() {
        this.props.onOpenImageView();
    };

    render() {
        // const imgSrc = this.props.match.params.fullSizeSrc;
        const currentImgSrc = this.state.imgSrc;

        return (
            <div className="image-view">
                <button className="back-button" onClick={this.goBackGallery}>&#10005;</button>
                <div className="image-block">
                    <button className="prev-button" onClick={this.previousImage}>&#8592;</button>
                    <img src={`https://s3.amazonaws.com/kevingrimm.com/img/fullSize/${currentImgSrc}`} />
                    <button className="next-button" onClick={this.nextImage}>&#8594;</button>
                </div>
            </div>
        );
    }
};
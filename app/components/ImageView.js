import React, { Component } from 'react';
import images from "../js/Images.js";

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onOpenImageView();
    };

    render() {
        const imgSrc = this.props.match.params.fullSizeSrc;

        return (
            <div className="image-view">
                <img src={`https://s3.amazonaws.com/kevingrimm.com/img/fullSize/${imgSrc}`} />
            </div>
        );
    }
};
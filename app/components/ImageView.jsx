import React, { Component } from "react";

class ImageView extends Component {
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
    this.props.history.push("/" + this.props.baseUrl);
  }

  previousImage() {
    const { images } = this.props;
    const currentImageIndex = images
      .map(img => img.title)
      .indexOf(this.state.imgSrc);

    let previousImageTitle;
    if (currentImageIndex == 0) {
      previousImageTitle = images[images.length - 1].title;
    } else {
      previousImageTitle = images[currentImageIndex - 1].title;
    }

    this.setState({
      imgSrc: previousImageTitle
    });
    this.props.history.push(`/${this.props.baseUrl}/${previousImageTitle}`);
  }

  nextImage() {
    const { images } = this.props;
    const currentImageIndex = images
      .map(img => img.title)
      .indexOf(this.state.imgSrc);

    let nextImageTitle;
    if (currentImageIndex == images.length - 1) {
      nextImageTitle = images[0].title;
    } else {
      nextImageTitle = images[currentImageIndex + 1].title;
    }

    this.setState({
      imgSrc: nextImageTitle
    });
    this.props.history.push(`/${this.props.baseUrl}/${nextImageTitle}`);
  }

  componentDidMount() {
    this.props.onOpenImageView();
  }

  render() {
    const currentImgSrc = this.state.imgSrc;
    return (
      <div className="image-view">
        <img
          onClick={this.goBackGallery}
          className="back-button"
          src="https://s3.amazonaws.com/kevingrimm.com/img/icons/close.png"
        />
        <div className="img-block">
          <img
            onClick={this.previousImage}
            className="arrow"
            src="https://s3.amazonaws.com/kevingrimm.com/img/icons/arrow_left_icon.png"
          />
          <img
            src={`https://s3.amazonaws.com/kevingrimm.com/img/fullSize/${currentImgSrc}`}
          />
          <img
            className="arrow"
            onClick={this.nextImage}
            src="https://s3.amazonaws.com/kevingrimm.com/img/icons/arrow_right_icon.png"
          />

          <div className="btn-block">
            <img
              className="mobile-btn"
              onClick={this.previousImage}
              src="https://s3.amazonaws.com/kevingrimm.com/img/icons/arrow_left_icon.png"
            />
            <img
              className="mobile-btn"
              onClick={this.goBackGallery}
              src="https://s3.amazonaws.com/kevingrimm.com/img/icons/close.png"
            />
            <img
              className="mobile-btn"
              onClick={this.nextImage}
              src="https://s3.amazonaws.com/kevingrimm.com/img/icons/arrow_right_icon.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageView;

import React, { Component } from "react";
import PropTypes from "prop-types";
import GalleryList from "./GalleryList.jsx";
import Copyright from "./Copyright.jsx";

class Gallery extends Component {
  componentDidMount() {
    this.props.onOpenGallery();
  }

  render() {
    return (
      <div>
        <div className="gallery">
          <GalleryList
            baseUrl={this.props.baseUrl}
            images={this.props.images}
          />
        </div>
        <Copyright />
      </div>
    );
  }
}

Gallery.propTypes = {
  baseUrl: PropTypes.string.isRequired
};

export default Gallery;

import React, { Component } from 'react';
import images from '../js/Images.js';
import GalleryList from './GalleryList.jsx';
import Copyright from './Copyright.jsx';

export default class Gallery extends Component {
  componentDidMount() {
    this.props.onOpenGallery();
  }

  render() {
    return (
      <div>
        <div className="gallery">
          <GalleryList
            images={images}
          />
        </div>
        <Copyright />
      </div>
    );
  }
}

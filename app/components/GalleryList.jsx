import React from "react";
import PropTypes from "prop-types";
import Image from "./Image.jsx";

const GalleryList = ({ baseUrl, images }) => {
  const imageList = images.map((obj, i) => (
    <Image
      baseUrl={baseUrl}
      title={obj.title}
      thumbnailSrc={obj.thumbnailSrc}
      key={obj.title + i}
      id={obj.title + i}
    />
  ));

  return <div className="imageList">{imageList}</div>;
};

GalleryList.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
};

export default GalleryList;

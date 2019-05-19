import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image.jsx';

export default function GalleryList({ images }) {
    const imageList = images.map((obj => (
        <Image
            title={obj.title}
            thumbnailSrc={obj.thumbnailSrc}
            key={obj.orderId}
            id={obj.orderId}
        />
    )));

    return (
        <div className="imageList">
            {imageList}
        </div>
    );
}

GalleryList.propTypes = {
    images: PropTypes.array.isRequired,
};

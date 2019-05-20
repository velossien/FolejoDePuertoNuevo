import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image.jsx';

export default function GalleryList({ baseUrl, images }) {
    const imageList = images.map((obj => (
        <Image
            baseUrl={baseUrl}
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
    baseUrl: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
};

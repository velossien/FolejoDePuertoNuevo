import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Image({ title, thumbnailSrc }) {
    return (
        <Link to={`/Gallery/${title}`}><img className="image" src={thumbnailSrc} /></Link>
    );
};

Image.propTypes = {
    thumbnailSrc: PropTypes.string.isRequired,
    fullSizeSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
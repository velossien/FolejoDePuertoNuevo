import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Image({ baseUrl, title, thumbnailSrc }) {
    return (
        <Link to={`/${baseUrl}/${title}`}><img className="image" src={thumbnailSrc} /></Link>
    );
};

Image.propTypes = {
    thumbnailSrc: PropTypes.string.isRequired,
    fullSizeSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
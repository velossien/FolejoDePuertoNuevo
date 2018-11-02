import React, { Component } from 'react';
import Copyright from './Copyright.jsx';

export default class ImageEditorMain extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Admin">
                <h1> Admin Editor Page</h1>

                <form className="center">
                    <p>Full Size Image:</p>
                    <input type="text" name="FullSizeImageSrc" />
                    <p>Thumbnail Image:</p>
                    <input type="text" name="ThumbnailImageSrc" />
                    <button className="center">Submit</button>
                </form>

                <Copyright/>
            </div>
        );
    };
};
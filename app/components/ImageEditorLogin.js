import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

class ImageEditorLogin extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Admin">
                <h1> Admin Page</h1>

                <form className="center">
                    <p>Password</p>
                    <input type="text" name="password" />
                    <Link to="/ImageEditorMain">
                        <button className="center"> Sign in</button>
                    </Link>
                </form>

                <div className="copyright">
                    <p>&copy; 2017 Grimm</p>
                </div>
            </div>
        );
    };
};

export default ImageEditorLogin;
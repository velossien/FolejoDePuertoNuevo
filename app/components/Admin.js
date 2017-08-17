import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Admin extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Admin">
                <h1> Admin Page</h1>

                <form className="center">
                    <p>User Name</p>
                    <input type="text" name="username" />
                    <p>Password</p>
                    <input type="text" name="password" />
                    <button className="center"> Sign in</button>
                </form>

                <div className="copyright">
                    <p>&copy; 2017 Grimm</p>
                </div>
            </div>
        );
    };
};

export default Admin;
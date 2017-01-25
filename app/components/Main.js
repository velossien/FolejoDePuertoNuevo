import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Main extends React.Component {
    constructor(props) {
        super(props);
     }

     render(){
        return (
                    <div className='main-container'> 
                        <Sticky>
                            <div className="menubar">
                                <ul>
                                    <li id="homelink"><a href="index.html">KEVIN GRIMM</a></li>
                                    <li><a href="index.html">Contact</a></li>
                                    <li><a href="index.html">Other Media</a></li>
                                    <li><a href="index.html">Paintings</a></li>
                                    <li><a href="index.html">Photos</a></li>
                                </ul>
                            </div>      
                        </Sticky>
                        {this.props.children}
                    </div>

        );
    }
}

export default Main;
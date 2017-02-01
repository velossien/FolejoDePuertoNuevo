import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import ImageGallery from '../components/ImageGallery';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
     }

     render(){
        return (
            <div className='mainContainer'>
                <header>
                    <div className="artistBlock"   id="Gallery">
                        <img className="artistImg" src="dist/img/artistImgBrown.png"/>
                        <h1> KEVIN GRIMM </h1>
                        <br/>
                        <h3> Environmental concept artist and character designer </h3>
                    </div>
                        <img className="banner" src='dist/img/banner.jpg'/>
                </header>
                <StickyContainer>
                        <Sticky>   
                            <div className="menubar">
                                <ul>
                                    <li><Link to="/ImageGallery">Portfolio</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                </ul>
                            </div> 
                        </Sticky>
                        
                        {this.props.children}
                </StickyContainer>
            </div>

        );
    }
}

export default Main;
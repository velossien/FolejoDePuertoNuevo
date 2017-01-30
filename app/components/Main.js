import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import ImageGallery from '../components/ImageGallery';

class Main extends React.Component {
    constructor(props) {
        super(props);
     }

     render(){
        return (
            <div className='mainContainer'>
                <header>
                    <div className="artistBlock">
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
                                    <li><a href="index.html">Portfolio</a></li>
                                    <li><a href="index.html">About</a></li>
                                </ul>
                            </div> 
                        </Sticky>
                        <ImageGallery/>
                </StickyContainer>
            </div>

        );
    }
}

export default Main;
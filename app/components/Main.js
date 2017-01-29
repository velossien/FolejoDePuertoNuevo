import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import ImageGallery from '../components/ImageGallery';

class Main extends React.Component {
    constructor(props) {
        super(props);
     }

     render(){
        return (
            <StickyContainer>
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
                    <ImageGallery/>
                </div>
            </StickyContainer>

        );
    }
}

export default Main;
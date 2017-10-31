import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Route, Link, Switch } from 'react-router-dom';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import About from '../components/About';
import ImageView from '../components/ImageView';
import ImageEditorLogin from '../components/ImageEditorLogin';
import ImageEditorMain from '../components/ImageEditorMain';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainContainer'>
                <Banner/>
                <StickyContainer>
                    <Sticky>
                        <div className="menubar">
                            <ul>
                                <li><Link to="/Gallery">Portfolio</Link></li>
                                <li><Link to="/About">About</Link></li>
                            </ul>
                        </div>
                    </Sticky>
                    <Switch>
                        <Route exact path='/' component={Gallery} />
                        <Route exact path='/Gallery' component={Gallery} />
                        <Route path='/Gallery/:fullSizeSrc' component={ImageView} />
                        <Route exact path='/About' component={About} />
                        <Route exact path='/ImageEditorLogin' component={ImageEditorLogin} />
                        <Route exact path='/ImageEditorMain' component={ImageEditorMain} />

                    </Switch>
                </StickyContainer>
            </div>

        );
    };
};
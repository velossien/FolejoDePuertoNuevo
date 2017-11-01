import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Route, Link, Switch } from 'react-router-dom';
import Banner from '../components/Banner';
import Menubar from '../components/Menubar';
import Gallery from '../components/Gallery';
import About from '../components/About';
import ImageView from '../components/ImageView';
import ImageEditorLogin from '../components/ImageEditorLogin';
import ImageEditorMain from '../components/ImageEditorMain';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showHeader: true
        };

        this.changeHeaderVisibility = this.changeHeaderVisibility.bind(this);
    }

    changeHeaderVisibility() {
        this.setState({ showHeader: false });
    };

    render() {
        let banner, menubar;

        if (this.state.showHeader) {
            banner = <Banner headerVisible={this.state.showHeader} />;
            menubar = <Menubar headerVisible={this.state.showHeader} />;
        } else {
            banner, menubar = null;
        }

        return (
            <div className='mainContainer'>
                {banner}
                <StickyContainer>
                    {menubar}
                    <Switch>
                        <Route exact path='/' render={(props) => (
                            <Gallery {...props} showHeader={this.state.showHeader} onImageClick={this.changeHeaderVisibility} />
                        )} />
                        <Route exact path='/Gallery' render={(props) => (
                            <Gallery {...props} showHeader={this.state.showHeader} onImageClick={this.changeHeaderVisibility} />
                        )} />
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
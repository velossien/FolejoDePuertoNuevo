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

        this.closeHeader = this.closeHeader.bind(this);
        this.openHeader = this.openHeader.bind(this);
    }

    closeHeader() {
        this.setState({ showHeader: false });
    };

    openHeader() {
        this.setState({ showHeader: true });
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
                            <Gallery {...props} onOpenGallery={this.openHeader} />
                        )} />
                        <Route exact path='/Gallery' render={(props) => (
                            <Gallery {...props} onOpenGallery={this.openHeader} />
                        )} />
                        <Route exact path='/Gallery/:fullSizeSrc' render={(props) => (
                            <ImageView {...props} showHeader={this.state.showHeader} onOpenImageView={this.closeHeader} />
                        )} />
                        <Route exact path='/About' render={(props) => (
                            <About {...props} showHeader={this.state.showHeader} onOpenAbout={this.openHeader} />
                        )} />
                    </Switch>
                </StickyContainer>
            </div>

        );
    };
};
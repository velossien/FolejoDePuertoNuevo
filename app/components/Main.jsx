import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Banner from './Banner.jsx';
import Menubar from './Menubar.jsx';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import ImageView from './ImageView.jsx';
import images from '../js/Images.js';
import gameArtImages from '../js/gameArtImages.js';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeader: true,
      newClassName: 'main-container',
    };

    this.closeHeader = this.closeHeader.bind(this);
    this.openHeader = this.openHeader.bind(this);
  }

  closeHeader() {
    this.setState({
      showHeader: false,
      newClassName: 'imageview-main-container',
    });
  }

  openHeader() {
    this.setState({
      showHeader: true,
      newClassName: 'main-container',
    });
  }

  render() {
    let banner; let menubar;
    if (this.state.showHeader) {
      const isNotOnGameArt = this.props.location.pathname.indexOf('gameart') === -1;
      banner = <Banner headerVisible={this.state.showHeader} isNotOnGameArt={isNotOnGameArt} />;
      menubar = isNotOnGameArt ? <Menubar headerVisible={this.state.showHeader} /> : null;
    } else {
      banner, menubar = null;
    }

    return (
      <div className={this.state.newClassName}>
        {banner}
        {menubar}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Redirect to="/Gallery" />
            )}
          />
          <Route
            exact
            path="/Gallery"
            render={props => (
              <Gallery {...props}
                baseUrl="Gallery"
                onOpenGallery={this.openHeader}
                images={images} />
            )}
          />
          <Route
            exact
            path="/Gallery/:fullSizeSrc"
            render={props => (
              <ImageView {...props}
                baseUrl="Gallery"
                images={images}
                showHeader={this.state.showHeader}
                onOpenImageView={this.closeHeader} />
            )}
          />
          <Route
            exact
            path="/About"
            render={props => (
              <About {...props} showHeader={this.state.showHeader} onOpenAbout={this.openHeader} />
            )}
          />
          <Route
            exact
            path="/gameart"
            render={props => (
              <Gallery {...props}
                baseUrl="gameart"
                onOpenGallery={this.openHeader}
                images={gameArtImages}
              />
            )}
          />
          <Route
            exact
            path="/gameart/:fullSizeSrc"
            render={props => (
              <ImageView {...props}
                baseUrl="gameart"
                images={gameArtImages}
                showHeader={this.state.showHeader}
                onOpenImageView={this.closeHeader}
              />
            )}
          />
        </Switch>
      </div>

    );
  }
}

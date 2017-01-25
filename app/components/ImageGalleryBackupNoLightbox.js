const IMAGES = [
  {name: 'pup1', key: '1', url: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-15.jpg'},
  {name: 'pup2', key: '2', url: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/Funny-Dog.jpg'},
  {name: 'pup3', key: '3', url: 'https://s-media-cache-ak0.pinimg.com/736x/29/fa/14/29fa1441f2a0446e9aa45cee74495a83.jpg'},
  {name: 'pup4', key: '4', url: 'https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-125037925.jpg'},
  {name: 'pup5', key: '5', url: 'http://thewondrous.com/wp-content/uploads/2015/09/cute-puppies-pictures.jpg'}
];

import React, {Component} from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

const ImageBlock = (props) => (
    <div>
      {IMAGES.map(
        (image) => 
            <div className="outer">
              <img src={image.url}/>
            </div>
      )}
    </div>
);

const Home = () => (
  <div className="image"><ImageBlock/></div>
);

export default Home;
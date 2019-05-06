import React, { Component } from 'react';
import Copyright from './Copyright.jsx';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onOpenAbout();
  }

  render() {
    return (
      <div className="About">
        <div className="about-block">
          <p className="center">Hello, I'm a Concept and Character artist. I've worked as an animator, an illustrator and a concept artist. Currently I am working as an artist in the game&nbsp;industry.</p>
          <p className="center">I am constantly working to improve my technique. I love the challenges that freelance brings me. Whether it's creating a unique character design, a vast environmental game world or cartoons for a children's book, It's all fun to me and doing great work is what I'm passionate&nbsp;about.</p>
        </div>
        <div className="line" />
        <ul>
          <li>Character Design</li>
          <li>Concept Art</li>
        </ul>
        <div className="line" />
        <p><a href="mailto:kevingrimmartist@gmail.com">kevingrimmartist@gmail.com</a></p>
        <div className="line" />
        <Copyright />
      </div>
    );
  }
}

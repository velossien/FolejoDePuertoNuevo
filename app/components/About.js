import React, {Component} from 'react';
import Gallery from '../js/Gallery.js';
import { StickyContainer, Sticky } from 'react-sticky';

class About extends React.Component {
    constructor(props) {
        super(props);
     }

     render(){
        return (
            <div className="About" id="About">
            <h1> Summary </h1>

            <p>Hello, I am a Concept and Character artist. I have worked as an animator, an illustrator and a concept artist. Currently I am working as an artist in the game industry.</p>
            <p>I am constantly working to improve my technique. I love the challenges that freelance brings me. Whether it's creating a unique character design, a vast environmental game world or cartoons for a children's book, It's all fun to me and doing great work is what I'm passionate about.</p>

            <h1>Skills</h1>
            <ul>
                <li>Character Design</li>
                <li>Concept Art</li>
            </ul>
        
            <h1> Contact </h1>
            <p>Email: <a href="mailto:kevingrimmartist@gmail.com">kevingrimmartist@gmail.com</a></p>
        </div>
        );
    }
}

export default About;
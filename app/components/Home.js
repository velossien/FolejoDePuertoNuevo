import React, { Component } from 'react';
import Gallery from '../js/Gallery.js';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gallery">
                <Gallery photos={images} />
             </div>
        );
    }
}

const images = [
    { 
        src: 'dist/img/thumbnails/kevin-grimm-aftermath.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-aftermath.jpg'
        }
    },
        { 
        src: 'dist/img/thumbnails/kevin-grimm-airlock.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-airlock.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-airlock1.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-airlock1.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-alpha9.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-alpha9.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-alpha-9-patrol.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-alpha-9-patrol.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-alpha9-recon.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-alpha9-recon.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-approaching-enemy.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-approaching-enemy.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-approaching-storm-clouds.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-approaching-storm-clouds.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-away-team.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-away-team.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-badass1.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-badass1.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-best-friends-alone.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-best-friends-alone.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-broken-city.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-broken-city.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-broken-ship.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-broken-ship.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-canadian-express.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-canadian-express.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-character-designs-one.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-character-designs-one.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-character-designs-two.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-character-designs-two.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-character-sketch2.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-character-sketch2.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-city-dairy.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-city-dairy.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-city-lights.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-city-lights.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-city-of-dreams.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-city-of-dreams.jpg'
        }
    },
      { 
        src: 'dist/img/thumbnails/kevin-grimm-city-of-the-gods.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-city-of-the-gods.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-darkstar.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-darkstar.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-discovery.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-discovery.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-end-of-the-season.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-end-of-the-season.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-escape.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-escape.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-feeding-the-ducks.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-feeding-the-ducks.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-forest-camp.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-forest-camp.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-forgotten-isle.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-forgotten-isle.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-fox-1-down.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-fox-1-down.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-han-and-chewy.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-han-and-chewy.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-hiding.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-hiding.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-hiding-cow.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-hiding-cow.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-justinsjellybean.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-justinsjellybean.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-lost-tribe.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-lost-tribe.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-lucky-shot.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-lucky-shot.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-magic-forest.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-magic-forest.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-metal-god.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-metal-god.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-motherland.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-motherland.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-mother-of-dragons.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-mother-of-dragons.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-n-1599-heavy-lift-transport.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-n-1599-heavy-lift-transport.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-neilan-base-3.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-neilan-base-3.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-now-run-along.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-now-run-along.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-off-world.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-off-world.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-path-of-destruction.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-path-of-destruction.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-peace-and-war.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-peace-and-war.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-planet-of-ice.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-planet-of-ice.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-providence.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-providence.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-returning-home.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-returning-home.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-showdown.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-showdown.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-so-much-green.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-so-much-green.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-spacebackground.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-spacebackground.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-stranger-things.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-stranger-things.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-sunset-in-the-deep-woods.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-sunset-in-the-deep-woods.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-the-end-is-near.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-the-end-is-near.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-the-hunt.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-the-hunt.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-tower.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-tower.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-village.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-village.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-visitors.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-visitors.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-waves.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-waves.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-westworld1.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-westworld1.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-winter.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-winter.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-wreckage.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-wreckage.jpg'
        }
    },
    { 
        src: 'dist/img/thumbnails/kevin-grimm-zeus.jpg',  
        width: 300,
        height: 300,
        aspectRatio: 1.00,
        lightboxImage:{
            src: 'dist/img/fullSize/kevin-grimm-zeus.jpg'
        }
    } 
];
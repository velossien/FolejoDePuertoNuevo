const images = [
    {   title:'kevin-grimm-western.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-western.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-western.jpg'
    },
    {   title:'kevin-grimm-highway14.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-highway14.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-highway14.jpg'
    },
    {   title:'kevin-grimm-keepout.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-keepout.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-keepout.jpg'
    },
    {   title:'kevin-grimm-run.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-run.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-run.jpg'
    },
    {   title:'kevin-grimm-best-friends-alone.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-best-friends-alone.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-best-friends-alone.jpg'
    },
    {   title:'kevin-grimm-away-team.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-away-team.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-away-team.jpg'
    },
    {   title:'kevin-grimm-badass1.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-badass1.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-badass1.jpg'
    },
    {   title:'kevin-grimm-zeus.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-zeus.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-zeus.jpg'
    },
    {   title:'kevin-grimm-wreckage.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-wreckage.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-wreckage.jpg'
    },
    {   title:'kevin-grimm-winter.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-winter.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-winter.jpg'
    },
    {   title:'kevin-grimm-westworld1.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-westworld1.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-westworld1.jpg'
    },
    {   title:'kevin-grimm-waves.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-waves.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-waves.jpg'
    },
    {   title:'kevin-grimm-visitors.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-visitors.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-visitors.jpg'
    },
    {   title:'kevin-grimm-village.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-village.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-village.jpg'
    },
    {   title:'kevin-grimm-tower.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-tower.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-tower.jpg'
    },
    {   title:'kevin-grimm-the-end-is-near.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-the-end-is-near.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-the-end-is-near.jpg'
    },
    {   title:'kevin-grimm-sunset-in-the-deep-woods.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-sunset-in-the-deep-woods.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-sunset-in-the-deep-woods.jpg'
    },
    {   title:'kevin-grimm-stranger-things.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-stranger-things.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-stranger-things.jpg'
    },
    {   title:'kevin-grimm-spacebackground.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-spacebackground.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-spacebackground.jpg'
    },
    {   title:'kevin-grimm-so-much-green.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-so-much-green.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-so-much-green.jpg'
    },
    {   title:'kevin-grimm-showdown.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-showdown.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-showdown.jpg'
    },
    {   title:'kevin-grimm-returning-home.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-returning-home.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-returning-home.jpg'
    },
    {   title:'kevin-grimm-providence.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-providence.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-providence.jpg'
    },
    {   title:'kevin-grimm-planet-of-ice.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-planet-of-ice.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-planet-of-ice.jpg'
    },
    {   title:'kevin-grimm-peace-and-war.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-peace-and-war.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-peace-and-war.jpg'
    },
    {   title:'kevin-grimm-path-of-destruction.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-path-of-destruction.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-path-of-destruction.jpg'
    },
    {   title:'kevin-grimm-off-world.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-off-world.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-off-world.jpg'
    },
    {   title:'kevin-grimm-now-run-along.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-now-run-along.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-now-run-along.jpg'
    },
    {   title:'kevin-grimm-neilan-base-3.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-neilan-base-3.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-neilan-base-3.jpg'
    },
    {   title:'kevin-grimm-n-1599-heavy-lift-transport.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-n-1599-heavy-lift-transport.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-n-1599-heavy-lift-transport.jpg'
    },
    {   title:'kevin-grimm-mother-of-dragons.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-mother-of-dragons.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-mother-of-dragons.jpg'
    },
    {   title:'kevin-grimm-motherland.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-motherland.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-motherland.jpg'
    },
    {   title:'kevin-grimm-metal-god.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-metal-god.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-metal-god.jpg'
    },
    {   title:'kevin-grimm-magic-forest.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-magic-forest.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-magic-forest.jpg'
    },
    {   title:'kevin-grimm-lucky-shot.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-lucky-shot.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-lucky-shot.jpg'
    },
    {   title:'kevin-grimm-lost-tribe.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-lost-tribe.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-lost-tribe.jpg'
    },
    {   title:'kevin-grimm-justinsjellybean.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-justinsjellybean.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-justinsjellybean.jpg'
    },
    {   title:'kevin-grimm-hiding-cow.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-hiding-cow.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-hiding-cow.jpg'
    },
    {   title:'kevin-grimm-hiding.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-hiding.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-hiding.jpg'
    },
    {   title:'kevin-grimm-han-and-chewy.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-han-and-chewy.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-han-and-chewy.jpg'
    },
    {   title:'kevin-grimm-fox-1-down.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-fox-1-down.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-fox-1-down.jpg'
    },
    {   title:'kevin-grimm-forgotten-isle.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-forgotten-isle.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-forgotten-isle.jpg'
    },
    {   title:'kevin-grimm-forest-camp.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-forest-camp.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-forest-camp.jpg'
    },
    {   title:'kevin-grimm-feeding-the-ducks.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-feeding-the-ducks.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-feeding-the-ducks.jpg'
    },
    {   title:'kevin-grimm-escape.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-escape.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-escape.jpg'
    },
    {   title:'kevin-grimm-end-of-the-season.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-end-of-the-season.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-end-of-the-season.jpg'
    },
    {   title:'kevin-grimm-discovery.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-discovery.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-discovery.jpg'
    },
    {   title:'kevin-grimm-darkstar.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-darkstar.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-darkstar.jpg'
    },
    {   title:'kevin-grimm-city-of-the-gods.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-city-of-the-gods.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-city-of-the-gods.jpg'
    },
    {   title:'kevin-grimm-city-of-dreams.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-city-of-dreams.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-city-of-dreams.jpg'
    },
    {   title:'kevin-grimm-city-lights.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-city-lights.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-city-lights.jpg'
    },
    {   title:'kevin-grimm-city-dairy.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-city-dairy.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-city-dairy.jpg'
    },
    {   title:'kevin-grimm-character-sketch2.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-character-sketch2.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-character-sketch2.jpg'
    },
    {   title:'kevin-grimm-character-designs-two.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-character-designs-two.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-character-designs-two.jpg'
    },
    {   title:'kevin-grimm-character-designs-one.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-character-designs-one.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-character-designs-one.jpg'
    },
    {   title:'kevin-grimm-canadian-express.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-canadian-express.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-canadian-express.jpg'
    },
    {   title:'kevin-grimm-broken-ship.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-broken-ship.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-broken-ship.jpg'
    },
    {   title:'kevin-grimm-broken-city.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-broken-city.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-broken-city.jpg'
    },
    {   title:'kevin-grimm-approaching-storm-clouds.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-approaching-storm-clouds.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-approaching-storm-clouds.jpg'
    },
    {   title:'kevin-grimm-approaching-enemy.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-approaching-enemy.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-approaching-enemy.jpg'
    },
    {   title:'kevin-grimm-alpha9-recon.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-alpha9-recon.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-alpha9-recon.jpg'
    },
    {   title:'kevin-grimm-alpha-9-patrol.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-alpha-9-patrol.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-alpha-9-patrol.jpg'
    },
    {   title:'kevin-grimm-alpha9.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-alpha9.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-alpha9.jpg'
    },
    {   title:'kevin-grimm-airlock1.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-airlock1.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-airlock1.jpg'
    },
    {   title:'kevin-grimm-airlock.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-airlock.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-airlock.jpg'
    },
    {   title:'kevin-grimm-aftermath.jpg',
        thumbnailSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/thumbnails/kevin-grimm-aftermath.jpg',
        fullSizeSrc: 'https://s3.amazonaws.com/kevingrimm.com/img/fullSize/kevin-grimm-aftermath.jpg'
    }
];

module.exports = images;
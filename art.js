const express = require('express');
const authRouter = express.Router();

// A. Online platform for artists to showcase their work
class Artist {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.artworks = [];
    }

    addArtwork(artwork) {
        this.artworks.push(artwork);
    }
}

class Artwork {
    constructor(title, description, imageUrl) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    display() {
        console.log(`${this.title}: ${this.description}\nImage URL: ${this.imageUrl}`);
    }
}

const artists = [
    new Artist("Michelangelo", "Italian sculptor, painter, and architect of the High Renaissance period"),
    new Artist("Georgia O'Keeffe", "American artist known for her paintings of enlarged flowers, New York skyscrapers, and New Mexico landscapes"),
    new Artist("Frida Kahlo", "Mexican painter known for her self-portraits and works inspired by Mexican culture and politics"),
    new Artist("Rembrandt", "Dutch painter and etcher of the Baroque period"),
    new Artist("Edvard Munch", "Norwegian painter known for his iconic painting The Scream"),
];


const artworks = [
    new Artwork("The Last Supper", "A late 15th-century mural painting by Leonardo da Vinci", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/320px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg"),
    new Artwork("Sunflowers", "A series of still life paintings by Vincent van Gogh", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/320px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg"),
    new Artwork("Guernica", "A large mural painting by Pablo Picasso depicting the horrors of the Spanish Civil War", "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/320px-PicassoGuernica.jpg"),
    new Artwork("Impression, Sunrise", "A painting by Claude Monet that inspired the name of the Impressionist movement", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Claude_Monet_-_Impression%2C_Sunrise_-_Google_Art_Project.jpg/320px-Claude_Monet_-_Impression%2C_Sunrise_-_Google_Art_Project.jpg"),
    new Artwork("The Temptation of St. Anthony", "A surrealist painting by Salvador Dali depicting the temptation of St. Anthony", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/The_Temptation_of_St_Anthony_%28Dali%29.jpg/320px-The_Temptation_of_St_Anthony_%28Dali%29.jpg"),
];


authRouter.get('/artist/:index', (req, res) => {
    const index = req.params.index;
    const artist = artists[Math.floor(Math.random() * artists.length)];
    res.json({
        name: artist.name,
        description: artist.description
    });
});

authRouter.get('/artwork/:index', (req, res) => {
    const index = req.params.index;
    const artwork = artworks[Math.floor(Math.random() * artworks.length)];
    res.json({
        title: artwork.title,
        description: artwork.description,
    })
}
);

module.exports = {authRouter};
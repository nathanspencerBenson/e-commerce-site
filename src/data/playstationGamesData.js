import horizon from './playstationGamesImages/horizon.jpeg';
import spiderman from './playstationGamesImages/spiderman.jpg';
import cod from './playstationGamesImages/cod.jpeg';
import valhalla from './playstationGamesImages/valhalla.jpeg';

const playStationGamesData = [
    {
        name: 'Horizon: Forbidden West',
        id: 'forbidden-west',
        category: 'Video Game',
        image: horizon,
        shortDescription: 'Experience Aloy of the Nora’s entire legendary quest to unravel the mysteries of a world ruled by deadly Machines',
        console: 'Playstation 5',
        new: true,
        featured: true,
        saved: false,
        price: 69.99,
        minimumAge: 16,
        releaseDate: 2021,
        quantity: 1

    },
    {
        name: 'Spiderman: Miles Morales',
        id: 'miles-morales',
        category: 'Video Game',
        image: spiderman,
        shortDescription: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        console: 'Playstation 5',
        new: true,
        featured: true,
        saved: false,
        price: 49.99,
        minimumAge: 16,
        releaseDate: 2020,
        quantity: 1

    },
    {
        name: 'COD: Cold war',
        id: 'cold-war',
        category: 'Video Game',
        image: cod,
        shortDescription: 'The iconic black Ops series is back with Call of Duty: Black Ops cold war - the direct sequel to the original and fan-favorite Call of Duty: Black Ops',
        console: 'Playstation 5',
        new: true,
        featured: true,
        saved: false,
        price: 49.99,minimumAge: 18,
        releaseDate: 2020,
        quantity: 1

    },
    {
        name: `Assasin's creed: Valhalla`,
        id: 'valhalla',
        category: 'Video Game',
        image: valhalla,
        shortDescription: `You are Eivor, a fierce Viking warrior raised on Tales of battle and glory. Explore a mysterious and beautiful open world set against the brutal backdrop of England's dark ages`,
        console: 'Playstation 5',
        new: true,
        featured: true,
        saved: false,
        price: 69.99,
        minimumAge:  18,
        releaseDate: 2021,
        quantity: 1

    },


]

export default playStationGamesData;
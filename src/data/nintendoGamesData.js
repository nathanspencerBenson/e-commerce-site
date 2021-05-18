import animalCrossing from './nintendoGamesImages/animal-crossing.jpeg';
import zelda from './nintendoGamesImages/zelda.jpg';
import marioParty from './nintendoGamesImages/mario-party.jpg';

const nintendoGamesData = [
    {
        name: 'Animal Crossing: New Horizons',
        id: 'animal-crossing',
        category: 'Video Game',
        image: animalCrossing,
        shortDescription: `Customise your character and home, and decorate the landscape (with furniture, if you like!), as you create your very own island paradise. Enjoy a variety of relaxing activities like gardening, fishing, decorating, interacting with charming NPCs, and more, as classic Animal Crossing experiences come to life in fun new ways within the deserted-island setting. `,
        console: 'Nintendo Switch',
        new: false,
        featured: true,
        saved: false,
        price: 49.99,
        minimumAge: 3,
        releaseDate: 2019,
        quantity: 1

    },
    {
        name: 'Zelda: Breath of the Wild',
        id: 'zelda',
        category: 'Video Game',
        image: zelda,
        shortDescription: `Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking game in the acclaimed series`,
        console: 'Nintendo Switch',
        new: false,
        featured: true,
        saved: false,
        price: 49.99,
        minimumAge: 12,
        releaseDate: 2019,
        quantity: 1

    },
    {
        name: 'Super Mario Party',
        id: 'super-mario-party',
        category: 'Video Game',
        image: marioParty,
        shortDescription: `The original board game style has been kicked up a notch with deeper strategic elements, like specific Dice Blocks for each character. The game also introduces all-new ways to play, including Joy-Con controller enabled minigames, and new modes to enjoy with family and friends.`,
        console: 'Nintendo Switch',
        new: false,
        featured: false,
        saved: false,
        price: 45.99,
        minimumAge: 3,
        releaseDate: 2020,
        quantity: 1

    },
    {
        name: 'Super Smash Bros',
        id: 'super-smash-bros',
        category: 'Video Game',
        image: marioParty,
        shortDescription: `A new game built for Nintendo switch; Super Smash Bros ultimate lets up to eight players square off in action-packed battles that are all about smashing beloved video game characters off the screen`,
        console: 'Nintendo Switch',
        new: false,
        featured: false,
        saved: false,
        price: 59.99,
        minimumAge: 3,
        releaseDate: 2021,
        quantity: 1

    },
    

];

export default nintendoGamesData
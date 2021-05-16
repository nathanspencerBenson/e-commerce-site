import fifa21 from './xboxGamesImages/fifa21.jpeg';
import watchdogs from './xboxGamesImages/watchdogs.jpeg';
import mortalcombat from './xboxGamesImages/mortalcombat11.jpeg';
import immortals from './xboxGamesImages/immortals.jpeg';



const xboxGamesData = [
    {
        name: 'FIFA 21',
        id: 'fifa-21',
        image: fifa21,
        shortDescription: `Feel Next Level in FIFA 21 on PlayStationⓇ5, Xbox Series X, and Xbox Series S with new features that take The World's Game from visual to visceral.`,
        console: 'Xbox Series X',
        new: false,
        featured: false,
        saved: false,
        price: 69.99,
        minimumAge: 3,
        releaseDate: 2021

    },
    {
        name: 'WATCHDOGS: Legion',
        id: 'watchdogs-legion',
        image: watchdogs,
        shortDescription: `Hacking is your weapon - weaponised London's Tech infrastructure, and unleash dedsec's mastery of technology: hijack armed combat drones, reconstruct past events using augmented reality to discover who is behind the terror attacks`,
        console: 'Xbox Series X',
        new: false,
        featured: true,
        saved: false,
        price: 59.99,
        minimumAge: 18,
        releaseDate: 2020

    },
    {
        name: 'Mortal Combat 11 Ultimate',
        id: 'mortal-combat-11',
        image: mortalcombat,
        shortDescription: `Take control of earthrealm's protectors in the game's two critically acclaimed, time-bending story campaigns as they race to stop kronika from rewinding time and rebooting history`,
        console: 'Xbox Series X',
        new: false,
        featured: true,
        saved: false,
        price: 69.99,
        minimumAge: 16,
        releaseDate: 2021

    },
    {
        name: 'Immortals Fenyx Rising',
        id: 'immortals-fenyx-rising',
        image: immortals,
        shortDescription: `Immortals Fenyx Rising brings grand mythological adventure to life. Play as Fenyx, a new winged demigod on a quest to save the Greek gods and their home from a dark curse. Take on mythological beasts, master the legendary powers of the gods and defeat Typhon, the deadliest Titan in Greek mythology, in an epic fight for the ages`,
        console: 'Xbox Series X',
        new: false,
        featured: false,
        saved: false,
        price: 59.99,
        minimumAge: 12,
        releaseDate: 2020

    },

];

export default xboxGamesData
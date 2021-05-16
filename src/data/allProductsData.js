import { consolesData } from './consolesData';
import  playstationGamesData from './playstationGamesData';
import xboxGamesData from './xboxGamesData';
import nintendoGamesData from './nintendoGamesData';

const products = [
    ...consolesData,
    ...playstationGamesData,
    ...xboxGamesData,
    ...nintendoGamesData
];


export default products;
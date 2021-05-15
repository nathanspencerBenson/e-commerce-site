import playstationImage1 from './consolesImages/playstation5-1.webp';
import playstationImage2 from './consolesImages/playstation5-2.jpeg';
import playstationImage3 from './consolesImages/playstation5-3.jpg';
import switchImage1 from './consolesImages/switch-1.jpeg';
import switchImage2 from './consolesImages/switch-2.jpeg';
import switchImage3 from './consolesImages/switch-3.jpeg';
import xboxImage1 from './consolesImages/xboxx-1.jpeg';
import xboxImage2 from './consolesImages/xboxx-2.png';
import xboxImage3 from './consolesImages/xboxx-3.jpg';


export const consolesData = [
    {
        category: 'Console',
        id: 'playstation5',
        name: 'Playstation 5 - Console',
        price: 449.99,
        image: playstationImage3,
        gallery: [
            playstationImage1,
            playstationImage2,
            playstationImage3
        ],
        shortDescription: [
            
            'hardware ray tracing, ',
            '120 fps, ',
            '8K output, ',
            '825GB Custom SSD'

        ],
        featured: true,
        saved: false,
    },
    {
        category: 'Console',
        id: 'switch',
        name: 'Nintendo Switch - Console',
        price: 349.99,
        image: switchImage1,
        gallery: [
            switchImage1,
            switchImage2,
            switchImage3
        ],
        shortDescription: [
           '6.2" screen, ', 
           '120 fps, ', 
           '9h battery life'

        ],
        featured: true,
        saved: false,
    },
    {
        category: 'Console',
        id: 'xboxX',
        name: 'Xbox Series X - Console',
        price: 499.99,
        image:xboxImage1,
        gallery: [
            xboxImage1,
            xboxImage2,
            xboxImage3
        ],
        shortDescription: [
            'hardware ray tracing, ',
            'Auto HDR, ',
            '4K @ 60fps, ',
            '1TB Custom SSD'

        ],
        featured: true,
        saved: false,
    },
    {
        category: 'Console',
        id: 'switch',
        name: 'Nintendo Switch - Console',
        price: 349.99,
        image: switchImage1,
        gallery: [
            switchImage1,
            switchImage2,
            switchImage3
        ],
        shortDescription: [
           '6.2" screen, ', 
           '120 fps, ', 
           '9h battery life'

        ],
        featured: true,
        saved: false,
    }


]
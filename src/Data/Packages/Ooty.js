import Main from '../../Images/Packages/ooty/Main.jpeg';
import Deer_Park from '../../Images/Packages/ooty/Deer_Park.jpg';
import Doddabetta_Peak from '../../Images/Packages/ooty/Doddabetta_Peak.jpg';
import Emerald_Lake from '../../Images/Packages/ooty/Emerald_Lake.jpg';
import Government_Botanical_Garden from '../../Images/Packages/ooty/Government_Botanical_Garden.jpg';
import Mariamman_Temple from '../../Images/Packages/ooty/Mariamman_Temple.jpg';
import Nilgiri_Mountain_Railway from '../../Images/Packages/ooty/Nilgiri_Mountain_Railway.jpg';
import Ooty_Lake from '../../Images/Packages/ooty/Ooty_Lake.jpg';
import Tribal_Museum from '../../Images/Packages/ooty/Tribal_Museum.jpg';

const CityContent = {
    id: 4,
    ids: '04',
    Heading: 'Ooty',
    title : 'Queen of the Nilgiris',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway."
        },
        {
            id:2,
            content: "Ooty, a charming hill station, is known for its lush tea gardens, Deer Park, Doddabetta Peak, Emerald Lake, Government Botanical Garden, Nigiri Mountain Railway, Ooty Lake, Tribal Museum, and mariamman Temple"
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Deer Park',
        imgSrc: Deer_Park,
        content: 'A serene haven for wildlife enthusiasts, Deer Park in Ooty showcases graceful deer species amidst picturesque surroundings, offering a peaceful escape into nature.',
        distance: '18 km',
        duration: '48 min',
        amount: 700
    },
    {
        id: 2,
        heading: 'Doddabetta Peak',
        imgSrc: Doddabetta_Peak,
        content: 'The highest point in the Nilgiri Hills, Doddabetta Peak provides breathtaking panoramic vistas of the surrounding landscapes, inviting visitors to witness the beauty of Ooty from a lofty perspective.',
        distance: '9 km',
        duration: '28 min',
        amount: 300
    },
    {
        id: 3,
        heading: 'Emerald Lake',
        imgSrc: Emerald_Lake,
        content: 'Nestled in a tranquil valley, Emerald Lake enchants with its calm waters surrounded by lush greenery, making it an idyllic spot for relaxation and a leisurely stroll.',
        distance: '19 km',
        duration: '47 min',
        amount: 700
    },
    {
        id: 4,
        heading: 'Government Botanical Garden',
        imgSrc: Government_Botanical_Garden,
        content: 'A meticulously maintained garden boasting a diverse collection of plants, flowers, and trees, the Government Botanical Garden is a visual delight and a perfect place for nature enthusiasts.',
        distance: '2.5 km',
        duration: '11 min',
        amount: 100
    },
    {
        id: 5,
        heading: 'Mariamman Temple',
        imgSrc: Mariamman_Temple,
        content: 'A revered Hindu temple dedicated to the goddess Mariamman, this spiritual site offers a glimpse into the local religious practices and architecture of Ooty.',
        distance: '250 m',
        duration: '2 min',
        amount: 50
    },
    {
        id: 6,
        heading: "Nilgiri's Mountain Railway",
        imgSrc: Nilgiri_Mountain_Railway,
        content: 'A UNESCO World Heritage Site, the Nilgiri Mountain Railway offers a scenic train journey through winding tracks and lush landscapes, allowing passengers to relish the charm of the Nilgiri Hills.',
        distance: '1.1 km',
        duration: '7 min',
        amount: 80
    },
    {
        id: 7,
        heading: 'Ooty Lake',
        imgSrc: Ooty_Lake,
        content: "A popular recreational spot, Ooty Lake offers boating and serene walks by the water's edge, promising a serene experience amidst the hill station's natural beauty.",
        distance: '1.3 km',
        duration: '4 min',
        amount: 70
    },
    {
        id: 8,
        heading: 'Tribal Museum',
        imgSrc: Tribal_Museum,
        content: "Showcasing the rich cultural heritage of the region's indigenous tribes, the Tribal Museum provides insights into their traditions, art, and way of life.",
        distance: '2.2 km',
        duration: '9 km',
        amount: 100
    }
];

const defaultpackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Mariamman_Temple,
                imgalt : "Mariamman Temple"
            },
            {
                id : 2,
                imgs : Deer_Park,
                imgalt : "Deer Park"
            },
            {
                id : 3,
                imgs : Doddabetta_Peak,
                imgalt : "Doddabetta Peak"
            },
            {
                id : 4,
                imgs : Ooty_Lake,
                imgalt : "Ooty Lake"
            }
        ], 
        content : "Explore the picturesque landscapes of Ooty with our package that includes the spiritual experience at Erattai Mariamman Temple, a rendezvous with wildlife at Deer Park, breathtaking views from Doddabetta Peak, and serene boat rides at Ooty Lake. Dive into the natural beauty and cultural charm of this beloved hill station in a single comprehensive tour.",
        distance : "57 km",
        duration : "2 hours 15 minutes",
        amount : 1200
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Emerald_Lake,
                imgalt : "Emerald Lake"
            },
            {
                id : 2,
                imgs : Government_Botanical_Garden,
                imgalt : "Government Botanical Garden"
            },
            {
                id : 3,
                imgs : Nilgiri_Mountain_Railway,
                imgalt : "Nilgiri Mountain Railway"
            },
            {
                id : 4,
                imgs : Tribal_Museum,
                imgalt : "Tribal Museum"
            },
        ],
        content : "Indulge in the wonders of Ooty with our package, featuring the tranquil beauty of Emerald Lake, the vibrant flora at Government Botanical Garden, a scenic ride on the Nilgiri Mountain Railway, and a glimpse into tribal culture at the Tribal Museum. Immerse yourself in nature, heritage, and unique experiences, all in one memorable journey through this beloved hill station.",
        distance : "47 km",
        duration : "2 hours",
        amount : 1000
    }
];

export { CityContent, packageContent, defaultpackages};
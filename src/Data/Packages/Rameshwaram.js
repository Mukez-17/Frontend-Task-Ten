import Main from '../../Images/Packages/Rameshwaram/Main.jpg';
import Agni_Theertham from '../../Images/Packages/Rameshwaram/Agni_Thertham.jpg';
import Ariyaman_Beach from '../../Images/Packages/Rameshwaram/ariyaman_beach.jpg';
import Dhanushkodi from '../../Images/Packages/Rameshwaram/Dhanushkodi.jpg';
import Lighthouse from '../../Images/Packages/Rameshwaram/Lighthouse.jpg';
import Pamban_Bridge from '../../Images/Packages/Rameshwaram/Pamban_Bridge.jpg';
import Ramanathaswamy_Temple from '../../Images/Packages/Rameshwaram/Ramanathaswamy_Temple.jpg';
import Villoondi_Theertham from '../../Images/Packages/Rameshwaram/Villoondi_theertham.jpg';
import Water_Bird_Sanctuary from '../../Images/Packages/Rameshwaram/Water_Bird_Sanctuary.jpg';

const CityContent = {
    id: 2,
    ids: '02',
    Heading: 'Rameshwaram',
    title : 'The Bridge on the Indian Ocean',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka."
        },
        {
            id:2,
            content: "Rameshwaram is a pilgrimage destination famous for Ramanathaswamy Temple and its sacred bathing ghats. Dhanushkodi, a ghost town near Rameshwaram, adds an element of mystery to the visit. Ramanathaswamy Temple, Agni Theertham, Pamban Bridge, Dhanushkodi, Ariyaman Beach, Light House Villoondi Temple, and Water Bird Sanctuary."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Agni Theertham',
        imgSrc: Agni_Theertham,
        content: 'The pristine shores of Agni Theertham hold religious significance and are believed to purify pilgrims before they enter the Ramanathaswamy Temple.',
        distance: '2 km',
        duration: '7 min',
        amount: 50
    },
    {
        id: 2,
        heading: 'Ariyaman Beach',
        imgSrc: Ariyaman_Beach,
        content: 'A serene and less crowded beach near Rameshwaram, Ariyaman Beach is perfect for relaxation, offering golden sands and clear blue waters.',
        distance: '29 km',
        duration: '39 min',
        amount: 1000
    },
    {
        id: 3,
        heading: 'Dhanushkodi',
        imgSrc: Dhanushkodi,
        content: 'This ghost town near Rameshwaram is known for its eerie beauty, with remnants of a once-thriving town, stunning beaches, and the convergence of the Bay of Bengal and the Indian Ocean.',
        distance: '19 km',
        duration: '23 min',
        amount: 650
    },
    {
        id: 4,
        heading: 'Lighthouse',
        imgSrc: Lighthouse,
        content: 'The Rameshwaram Lighthouse provides panoramic views of the town, coastline, and Pamban Bridge, making it a popular spot for visitors.',
        distance: '19 km',
        duration: '23 min',
        amount: 650
    },
    {
        id: 5,
        heading: 'Pamban Bridge',
        imgSrc: Pamban_Bridge,
        content: 'Connecting Rameshwaram to the mainland, the historic Pamban Bridge is an engineering marvel, offering panoramic views and facilitating the passage of trains and vehicles over the sea.',
        distance: '13 km',
        duration: '21 min',
        amount: 500
    },
    {
        id: 6,
        heading: 'Ramanathaswamy Temple',
        imgSrc: Ramanathaswamy_Temple,
        content: 'Revered as a major pilgrimage site for Hindus, Rameshwaram is famed for its sacred Ramanathaswamy Temple and its role in the epic Ramayana.',
        distance: '1 km',
        duration: '5 min',
        amount: 50
    },
    {
        id: 7,
        heading: 'Villoondi Theertham',
        imgSrc: Villoondi_Theertham,
        content: 'This ancient temple is dedicated to Lord Subramanya and is located on Pamban Island, offering a unique spiritual experience.',
        distance: '7 km',
        duration: '13 min',
        amount: 150
    },
    {
        id: 8,
        heading: 'Water Bird Sanctuary',
        imgSrc: Water_Bird_Sanctuary,
        content: 'Situated in the Pamban Bridge area, this sanctuary is a haven for various migratory and resident bird species, making it a treat for birdwatchers and nature enthusiasts.',
        distance: '2.5 km',
        duration: '10 min',
        amount: 80
    }
];

const defaultpackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Agni_Theertham,
                imgalt : "Agni Theertham"
            },
            {
                id : 2,
                imgs : Water_Bird_Sanctuary,
                imgalt : "Water Bird Sanctuary"
            },
            {
                id : 3,
                imgs : Lighthouse,
                imgalt : "LightHouse"
            },
            {
                id : 4,
                imgs :Pamban_Bridge,
                imgalt : "Pamban Bridge"
            }
        ],
        content : "Embark on a spiritual and adventure-packed journey in Rameshwaram with our package, which includes sacred rituals at Agni Theertham, thrilling water sports at Holy Island, panoramic views from Dhanushkodi Lighthouse, and a mesmerizing walk on the historic Pamban Bridge. Immerse yourself in the spirituality and natural beauty of this holy destination, all in one unforgettable experience.",
        distance : "56 km",
        duration : "1 hours 30 min",
        amount : 1000
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Ramanathaswamy_Temple,
                imgalt : "Ramanathaswamy Temple"
            },
            {
                id : 2,
                imgs : Villoondi_Theertham,
                imgalt : "Villondi Theertham"
            },
            {
                id : 3,
                imgs : Dhanushkodi,
                imgalt : "Dhanushkodi"
            },
            {
                id : 4,
                imgs : Ariyaman_Beach,
                imgalt : "Ariyaman Beach"
            }
        ],
        content : "Explore the spiritual and natural wonders of Rameshwaram with our package, featuring the awe-inspiring Ramanathaswamy Temple, the sacred Villondi Theertham, the mystical landscapes of Dhanushkodi, and the serene beauty of Ariyaman Beach. Dive into the rich history and tranquility of this holy destination, offering a complete experience for travelers seeking both spiritual enlightenment and coastal serenity.",
        distance : "83 km",
        duration : "2 hours",
        amount : 2000
    }
];

export { CityContent, packageContent, defaultpackages};
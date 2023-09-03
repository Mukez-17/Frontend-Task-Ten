import Main from '../../Images/Packages/Kodaikanal/Main.jpg';
import Bear_Shola_Falls from '../../Images/Packages/Kodaikanal/Bear_Shola_Falls.jpg';
import Byrant_Park from '../../Images/Packages/Kodaikanal/Byrant_Park.jpg';
import Dolphins_Nose from '../../Images/Packages/Kodaikanal/Dolphins_Nose.jpg';
import Guna_Cave from '../../Images/Packages/Kodaikanal/Guna_Cave.jpg';
import Kodaikanal_Lake from '../../Images/Packages/Kodaikanal/Kodaikanal_Lake.jpg';
import Moir_Point from '../../Images/Packages/Kodaikanal/Moir_Point.jpg';
import Pillar_Rocks from '../../Images/Packages/Kodaikanal/Pillar_Rocks.jpg';
import Silver_Cascade_Falls from '../../Images/Packages/Kodaikanal/Silver_Cascade_Falls.jpg';

const CityContent = {
    id: 3,
    ids: '03',
    Heading: 'Kodaikanal',
    title : 'The Princess of Hill Stations',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means 'the gift of the forests'."
        },
        {
            id:2,
            content: "Kodaikanal, the 'Princess of Hill Stations', offers serene landscapes, Bear Shola Falls, Bryant Park, Dolphin Nose, Guna Cave, Moir Point, Kodaikanal Lake, Pillar Rocks, and Silver Cascoade Falls."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Bear Shola Falls',
        imgSrc: Bear_Shola_Falls,
        content: 'A serene waterfall surrounded by lush greenery, Bear Shola Falls offers a refreshing escape and a peaceful atmosphere for nature lovers to enjoy.',
        distance: '1.5 km',
        duration: '6 min',
        amount: 50
    },
    {
        id: 2,
        heading: 'Byrant Park',
        imgSrc: Byrant_Park,
        content: 'A vibrant botanical garden where colorful flowers and well-maintained lawns create a delightful setting for leisurely strolls and picnics.',
        distance: '1.5 km',
        duration: '7 min',
        amount: 50
    },
    {
        id: 3,
        heading: "Dolphin's Nose",
        imgSrc: Dolphins_Nose,
        content: "This iconic rock formation juts out into the air resembling a dolphin's nose, providing an incredible viewpoint to admire the panoramic beauty of the surrounding valleys and hills.",
        distance: '6 km',
        duration: '23 min',
        amount: 250
    },
    {
        id: 4,
        heading: 'Guna Cave',
        imgSrc: Guna_Cave,
        content: 'A mysterious and intriguing cave with a history of ancient legends, Guna Cave sparks curiosity and offers an adventurous experience for those exploring its unique rock formations.',
        distance: '10km',
        duration: '28 min',
        amount: 400
    },
    {
        id: 5,
        heading: 'Kodaikanal Lake',
        imgSrc: Kodaikanal_Lake,
        content: 'The heart of the hill station, Kodaikanal Lake invites visitors to experience boating and leisurely walks while surrounded by the natural beauty of the hills.',
        distance: '2.3 km',
        duration: '11 min',
        amount: 150
    },
    {
        id: 6,
        heading: 'Moir Point',
        imgSrc: Moir_Point,
        content: "Named after Sir Thomas Moir, this scenic spot offers mesmerizing views of the deep valleys and distant landscapes, allowing visitors to immerse themselves in the tranquility of Kodaikanal's natural wonders.",
        distance: '8.4 km',
        duration: '24 min',
        amount: 350
    },
    {
        id: 7,
        heading: 'Pillar Rocks',
        imgSrc: Pillar_Rocks,
        content: 'Majestic rock formations that tower into the sky, offering an awe-inspiring sight and a reminder of the geological wonders of the region.',
        distance: '11 km',
        duration: '32 min',
        amount: 500
    },
    {
        id: 8,
        heading: 'Silver Cascade Falls',
        imgSrc: Silver_Cascade_Falls,
        content: 'A picturesque waterfall that descends gracefully amidst the mountains, creating a tranquil and soothing ambiance for visitors to enjoy.',
        distance: '6.8 km',
        duration: '18 min',
        amount: 300
    }
];

const defaultpackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Bear_Shola_Falls,
                imgalt : "Bear Shola Falls"
            },
            {
                id : 2,
                imgs : Dolphins_Nose,
                imgalt : "Dolphin's Nose"
            },
            {
                id : 3,
                imgs : Pillar_Rocks,
                imgalt : "Pillar Rocks"
            },
            {
                id : 4,
                imgs : Kodaikanal_Lake,
                imgalt : "Kodaikanal Lake"
            }
        ], 
        content : "Experience the enchanting beauty of Kodaikanal with our package, which includes the serene Bear Shola Falls, the breathtaking Dolphins Nose viewpoint, the tranquil Kodaikanal Lake for boating, and the majestic Pillar Rocks offering panoramic vistas. Immerse yourself in nature's wonders and breathtaking landscapes in this idyllic hill station, perfect for a rejuvenating escape.",
        distance : "26 km",
        duration : "1 hours 22 minutes",
        amount : 1000
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Byrant_Park,
                imgalt : "Bryant Park"
            },
            {
                id : 2,
                imgs : Guna_Cave,
                imgalt : "Guna_Cave"
            },
            {
                id : 3,
                imgs : Moir_Point,
                imgalt : "Moir Point"
            },
            {
                id : 4,
                imgs : Silver_Cascade_Falls,
                imgalt : "Silver Cascade Falls"
            },
        ],
        content : "Discover the scenic charm of Kodaikanal with our package featuring the beautifully landscaped Bryant Park, the mysterious Guna Cave, the mesmerizing Moir Point for panoramic views, and the cascading beauty of Silver Cascade Falls. Enjoy a delightful journey through nature's delights and captivating sights in this picturesque hill station.",
        distance : "40 km",
        duration : "2 hours",
        amount : 2000
    }
];

export { CityContent, packageContent, defaultpackages};
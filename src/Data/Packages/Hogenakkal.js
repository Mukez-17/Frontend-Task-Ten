import Main from '../../Images/Packages/Hogenakkal/Main.jpg';
import Cauvery_River from '../../Images/Packages/Hogenakkal/Cauvery_River.jpg';
import Cini_Waterfalls from '../../Images/Packages/Hogenakkal/Cini_Waterfalls.jpg';
import Hogenakkal_Falls from '../../Images/Packages/Hogenakkal/Hogenakkal_Falls.jpg';
import Krishnagiri_Dam from '../../Images/Packages/Hogenakkal/Krishnagiri_Dam.jpg';
import Melagiri_Hills from '../../Images/Packages/Hogenakkal/Melagiri_Hills.jpg';
import Mettur_Dam from '../../Images/Packages/Hogenakkal/Mettur_Dam.jpg';
import Panchapalli_Dam from '../../Images/Packages/Hogenakkal/Panchapalli_Dam.jpg';
import Theerthamalai_Temple from '../../Images/Packages/Hogenakkal/Theerthamalai_Temple.jpg';

const CityContent = {
    id: 10,
    ids: '10',
    Heading: 'Hogenakkal',
    title : 'The one that will take your breath away',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore."
        },
        {
            id:2,
            content: "Hogenakkal, a natural wonder in Tamil Nadu, boasts these captivating features: cauvery River, Cini Waterfalls, Hogenakkal Falls, Krishnagiri Dam, Melagiri Hills, Mettur Dam, Panchpalli Dam, and  Theerthamalai Temple."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Cauvery River',
        imgSrc: Cauvery_River,
        content: 'The lifeline of the region, the Cauvery River flows through Hogenakkal, adding to the area`s scenic beauty and providing opportunities for water-based activities.',
        distance: '72 km',
        duration: '1 hours 51 min',
        amount: 400
    },
    {
        id: 2,
        heading: 'Cini Waterfalls',
        imgSrc: Cini_Waterfalls,
        content: 'Also known as Cini Falls, these cascades offer a mesmerizing sight and a chance to enjoy the soothing sound of flowing water.',
        distance: '350 m',
        duration: '2 min',
        amount: 50
    },
    {
        id: 3,
        heading: 'Hogenakkal Falls',
        imgSrc: Hogenakkal_Falls,
        content: 'Often called the "Niagara of India," Hogenakkal Falls enthralls with its powerful cascades, surrounded by lush greenery and providing boat rides along the river.',
        distance: '70 m',
        duration: '1 min',
        amount: 40
    },
    {
        id: 4,
        heading: 'Krishnagiri Dam',
        imgSrc: Krishnagiri_Dam,
        content: 'A tranquil reservoir formed by the dam, Krishnagiri Dam enhances the natural beauty of the region and offers a serene environment for visitors.',
        distance: '91 km',
        duration: '1 hours 51 min',
        amount: 500
    },
    {
        id: 5,
        heading: 'Melagiri Hills',
        imgSrc: Melagiri_Hills,
        content: 'These hills add to the scenic charm of Hogenakkal, attracting trekkers and nature enthusiasts with their verdant landscapes and panoramic views.',
        distance: '48 km',
        duration: '1 hours 10 min',
        amount: 350
    },
    {
        id: 6,
        heading: 'Mettur Dam',
        imgSrc: Mettur_Dam,
        content: 'Located nearby, Mettur Dam also offers a picturesque reservoir and is a significant water source for the region.',
        distance: '63 km',
        duration: '1 hours 24 min',
        amount: 250
    },
    {
        id: 7,
        heading: 'Panchapalli Dam',
        imgSrc: Panchapalli_Dam,
        content: 'Another dam in the area, Panchapalli Dam contributes to the region`s water management and provides a scenic backdrop.',
        distance: '78 km',
        duration: '1 hours 47 min',
        amount: 400
    },
    {
        id: 8,
        heading: 'Theerthamalai Temple',
        imgSrc: Theerthamalai_Temple,
        content: 'A spiritual site atop Theerthamalai Hill, this temple offers a tranquil atmosphere and panoramic views of the surrounding landscapes.',
        distance: '102 km',
        duration: '2 hours 13 min',
        amount: 500
    }
];

const defaultpackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Cini_Waterfalls,
                imgalt : "Cini Waterfalls"
            },
            {
                id : 2,
                imgs : Cauvery_River,
                imgalt : "Cauvery River"
            },
            {
                id : 3,
                imgs : Mettur_Dam,
                imgalt : "Mettur Dam"
            },
            {
                id : 4,
                imgs : Theerthamalai_Temple,
                imgalt : "Theerthamalai Temple"
            }
        ], 
        content : "Embark on a nature-filled adventure in Hogenakkal with our package, which includes the breathtaking Cini Waterfalls, a thrilling boat ride along the Cauvery River, a visit to the impressive Mettur Dam, and spiritual solace at Theerthamalai Temple. Experience the raw beauty of this unspoiled natural paradise and the serenity of its sacred sites in one unforgettable journey.",
        distance : "300 km",
        duration : "10 hours",
        amount : 1500
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Hogenakkal_Falls,
                imgalt : "Hogenakkal Falls"
            },
            {
                id : 2,
                imgs : Krishnagiri_Dam,
                imgalt : "Krishnagiri Dam"
            },
            {
                id : 3,
                imgs : Melagiri_Hills,
                imgalt : "Melagiri Hills"
            },
            {
                id : 4,
                imgs : Panchapalli_Dam,
                imgalt : "Panchapalli Dam"
            },
        ],
        content : "Embark on an adventurous exploration of Hogenakkal with our package, highlighting the awe-inspiring Hogenakkal Falls, the serene Krishnagiri Dam, the lush Melagiri Hills for trekking, and the picturesque Panchapalli Dam. Experience the raw beauty of nature and thrilling activities in this scenic destination, all in one enriching trip.",
        distance : "400 km",
        duration : "12 hours",
        amount : 2000
    }
];

export { CityContent, packageContent, defaultpackages};
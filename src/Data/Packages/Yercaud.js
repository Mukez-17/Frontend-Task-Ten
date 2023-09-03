import Main from '../../Images/Packages/Yercaud/Main.jpeg';
import Loop_32km_Road from '../../Images/Packages/Yercaud/32KM_Loop_Road.jpg';
import Bear_Cave from '../../Images/Packages/Yercaud/Bear_Cave.jpg';
import Botanical_Garden from '../../Images/Packages/Yercaud/Botanical_Garden.png';
import Kiliyur_Falls from '../../Images/Packages/Yercaud/Kiliyur_Falls.jpg';
import Ladys_Seat from '../../Images/Packages/Yercaud/Ladys_Seat.jpg';
import Pagoda_Point from '../../Images/Packages/Yercaud/Pagoda_Point.jpeg';
import Silk_Farm_and_Rose_Garden from '../../Images/Packages/Yercaud/Silk_Farm_and_Rose_Garden.jpg';
import Yercaud_Lake from '../../Images/Packages/Yercaud/Yercaud_Lake.jpg';

const CityContent = {
    id: 8,
    ids: '08',
    Heading: 'Yercaud',
    title : 'The Land of Seven Forests',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather."
        },
        {
            id:2,
            content: "Yercaud, a charming hill station in Tamil Nadu, offers these delightful attractions: 32KM Loop Road, Bear Cave, Botanical Garden,Kiliyur Falls, Ladys Seat, Pakoda Point, Silk Farm and Rose Garden, and Yercaud Lake."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: '32Km Loop Road',
        imgSrc: Loop_32km_Road,
        content: 'A scenic drive that encircles Yercaud, offering picturesque views of the lush landscapes and allowing travelers to explore the beauty of the region.',
        distance: '4.3 km',
        duration: '11 min',
        amount: 100
    },
    {
        id: 2,
        heading: 'Bear Cave',
        imgSrc: Bear_Cave,
        content: 'A natural cave formation, Bear Cave captivates with its unique rock formations and serves as a fascinating site for exploration.',
        distance: '7.3 km',
        duration: '17 min',
        amount: 200
    },
    {
        id: 3,
        heading: 'Botanical Garden',
        imgSrc: Botanical_Garden,
        content: "A serene sanctuary of diverse flora, Yercaud's Botanical Garden provides a relaxing environment for nature enthusiasts to admire various plant species.",
        distance: '1.7 km',
        duration: '7 min',
        amount: 50
    },
    {
        id: 4,
        heading: 'Killiyur Falls',
        imgSrc: Kiliyur_Falls,
        content: 'A captivating waterfall set amidst the greenery, Kiliyur Falls entices trekkers and nature lovers with its tranquil beauty.',
        distance: '3.9 km',
        duration: '14 min',
        amount: 100
    },
    {
        id: 5,
        heading: "Lady's Seat",
        imgSrc: Ladys_Seat,
        content: "A vantage point offering panoramic views of the valley below, Lady's Seat is a perfect spot to witness breathtaking sunsets and the town's surroundings.",
        distance: '1.6 km',
        duration: '6 min',
        amount: 50
    },
    {
        id: 6,
        heading: 'Pakoda Point',
        imgSrc: Pagoda_Point,
        content: 'An ideal stop for a quick snack, Pakoda Point serves delectable treats while offering a lovely view of the nearby hills.',
        distance: '2.3 km',
        duration: '6 min',
        amount: 50
    },
    {
        id: 7,
        heading: 'Silk Farm and Rose Garden',
        imgSrc: Silk_Farm_and_Rose_Garden,
        content: 'A haven of blooming roses, this garden showcases an array of colorful and fragrant rose varieties, making it a delight for flower enthusiasts.',
        distance: '1.5 km',
        duration: '7 min',
        amount: 50
    },
    {
        id: 8,
        heading: "Yercaud's Lake",
        imgSrc: Yercaud_Lake,
        content: 'The heart of Yercaud, this serene lake provides boating opportunities and a peaceful ambiance for visitors to enjoy the natural beauty of the hill station.',
        distance: '1.3 km',
        duration: '4 min',
        amount: 50
    }
];

const defaultpackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Botanical_Garden,
                imgalt : "Botanical Garden"
            },
            {
                id : 2,
                imgs : Ladys_Seat,
                imgalt : "Lady's Seat"
            },
            {
                id : 3,
                imgs : Kiliyur_Falls,
                imgalt : "Kiliyur Falls"
            },
            {
                id : 4,
                imgs : Loop_32km_Road,
                imgalt : "32 km Loop Road"
            }
        ], 
        content : "Embark on a captivating journey through Ooty with our package, highlighting the exquisite Government Botanical Garden, the breathtaking views from Lady's Seat, the enchanting Kiliyur Falls, and the scenic drive along the 32 km Loop Road. Immerse yourself in the natural beauty and charming vistas of this beloved hill station, all in one memorable adventure.",
        distance : "13 km",
        duration : "2 hours",
        amount : 1000
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Pagoda_Point,
                imgalt : "Pagoda Point"
            },
            {
                id : 2,
                imgs : Silk_Farm_and_Rose_Garden,
                imgalt : "Silk Farm and Rose Garden"
            },
            {
                id : 3,
                imgs : Yercaud_Lake,
                imgalt : "Yercaud Lake"
            },
            {
                id : 4,
                imgs : Bear_Cave,
                imgalt : "Bear Cave"
            },
        ],
        content : "Experience the charm of Ooty with our package that includes the serene Pagoda Point, the vibrant Silk Farm and Rose Garden, a tranquil visit to Yercaud Lake, and an adventure exploring the Bear Cave. Dive into nature, culture, and adventure in one unforgettable trip through this delightful hill station.",
        distance : "20 km",
        duration : "2 hours",
        amount : 2000
    }
];

export { CityContent, packageContent, defaultpackages};
import Main from '../../Images/Packages/Madurai/Main.jpg';
import Azhagar_Kovil from '../../Images/Packages/Madurai/Azhagar_Kovil.jpg';
import Gandhi_Memorial_Museum from '../../Images/Packages/Madurai/Gandhi_Memorial_Museum.jpg';
import Koodal_Azhagar_Temple from '../../Images/Packages/Madurai/Koodal_Azhagar_Temple.jpg';
import Meenakshi_Amman_Temple from '../../Images/Packages/Madurai/Meenakshi_Amman_Temple.jpg';
import Thirumalai_Nayakar_Mahal from '../../Images/Packages/Madurai/Thirumalai_Nayakar_Mahal.jpg';
import Thiruparankundram_Temple from '../../Images/Packages/Madurai/Thiruparankundram_Temple.jpg';
import Vandiyur_Mariamman_Teppakulam from '../../Images/Packages/Madurai/Vandiyur_Mariamman_Teppakulam.jpg';
import Yanaimalai from '../../Images/Packages/Madurai/Yanaimalai.jpg';

const CityContent = {
    id: 7,
    ids: '07',
    Heading: 'Madurai',
    title : 'The Lotus City',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar."
        },
        {
            id:2,
            content: "Madurai is known for the awe-inspiring Meenakshi Amman Temple, showcasing intricate Dravidian architecture. Thirumalai Nayakkar Palace and Gandhi Memorial Museum are notable attractions, Alagar Kovil, Kudal Alagar, Meenakshi Temple, Thirumalai Nayakkar Mahal, Thiruparankundram Temple, Vandiyur Mariamman Teppakulam, and Yanaimalai."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Azhagar Kovil',
        imgSrc: Azhagar_Kovil,
        content: 'A revered temple dedicated to Lord Vishnu, nestled in the Alagar Hills, showcasing intricate sculptures and a serene atmosphere.',
        distance: '25 km',
        duration: '42 min',
        amount: 200
    },
    {
        id: 2,
        heading: 'Gandhi Memorial Museum',
        imgSrc: Gandhi_Memorial_Museum,
        content: "Dedicated to Mahatma Gandhi, the museum preserves his life and teachings through exhibits and artifacts, offering insights into India's struggle for independence.",
        distance: '3.1 km',
        duration: '9 min',
        amount: 50
    },
    {
        id: 3,
        heading: 'Koodal Azhagar Temple',
        imgSrc: Koodal_Azhagar_Temple,
        content: 'A picturesque temple complex dedicated to Lord Vishnu, known for its stunning architecture and spiritual significance.',
        distance: '2.2 km',
        duration: '10 min',
        amount: 50
    },
    {
        id: 4,
        heading: 'Meenakshi Amman Temple',
        imgSrc: Meenakshi_Amman_Temple,
        content: 'A world-renowned temple complex dedicated to Goddess Meenakshi and Lord Sundareswarar, adorned with intricate carvings and vibrant sculptures.',
        distance: '1.1 km',
        duration: '5 min',
        amount: 40
    },
    {
        id: 5,
        heading: 'Thirumalai Nayakar Mahal',
        imgSrc: Thirumalai_Nayakar_Mahal,
        content: 'A splendid palace showcasing Indo-Saracenic architecture, offering a glimpse into the opulent lifestyle of the past.',
        distance: '1.5 km',
        duration: '7 min',
        amount: 50
    },
    {
        id: 6,
        heading: 'Thiruparankundram Temple',
        imgSrc: Thiruparankundram_Temple,
        content: 'An ancient rock-cut temple dedicated to Lord Murugan, perched on a hill and boasting a blend of architectural styles.',
        distance: '9 km',
        duration: '25 min',
        amount: 150
    },
    {
        id: 7,
        heading: 'Vandiyur Mariamman Teppakulam',
        imgSrc: Vandiyur_Mariamman_Teppakulam,
        content: 'A massive tank with a temple in its center, famous for its annual float festival and vibrant celebrations.',
        distance: '4.3 km',
        duration: '10 min',
        amount: 100
    },
    {
        id: 8,
        heading: 'Yanaimalai',
        imgSrc: Yanaimalai,
        content: 'A hillock with an ancient Jain temple, Yanaimalai presents a serene setting for spiritual seekers and history enthusiasts alike.',
        distance: '16 km',
        duration: '31 min',
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
                imgs : Azhagar_Kovil,
                imgalt : "Azhagar Kovil"
            },
            {
                id : 2,
                imgs : Koodal_Azhagar_Temple,
                imgalt : "Koodal Azhagar Temple"
            },
            {
                id : 3,
                imgs : Meenakshi_Amman_Temple,
                imgalt : "Meenakshi Amman Temple"
            },
            {
                id : 4,
                imgs : Thiruparankundram_Temple,
                imgalt : "Thiruparankundram Temple"
            }
        ], 
        content : "Embark on a spiritual journey through Madurai with our package that includes the divine Azhagar Kovil, the serene Koodal Azhagar Temple, the magnificent Meenakshi Amman Temple with its intricate architecture, and the historic Thiruparankundram Temple. Immerse yourself in the rich culture and spirituality of Madurai, experiencing the essence of this ancient city in a single comprehensive tour.",
        distance : "45 km",
        duration : "3 hours",
        amount : 1000
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Gandhi_Memorial_Museum,
                imgalt : "Gandhi Memorial Museum"
            },
            {
                id : 2,
                imgs : Thirumalai_Nayakar_Mahal,
                imgalt : "Thirumalai Nayakar Mahal"
            },
            {
                id : 3,
                imgs : Vandiyur_Mariamman_Teppakulam,
                imgalt : "Vandiyur Mariamman Teppakulam"
            },
            {
                id : 4,
                imgs : Yanaimalai,
                imgalt : "Yanai Malai"
            },
        ],
        content : "Discover the cultural richness of Madurai with our package, showcasing the historical insights at Gandhi Memorial Museum, the grandeur of Thirumalai Nayakar Mahal, the divine spectacle of Vandiyur Mariamman Teppakulam, and the spiritual retreat to Yanaimalai. Immerse yourself in the city's heritage, architecture, and spirituality, all in one captivating journey.",
        distance : "35 km",
        duration : "3 hours",
        amount : 1500
    }
];

export { CityContent, packageContent, defaultpackages};
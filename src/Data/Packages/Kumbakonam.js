import Main from '../../Images/Packages/Kumbakonam/Main.jpg';
import Adi_Kumbeswarar_Temple from '../../Images/Packages/Kumbakonam/Adi_Kumbeswarar_Temple.jpg';
import Airavatesvara_Temple from '../../Images/Packages/Kumbakonam/Airavatesvara_Temple.jpg';
import Chakrapani_Temple from '../../Images/Packages/Kumbakonam/Chakrapani_Temple.jpeg';
import Mahamaham_Tank from '../../Images/Packages/Kumbakonam/Mahamaham_Tank.jpeg';
import Nageswaran_Temple from '../../Images/Packages/Kumbakonam/Nageswaran_Temple.jpg';
import Sarangabani_Temple from '../../Images/Packages/Kumbakonam/Sarangabani_Temple.jpg';
import Swamimalai_Murugan_Temple from '../../Images/Packages/Kumbakonam/Swamimalai_Murugan_Temple.jpg';
import Thenupuriswara_Temple from '../../Images/Packages/Kumbakonam/Thenupuriswarar_Temple.jpg';

const CityContent = {
    id: 6,
    ids: '06',
    Heading: 'Kumbakonam',
    title : 'The Cambridge of India',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism."
        },
        {
            id:2,
            content: "Kumbakonam boasts magnificent temples like Adi kumbeshwar Temple, Airaveatesvara Temple, Chakrapani Temple, Mahamaham Tank, Nageshwaran Temple, Sarangapani Temple, Swamimalai Murugan Temple, Thenupuriswarar Temple."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Adi Kumbeshwara Temple',
        imgSrc: Adi_Kumbeswarar_Temple,
        content: 'A revered Shiva temple known for its Maha Maham festival and intricate Dravidian architecture, attracting devotees and history enthusiasts alike.',
        distance: '1.5 km',
        duration: '6 min',
        amount: 50
    },
    {
        id: 2,
        heading: 'Airavatesvara Temple',
        imgSrc: Airavatesvara_Temple,
        content: 'An UNESCO-listed temple dedicated to Lord Shiva, featuring intricate carvings and a majestic stone chariot, showcasing the region`s architectural brilliance.',
        distance: '4.4 km',
        duration: '13 min',
        amount: 80
    },
    {
        id: 3,
        heading: 'Chakrapani Temple',
        imgSrc: Chakrapani_Temple,
        content: 'A significant Vaishnavite temple where Lord Vishnu is worshipped with a Sudarshana Chakra, symbolizing divine protection.',
        distance: '1.8 km',
        duration: '6 min',
        amount: 50
    },
    {
        id: 4,
        heading: 'Mahamaham Tank',
        imgSrc: Mahamaham_Tank,
        content: 'The sacred tank where the Mahamaham festival takes place every 12 years, drawing pilgrims to take a holy dip and partake in spiritual rituals.',
        distance: '850 m',
        duration: '3 min',
        amount: 40
    },
    {
        id: 5,
        heading: 'Nageswaran Temple',
        imgSrc: Nageswaran_Temple,
        content: 'Dedicated to Lord Shiva in the form of Nageshwaran, this ancient temple showcases stunning stone carvings and a serene ambiance.',
        distance: '700 m',
        duration: '3 min',
        amount: 40
    },
    {
        id: 6,
        heading: 'Saragabani Temple',
        imgSrc: Sarangabani_Temple,
        content: 'Among the Divya Desams, this Vishnu temple stands as an architectural marvel, with intricate carvings and a majestic tower.',
        distance: '1.1 km',
        duration: '5 min',
        amount: 70
    },
    {
        id: 7,
        heading: 'Swamimalai Murugan Temple',
        imgSrc: Swamimalai_Murugan_Temple,
        content: 'A significant Murugan temple atop a hill, known for its "Aarupadaiveedu" status and providing breathtaking views of the surroundings.',
        distance: '7.2 km',
        duration: '20 min',
        amount: 150
    },
    {
        id: 8,
        heading: 'Thenupuriswarar Temple',
        imgSrc: Thenupuriswara_Temple,
        content: 'A historic Shiva temple with intricate sculptures, offering visitors a glimpse into the region`s rich religious and artistic heritage.',
        distance: '7.2 km',
        duration: '20 min',
        amount: 150
    }
];

const defaultpackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Adi_Kumbeswarar_Temple,
                imgalt : "Adi Kumbeswarar Temple"
            },
            {
                id : 2,
                imgs : Sarangabani_Temple,
                imgalt : "Sarangabani Temple"
            },
            {
                id : 3,
                imgs : Mahamaham_Tank,
                imgalt : "Mahamaham Tank"
            },
            {
                id : 4,
                imgs : Swamimalai_Murugan_Temple,
                imgalt : "Swamimalai Murugan Temple"
            }
        ], 
        content : "Embark on a spiritual voyage through Kumbakonam with our package, which includes visits to the ancient Adi Kumbeswarar Temple, the sacred Srangabani Temple, the historic Mahamaham Tank, and the divine Swamimalai Murugan Temple. Immerse yourself in the rich religious heritage of this town, known for its temples and cultural significance, all in one comprehensive journey.",
        distance : "12 km",
        duration : "3 hours",
        amount : 1000
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Airavatesvara_Temple,
                imgalt : "Airavatesvara Temple"
            },
            {
                id : 2,
                imgs : Chakrapani_Temple,
                imgalt : "Chakrapani Temple"
            },
            {
                id : 3,
                imgs : Nageswaran_Temple,
                imgalt : "Nageswaran Temple"
            },
            {
                id : 4,
                imgs : Thenupuriswara_Temple,
                imgalt : "Thenupuriswara Temple"
            },
        ],
        content : "Uncover the spiritual richness of Kumbakonam with our package, featuring the magnificent Airavatesvara Temple, the historic Chakrabani Temple, the revered Nageswarar Temple, and the sacred Thenupuriswara Temple. Immerse yourself in a journey through the architectural marvels and deep-rooted spirituality of this temple town, offering a profound cultural experience.",
        distance : "15 km",
        duration : "4 hours",
        amount : 2000
    }
];

export { CityContent, packageContent, defaultpackages};
import Main from '../../Images/Packages/Chennai/Main.jpg';
import Guindy_National_Park from '../../Images/Packages/Chennai/Guindy_National_Park.jpg';
import Kapaleeswarar_Temple from '../../Images/Packages/Chennai/Kapaleeswarar_Temple.jpg';
import Mahabalipuram from '../../Images/Packages/Chennai/Mahabalipuram.jpg';
import Marina_Beach from '../../Images/Packages/Chennai/Marina_Beach.jpg';
import Mylapore from '../../Images/Packages/Chennai/Mylapore.jpg';
import Semmozhi_Poonga from '../../Images/Packages/Chennai/Semmozhi_Poonga.jpg';
import Vadapalani_Murugan_Temple from '../../Images/Packages/Chennai/Vadapalani_murugan_temple.jpg';
import Valluvar_Kootam from '../../Images/Packages/Chennai/Valluvar_Kottam.jpg';

const CityContent = {
    id: 1,
    ids: '01',
    Heading: 'Chennai',
    title : 'The Detroit Of India',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle."
        },
        {
            id:2,
            content: "Chennai, the capital city of Tamil Nadu, is a bustling metropolis with a mix of modernity and history. Guindy National Park, Kapaleeshwarar Temple, Mahabalipuram, Marina Beach, Mylapore, Semmozhi poonga, Vadapalani, and Valluvar Kottam are some iconic landmarks. The city offers cultural events, shopping, and a vibrant food scene."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Guindy National Park',
        imgSrc: Guindy_National_Park,
        content: "Guindy National Park is famous for being one of the smallest national parks in India and for its urban location within Chennai city.",
        distance: '14 km',
        duration:'40 min',
        amount: 200
    },
    {
        id: 2,
        heading: 'Kapaleeswarar Temple',
        imgSrc: Kapaleeswarar_Temple,
        content: 'The Kapaleeshwarar Temple, located in Chennai, India, is famous for its stunning Dravidian architecture, intricate sculptures, and vibrant religious rituals.',
        distance: '9 km',
        duration:' 26 min',
        amount:180
    },
    {
        id: 3,
        heading: 'Mahabalipuram',
        imgSrc: Mahabalipuram,
        content: 'Renowned for its ancient rock-cut temples and sculptures, Mahabalipuram is a UNESCO World Heritage site and a testament to ancient Pallava architecture.',
        distance: '60 km',
        duration: '2 hours',
        amount: 500
    },
    {
        id: 4,
        heading: 'Marina Beach',
        imgSrc: Marina_Beach,
        content: 'As one of the longest urban beaches in the world, Marina Beach is a popular spot for leisurely walks, local street food, and enjoying breathtaking sunsets.',
        distance: '3 km',
        duration: '11 min',
        amount : 100
    },
    {
        id: 5,
        heading: 'Mylapore',
        imgSrc: Mylapore,
        content: "The cultural heritage, traditional architecture, and the Kapaleeshwarar Temple, showcasing the city's historical and spiritual essence.",
        distance: '9 km',
        duration: '24 min',
        amount: 150
    },
    {
        id: 6,
        heading: 'Semmozhi Poonga',
        imgSrc: Semmozhi_Poonga,
        content: 'A lush botanical garden in the heart of Chennai, Semmozhi Poonga is known for its diverse plant species, serene ambiance, and educational value.',
        distance: '6 km',
        duration: '20 min',
        amount: 125
    },
    {
        id: 7,
        heading: 'Vadapalani Murugan Temple',
        imgSrc: Vadapalani_Murugan_Temple,
        content: 'Dedicated to Lord Murugan, this temple is famous for its intricate architecture, spiritual significance, and vibrant festivals that attract devotees from all over.',
        distance: '10 km',
        duration: '37 min',
        amount: 250
    },
    {
        id: 8,
        heading: 'Valluvar Kottam',
        imgSrc: Valluvar_Kootam,
        content: 'A monument dedicated to the Tamil poet and philosopher Thiruvalluvar, Valluvar Kottam is notable for its unique architectural design and as a symbol of Tamil culture and literature.',
        distance: '6.5km',
        duration: '19 min',
        amount: 110
    }
];

const defaultPackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Kapaleeswarar_Temple,
                imgalt : "Kapleeswarar Temple"
            },
            {
                id : 2,
                imgs : Marina_Beach,
                imgalt : "Marina Beach"
            },
            {
                id : 3,
                imgs : Guindy_National_Park,
                imgalt : "Guindy National Park"
            },
            {
                id : 4,
                imgs : Valluvar_Kootam,
                imgalt : "Valluvar Kottam"
            }
        ],
        content : 'Discover the essence of Chennai with our package that combines cultural exploration and natural beauty. Visit the historic Kapaleeshwarar Temple, relax at the iconic Marina Beach, explore the wildlife at Guindy National Park, and admire the architectural beauty of Valluvar Kootam. Experience the best of Chennai in one comprehensive tour.',
        distance : '32 km',
        duration : '2 hours',
        amount : 1000
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Vadapalani_Murugan_Temple,
                imgalt : "Vadapalani Murugan Temple"
            },
            {
                id : 2,
                imgs : Semmozhi_Poonga,
                imgalt : "Semmozhi Poonga"
            },
            {
                id : 3,
                imgs : Mylapore,
                imgalt : "Mylapore"
            },
            {
                id : 4,
                imgs : Mahabalipuram,
                imgalt : "Mahabalipuram"
            }
        ],
        content : "Embark on a captivating journey through Chennai with our package that includes the divine Vadapalani Murugan Temple, the serene Semmozhi Poonga botanical garden, the cultural richness of Mylapore, and the UNESCO-listed heritage site of Mahabalipuram. Explore spirituality, nature, history, and art in one comprehensive tour, immersing yourself in the essence of Chennai's diverse attractions.",
        distance : '68 km',
        duration : '3 hours',
        amount : 2000
    }
];

export { CityContent, packageContent, defaultPackages};
import Main from '../../Images/Packages/Kanyakumari/Main.png';
import Bagavathy_Amman_Temple from '../../Images/Packages/Kanyakumari/Bhagavathy_Amman_Temple.jpg';
import Gandhi_Mandapam from '../../Images/Packages/Kanyakumari/Gandhi_Mandapam.jpg';
import Kanyakumari_Beach from '../../Images/Packages/Kanyakumari/Kanyakumari_Beach.jpg';
import Mayapuri_Wax_Museum from '../../Images/Packages/Kanyakumari/Mayapuri_Wax_Museum.jpg';
import Our_Lady_of_Ransom_Church from '../../Images/Packages/Kanyakumari/Our_Lady_of_Ransom_Church.jpg';
import Thirparappu_Falls from '../../Images/Packages/Kanyakumari/Thirparappu_Falls.jpg';
import Thiruvalluvar_Status from '../../Images/Packages/Kanyakumari/Thiruvalluvar_Statue.jpg';
import Vivekananda_Rock_Memorial from '../../Images/Packages/Kanyakumari/Vivekananda_Rock_Memorial.jpg';

const CityContent = {
    id: 5,
    ids: '05',
    Heading: 'Kanyakumari',
    title : "Cape Comorin or The Land's End",
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin."
        },
        {
            id:2,
            content: "Kanyakumari is where the Indian Ocean, Arabian Sea, and Bay of Bengal meet. Bagavathi Amman Temple, Gandhi Mandapam, Kanyakumari Beach, Mayapuri Wax Museum, Our Lady Of Ransom Chrush, Thiparappu Falls, Thiruvalluvar Statue, and Vivekananda Rock Memorial."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Bhagavathy Amman Temple',
        imgSrc: Bagavathy_Amman_Temple,
        content: 'A sacred shrine honoring Goddess Kanyakumari, the Bagavathi Amman Temple holds cultural significance and draws devotees seeking blessings.',
        distance: '650 m',
        duration:'3 min',
        amount: 50
    },
    {
        id: 2,
        heading: 'Gandhi Mandapam',
        imgSrc: Gandhi_Mandapam,
        content: "A commemorative monument dedicated to Mahatma Gandhi's visit to Kanyakumari, offering panoramic views of the surroundings and the convergence of the three oceans.",
        distance: '650 m',
        duration:'3 min',
        amount: 40
    },
    {
        id: 3,
        heading: 'Kanyakumari Beach',
        imgSrc: Kanyakumari_Beach,
        content: 'A picturesque coastal destination where the Indian Ocean, Bay of Bengal, and Arabian Sea converge, providing a unique natural spectacle and a serene atmosphere.',
        distance: '850 m',
        duration:'4 min',
        amount: 60
    },
    {
        id: 4,
        heading: 'Mayapuri Wax Museum',
        imgSrc: Mayapuri_Wax_Museum,
        content: 'Showcasing lifelike wax sculptures of prominent personalities, historical figures, and cultural icons, the Mayapuri Wax Museum offers an engaging experience for visitors.',
        distance: '350 m',
        duration:'1 min',
        amount:20
    },
    {
        id: 5,
        heading: 'Our Lady of Ransom Church',
        imgSrc: Our_Lady_of_Ransom_Church,
        content: 'A historic Catholic church with stunning architecture, the Our Lady of Ransom Church offers a serene space for reflection and worship.',
        distance: '550 m',
        duration:'2 min',
        amount: 50
    },
    {
        id: 6,
        heading: 'Thirparappu Falls',
        imgSrc: Thirparappu_Falls,
        content: 'Also known as Kalakkadu, Thiparappu Falls presents a beautiful cascade in a natural setting, making it an ideal spot for nature lovers and photographers.',
        distance: '59 km',
        duration:'1 hours 20 min',
        amount: 400
    },
    {
        id: 7,
        heading: 'Thiruvalluvar Statue',
        imgSrc: Thiruvalluvar_Status,
        content: 'Towering high, the Thiruvalluvar Statue pays tribute to the Tamil poet and philosopher Thiruvalluvar, offering panoramic vistas from the pedestal.',
        distance: '550 m',
        duration:'2 min',
        amount: 40
    },
    {
        id: 8,
        heading: 'Vivekananda Rock Memorial',
        imgSrc: Vivekananda_Rock_Memorial,
        content: 'A revered monument dedicated to Swami Vivekananda, this memorial is situated on a rocky island and serves as a place for spiritual contemplation and reflection.',
        distance: '550 m',
        duration:'2 min',
        amount:40
    }
];

const defaultpackages = [
    {
        id : 1,
        heading : 'Package 1',
        imgSrc : [
            {
                id : 1,
                imgs : Bagavathy_Amman_Temple,
                imgalt : "Bagavathy Amman Temple"
            },
            {
                id : 2,
                imgs : Gandhi_Mandapam,
                imgalt : "Gandhi Mandapam"
            },
            {
                id : 3,
                imgs : Vivekananda_Rock_Memorial,
                imgalt : "Vivekananda Rock Memorial"
            },
            {
                id : 4,
                imgs : Thiruvalluvar_Status,
                imgalt : "Thiruvalluvar Status"
            }
        ], 
        content : "Embark on a cultural and spiritual journey in Kanyakumari with our package, which includes the divine Bagavathy Amman Temple, the historic Gandhi Mandapam, a soul-stirring visit to the Vivekananda Rock Memorial, and the grandeur of the Thiruvalluvar Statue. Immerse yourself in the vibrant culture and breathtaking views of this coastal destination, all in one enriching experience.",
        distance : "4.5 km",
        duration : "2 hrs",
        amount : 1000
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Kanyakumari_Beach,
                imgalt : "Kanyakumari Beach"
            },
            {
                id : 2,
                imgs : Mayapuri_Wax_Museum,
                imgalt : "Mayapuri Wax Museum"
            },
            {
                id : 3,
                imgs : Our_Lady_of_Ransom_Church,
                imgalt : "Our Lady of Ransom Church"
            },
            {
                id : 4,
                imgs : Thirparappu_Falls,
                imgalt : "Thirparappu Falls"
            },
        ],
        content : "Embark on a diverse journey in Kanyakumari with our package, encompassing the tranquil Kanyakumari Beach, a captivating visit to the Mayapuri Wax Museum, the historical charm of Our Lady of Ransom Church, and the natural beauty of Thirparappu Falls. Experience the cultural richness and scenic wonders of this coastal destination all in one comprehensive tour.",
        distance : "122 km",
        duration : "5 hrs",
        amount : 3000
    }
];

export { CityContent, packageContent, defaultpackages};
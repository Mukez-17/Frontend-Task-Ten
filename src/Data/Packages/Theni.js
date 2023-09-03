import Main from '../../Images/Packages/Theni/Main.jpg';
import Anayirankal_Dam_Reservior from '../../Images/Packages/Theni/Anayirankal_Dam_Reservoir.jpg';
import Berijam_Lake from '../../Images/Packages/Theni/Berijam_Lake.jpg';
import Kolukkumali_Tea_Estate from '../../Images/Packages/Theni/Kolukkumalai_Tea_Estate.jpg';
import Kumbakkarai_Falls from '../../Images/Packages/Theni/Kumbakkarari_Falls.jpg';
import Mannavanur_Lake from '../../Images/Packages/Theni/Mannavanur_Lake.jpg';
import Meghamalai from '../../Images/Packages/Theni/Meghamalai.jpg';
import Sothuparai_Dam from '../../Images/Packages/Theni/Sothuparai_Dam.jpg';
import Vaigai_Dam from '../../Images/Packages/Theni/Vaigai_Dam.jpg';

const CityContent = {
    id: 9,
    ids: '09',
    Heading: 'Theni',
    title : 'A little hamlet in Tamil Nadu',
    imgSrc: Main,
    contents: [
        {
            id:1,
            content: "Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery."
        },
        {
            id:2,
            content: "Theni, a scenic region in Tamil Nadu, boasts these captivating destinations: Anayirankal Dam Reservoir, Berijam Lake, Kolukkumalai Tea Estate,  Kumbakarai Falls, Mannavanur Lake, Meghamalai, Sothuparai Dam, and Vaigai Dam."
        }
    ]
};

const packageContent = [
    {
        id: 1,
        heading: 'Anayirankal Dam Reservior',
        imgSrc: Anayirankal_Dam_Reservior,
        content: 'A picturesque reservoir surrounded by lush greenery, offering a tranquil escape and opportunities for boating amidst natural beauty.',
        distance: '58 km',
        duration: '1 hours 26 min',
        amount: 250
    },
    {
        id: 2,
        heading: 'Berijam Lake',
        imgSrc: Berijam_Lake,
        content: 'Nestled within the Palani Hills, Berijam Lake entices with its serene waters and is a great spot for nature enthusiasts and birdwatchers.',
        distance: '105 km',
        duration: '3 hours 28 min',
        amount: 500
    },
    {
        id: 3,
        heading: 'Kolukkumalai Tea Estate',
        imgSrc: Kolukkumali_Tea_Estate,
        content: "The world's highest tea estate, Kolukkumalai treats visitors to panoramic views and a chance to learn about tea cultivation and processing.",
        distance: '84 km',
        duration: '2 hours 8 mins',
        amount: 400
    },
    {
        id: 4,
        heading: 'Kumbakkarai Falls',
        imgSrc: Kumbakkarai_Falls,
        content: 'A mesmerizing waterfall cascading through rocky terrain, Kumbakarai Falls presents a refreshing setting for a relaxing time amidst nature.',
        distance: '28 km',
        duration:'42 min',
        amount: 150
    },
    {
        id: 5,
        heading: 'Mannavanur Lake',
        imgSrc: Mannavanur_Lake,
        content: 'A serene high-altitude lake surrounded by rolling hills, Mannavanur Lake is an ideal spot for those seeking solitude and natural beauty.',
        distance: '118 km',
        duration:'3 hours 15 mins',
        amount: 600
    },
    {
        id: 6,
        heading: 'Meghamalai',
        imgSrc: Meghamalai,
        content: 'Also known as the "High Wavy Mountains," Meghamalai offers lush landscapes, tea estates, and a serene environment for a peaceful getaway.',
        distance: '60 km',
        duration:'1 hours 23 mins',
        amount: 225
    },
    {
        id: 7,
        heading: 'Sothuparai Dam',
        imgSrc: Sothuparai_Dam,
        content: "A scenic reservoir providing breathtaking views, Sothuparai Dam invites travelers to admire the water's beauty and its surroundings.",
        distance: '26 km',
        duration:'43 min',
        amount: 180
    },
    {
        id: 8,
        heading: 'Vaigai Dam',
        imgSrc: Vaigai_Dam,
        content: 'An engineering marvel, Vaigai Dam is not only a water source but also offers a scenic backdrop for visitors to relax and enjoy the view.',
        distance: '17 km',
        duration:'29 min',
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
                imgs : Anayirankal_Dam_Reservior,
                imgalt : "Anayirankal Dam Reservior"
            },
            {
                id : 2,
                imgs : Berijam_Lake,
                imgalt : "Berijam Lake"
            },
            {
                id : 3,
                imgs : Kumbakkarai_Falls,
                imgalt : "Kumbakarai Falls"
            },
            {
                id : 4,
                imgs : Vaigai_Dam,
                imgalt : "Vaigai Dam"
            }
        ], 
        content : "Embark on a serene escape to Theni with our package, highlighting the tranquil Anayirankal Dam Reservoir, the pristine beauty of Berijam Lake, the peaceful Kumbakkarai Lake, and the impressive Vaigai Dam. Immerse yourself in the calm and scenic landscapes of this nature-rich destination, perfect for relaxation and rejuvenation.",
        distance : "200 km",
        duration : "10 hours",
        amount : 1500
    },
    {
        id : 2,
        heading : 'Package 2',
        imgSrc : [
            {
                id : 1,
                imgs : Kolukkumali_Tea_Estate,
                imgalt : "Kolukkumalai Tea Estate"
            },
            {
                id : 2,
                imgs : Mannavanur_Lake,
                imgalt : "Mannavanur Lake"
            },
            {
                id : 3,
                imgs : Meghamalai,
                imgalt : "Meghamalai"
            },
            {
                id : 4,
                imgs : Sothuparai_Dam,
                imgalt : "Sothuparai Dam"
            },
        ],
        content : "Experience the natural splendor of Theni with our package, which includes the lush Kolukkumalai Tea Estate, the serene Mannavanur Lake, the misty heights of Meghamalai, and the tranquil Sothuparai Dam. Immerse yourself in the scenic beauty of this unspoiled region, offering a refreshing escape into nature's lap.",
        distance : "250 km",
        duration : "12 hours",
        amount : 2000
    }
];

export { CityContent, packageContent, defaultpackages};
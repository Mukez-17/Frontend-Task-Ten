import Chennai from "../Images/Chennai/Chennai.jpeg";
import Marina_Beach from "../Images/Chennai/Marina_Beach.jpeg";
import MGR_Film_City from "../Images/Chennai/MGR_Film_City.jpeg";
import Marundeeswarar_Temple from "../Images/Chennai/Marundeeswarar_Temple.jpeg";
import Breezy_Beach from "../Images/Chennai/Breezy_Beach.jpeg";


const titleCard ={
    id : "01",
    Heading : "Chennai",
    mainImg : Chennai,
    title:'"The Detroit Of India"',
    content : {
        content1 : "Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle.",
        content2: "Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed."
    }
}

const cardItem = [
    {
        id : 1,
        placeName : "Marina Beach",
        img : Marina_Beach,
        description : "Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal..."
    },
    {
        id : 2,
        placeName : "MGR Film City",
        img : MGR_Film_City,
        description : "Having been established in the year 1994, a considerably new structure, the MGR Film city is managed..."
    },
    {
        id : 3,
        placeName : "Marundeeswarar Temple",
        img : Marundeeswarar_Temple,
        description : "The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva..."
    },
    {
        id : 4,
        placeName : "Breezy Beach",
        img : Breezy_Beach,
        description : "Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal..."
    }
]

export {titleCard, cardItem};
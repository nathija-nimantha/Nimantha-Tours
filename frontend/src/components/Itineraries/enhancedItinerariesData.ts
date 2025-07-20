// Images

import colomboImg from "/src/assets/img/card-Colombo.jpg";
import sigiriyaImg from "/src/assets/img/card-Sigiriya.jpg";
import kandyImg from "/src/assets/img/card-Kandy.jpg";
import nuwaraEliyaImg from "/src/assets/img/card-NuwaraEliya.jpg";
import yalaImg from "/src/assets/img/card-Yala.jpg";
import ellaImg from "/src/assets/img/card-Ella.jpg";
import galleImg from "/src/assets/img/card-Galle.jpg";
import hortonsPlainsImg from "/src/assets/img/card-HortonPlains.jpg";
import anuradhapuraImg from "/src/assets/img/card-Anuradhapura.png";
import polonnaruwaImg from "/src/assets/img/card-Polonnaruwa.jpg";
import dambullaImg from "/src/assets/img/card-DambullaRoyalCave.jpg";
import ambuluwawaImg from "/src/assets/img/card-Ambuluwawa.jpg";

// Tour Data
export const enhancedItineraries = [
    {
        id: 1,
        day: "Day 1",
        title: "Arrival in Colombo",
        description:
            "Welcome to Sri Lanka! Begin your journey with a comprehensive city tour of Colombo, exploring its vibrant streets, colonial architecture, and modern landmarks.",
        image: colomboImg,
        duration: "full-day",
        difficulty: "Easy" as const,
        category: "culture",
        price: "$75",
        highlights: ["Gangaramaya Temple", "Independence Square", "Pettah Market", "Galle Face Green", "National Museum"],
        included: ["Professional guide", "Transportation", "Entrance fees", "Welcome lunch", "Hotel pickup/drop-off"],
    },
    {
        id: 2,
        day: "Day 2",
        title: "Sigiriya Rock Fortress",
        description:
            "Climb the iconic Sigiriya Rock Fortress and immerse yourself in its ancient history, stunning frescoes, and breathtaking panoramic views from the summit.",
        image: sigiriyaImg,
        duration: "full-day",
        difficulty: "Moderate" as const,
        category: "culture",
        price: "$95",
        highlights: ["Ancient Rock Fortress", "Mirror Wall", "Lion's Gate", "Royal Gardens", "Sigiriya Frescoes"],
        included: ["Expert guide", "Entrance tickets", "Transportation", "Lunch", "Water bottles", "First aid kit"],
    },
    {
        id: 3,
        day: "Day 3",
        title: "Cultural Kandy Experience",
        description:
            "Discover the cultural capital of Sri Lanka, including visits to the sacred Temple of the Tooth Relic, Royal Botanical Gardens, and traditional cultural performances.",
        image: kandyImg,
        duration: "full-day",
        difficulty: "Easy" as const,
        category: "culture",
        price: "$85",
        highlights: ["Temple of the Tooth", "Royal Botanical Gardens", "Kandy Lake", "Cultural Dance Show", "Gem Museum"],
        included: ["Cultural guide", "All entrance fees", "Traditional lunch", "Cultural show tickets", "Transportation"],
    },
    {
        id: 4,
        day: "Day 4",
        title: "Tea Plantations in Nuwara Eliya",
        description:
            "Visit the lush tea plantations of Nuwara Eliya, learn about tea processing, enjoy scenic train rides, and experience the cool climate of 'Little England'.",
        image: nuwaraEliyaImg,
        duration: "full-day",
        difficulty: "Easy" as const,
        category: "nature",
        price: "$90",
        highlights: ["Tea Factory Tour", "Gregory Lake", "Strawberry Fields", "Victoria Park", "Train Journey"],
        included: ["Tea plantation tour", "Tea tasting session", "Train tickets", "Lunch", "Professional guide"],
    },
    {
        id: 5,
        day: "Day 5",
        title: "Yala Wildlife Safari",
        description:
            "Experience a thrilling safari at Yala National Park, home to leopards, elephants, and diverse wildlife. Early morning and evening game drives for optimal wildlife viewing.",
        image: yalaImg,
        duration: "full-day",
        difficulty: "Easy" as const,
        category: "wildlife",
        price: "$120",
        highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Crocodiles", "Sloth Bears"],
        included: ["4WD safari vehicle", "Professional tracker", "Park entrance", "Breakfast", "Lunch", "Binoculars"],
    },
    {
        id: 6,
        day: "Day 6",
        title: "Ella Hill Country Adventure",
        description:
            "Explore the scenic hill country of Ella with visits to Nine Arch Bridge, Little Adam's Peak hike, and breathtaking viewpoints over tea-covered mountains.",
        image: ellaImg,
        duration: "full-day",
        difficulty: "Moderate" as const,
        category: "adventure",
        price: "$80",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock", "Tea Plantations", "Ravana Falls"],
        included: ["Hiking guide", "Transportation", "Lunch", "Water", "Safety equipment", "Photography assistance"],
    },
    {
        id: 7,
        day: "Day 7",
        title: "Galle Fort & Southern Beaches",
        description:
            "Explore the historic Galle Fort with its Dutch colonial architecture, lighthouse, and ramparts, followed by relaxation on pristine southern beaches.",
        image: galleImg,
        duration: "full-day",
        difficulty: "Easy" as const,
        category: "culture",
        price: "$70",
        highlights: ["Galle Fort", "Dutch Reformed Church", "Lighthouse", "Unawatuna Beach", "Stilt Fishermen"],
        included: ["Historical guide", "Fort entrance", "Beach time", "Seafood lunch", "Transportation"],
    },
    {
        id: 8,
        day: "Day 8",
        title: "Horton Plains World's End",
        description:
            "Embark on an adventurous hike through Horton Plains National Park to World's End cliff, Baker's Falls, and experience unique montane ecosystem.",
        image: hortonsPlainsImg,
        duration: "full-day",
        difficulty: "Challenging" as const,
        category: "adventure",
        price: "$100",
        highlights: ["World's End Cliff", "Baker's Falls", "Endemic Flora", "Cloud Forest", "Sunrise Views"],
        included: ["Early morning pickup", "Park fees", "Hiking guide", "Breakfast", "Packed lunch", "Rain gear"],
    },
    {
        id: 9,
        day: "Day 9",
        title: "Polonnaruwa Ancient City",
        description:
            "Explore the ancient city of Polonnaruwa, a UNESCO World Heritage Site, with its well-preserved ruins, including the Gal Vihara rock temple and the Royal Palace.",
        image: polonnaruwaImg,
        duration: "full-day",
        difficulty: "Easy" as const,
        category: "culture",
        price: "$75",
        highlights: ["Gal Vihara", "Royal Palace", "Lotus Pond", "Archaeological Museum", "Siva Devalaya"],
        included: ["Cultural guide", "All entrance fees", "Lunch", "Transportation"],
    },
        {
        id: 10,
        day: "Day 10",
        title: "Anuradhapura Ancient City",
        description:
            "Discover the ancient city of Anuradhapura, a UNESCO World Heritage Site, known for its well-preserved ruins, including stupas, monasteries, and the sacred Bodhi tree.",
        image: anuradhapuraImg,
        duration: "full-day",
        difficulty: "Easy" as const,
        category: "culture",
        price: "$80",
        highlights: ["Sri Maha Bodhi", "Ruwanwelisaya Stupa", "Isurumuniya Rock Temple", "Archaeological Museum", "Kuttam Pokuna"],
        included: ["Cultural guide", "All entrance fees", "Lunch", "Transportation"],
    },
    {
        id: 11,
        day: "Day 11",
        title: "Sigiriya Rock Fortress",
        description:
            "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site, known for its ancient frescoes, water gardens, and stunning views from the summit.",
        image: sigiriyaImg,
        duration: "full-day",
        difficulty: "Moderate" as const,
        category: "culture",
        price: "$85",
        highlights: ["Sigiriya Rock", "Frescoes", "Lion's Gate", "Water Gardens", "Summit Views"],
        included: ["Cultural guide", "All entrance fees", "Lunch", "Transportation"],
    },
    {
        id: 12,
        day: "Day 12",
        title: "Dambulla Cave Temple",
        description:
            "Visit the Dambulla Cave Temple, a UNESCO World Heritage Site, famous for its stunning rock-cut Buddha statues and beautiful cave paintings.",
        image: dambullaImg,
        duration: "half-day",
        difficulty: "Easy" as const,
        category: "culture",
        price: "$50",
        highlights: ["Golden Temple", "Cave Temples", "Buddha Statues", "Rock Paintings"],
        included: ["Cultural guide", "All entrance fees", "Transportation"],
    }
]

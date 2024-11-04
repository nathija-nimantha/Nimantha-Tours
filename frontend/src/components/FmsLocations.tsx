import React, { useRef } from 'react';
import Card from './Card';

const FmsLocations = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
        console.log("Left Button");
    };
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
        console.log("Right Button");
    };
    return (
        <div className="relative py-8">
            <hr className="border-gray-300 mb-4" />
            <div className="flex items-center">
                { }
                <button onClick={scrollLeft} className="absolute left-[5%] z-10 bg-gray-700 text-white p-2 rounded-xl shadow-lg hover:bg-gray-600">
                    <i className="bi bi-arrow-left-circle"></i>
                </button>

                { }
                <div ref={scrollContainerRef} className="flex overflow-x-scroll space-x-4 scroll-smooth px-4 container mx-auto scrollbar-hide-horizontal">
                    <Card title="Sigiriya" img="/src/assets/img/card-Sigiriya.jpg" description="Ancient rock fortress with stunning views." link="/attractions/sigiriya" />
                    <Card title="Ella" img="/src/assets/img/card-Ella.jpg" description="Scenic highlands with lush greenery." link="/attractions/ella" />
                    <Card title="Kandy" img="/src/assets/img/card-Kandy.jpg" description="Cultural capital with famous temple." link="/attractions/kandy" />
                    <Card title="Galle" img="/src/assets/img/card-Galle.jpg" description="Historic city known for its well-preserved colonial architecture." link="/attractions/galle" />
                    <Card title="Nuwara Eliya" img="/src/assets/img/card-NuwaraEliya.jpg" description="Known as 'Little England' for its cool climate and tea plantations." link="/attractions/nuwara-eliya" />
                    <Card title="Yala National Park" img="/src/assets/img/card-Yala.jpg" description="Wildlife reserve known for its leopards and elephants." link="/attractions/yala" />
                    <Card title="Anuradhapura" img="/src/assets/img/card-Anuradhapura.png" description="Ancient city with significant historical sites and ruins." link="/attractions/anuradhapura" />
                    <Card title="Colombo" img="/src/assets/img/card-Colombo.jpg" description="Capital city known for modern attractions and colonial history." link="/attractions/colombo" />
                    <Card title="Polonnaruwa" img="/src/assets/img/card-Polonnaruwa.jpg" description="Ancient city with archaeological wonders and ruins." link="/attractions/polonnaruwa" />
                    <Card title="Ambuluwawa" img="/src/assets/img/card-Ambuluwawa.jpg" description="Unique multi-religious shrine located on a mountain." link="/attractions/ambuluwawa" />
                    <Card title="Dambulla Royal Cave Temple" img="/src/assets/img/card-DambullaRoyalCave.jpg" description="Famous for its rock caves and ancient Buddhist art." link="/attractions/dambulla" />
                    <Card title="Horton Plains" img="/src/assets/img/card-HortonPlains.jpg" description="National Park known for its biodiversity and stunning views." link="/attractions/horton-plains" />
                </div>

                { }
                <button onClick={scrollRight} className="absolute right-[5%] z-10 bg-gray-700 text-white p-2 rounded-xl shadow-lg hover:bg-gray-600">
                    <i className="bi bi-arrow-right-circle"></i>
                </button>
            </div>
            <hr className="border-gray-300 mt-4" />
        </div>
    );
};

export default FmsLocations;

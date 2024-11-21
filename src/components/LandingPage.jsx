// import CustomCarousel from "./CustomCarousel"
// function LandingPage() {
//   return (
//     <>
//         <CustomCarousel/>
//     </>
//   )
// }

// export default LandingPage

import { useState } from 'react';

const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
            title: "Kolkata, India",
            description: "₹4000  7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipMHvkB151icA3Pa0YFWpakcpCv_LplFa1gorz6j=w675-h390-n-k-no"
        },
        {
            title: "Kolkata, India",
            description: "₹4000  7 Days Tour",
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTRh613zlRTVvLDY7tqJY7yKTE2PKq9et70kn3Jo6cbgQwYRvvKFnXknQ9x_Iw13UWfKjX2LdvC-xCInmht4Q3be9ZZD_HTCpLMv4QVxQ"
        },
        {
            title: "Kolkata, India",
            description: "₹4000  7 Days Tour",
            image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTjJnIYB7CK2B8e-bW_iPju30_JSej1TQ3xewcWjnuvUaYrOIrix5AQiJe7CiHuCWG4Z8_xf8xEEW6UDffJ556WgQGGXpLgI7IUJU-ETg"
        },
        {
            title: "Kolkata, India",
            description: "₹4000  7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipPNCfv_JgzRTqfDPkZ4shXR48NPgPbcX2PzDX3V=w675-h390-n-k-no"
        },
        {
            title: "Kolkata, India",
            description: "₹4000  7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipNxvnTaiIVs-mbJgnLuLqI2LGx8EdWkDpyOQEHu=w675-h390-n-k-no"
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 4)); // Ensure we don't go beyond the last set of cards
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Ensure we don't go below the first set of cards
    };

    return (
        <div className="bg-gray-50">
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* First line text aligned to the left */}
                    <p className="text-left text-lg text-gray-600">Welcome to Our Amazing Journey</p>

                    {/* Title with buttons on the right */}
                    <div className="flex items-center justify-between mt-4">
                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl">Discover Your Next Adventure</h1>
                        <div className="flex space-x-2">
                            <button onClick={handlePrev} className="px-4 py-2 text-white bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200 flex items-center">
                                <span className="font-bold text-green-600">{'<'}</span>
                            </button>
                            <button onClick={handleNext} className="px-4 py-2 text-white bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200 flex items-center">
                                <span className="font-bold text-green-600">{'>'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Cards section */}
                    <div className="mt-10 overflow-hidden">
                        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
                            {cards.map((card, index) => (
                                <div key={index} className="flex-shrink-0 w-full sm:w-1/4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <img src={card.image} alt={card.title} className="w-full h-auto" />
                                        <div className="p-4">
                                            <h2 className="text-lg font-semibold">{card.title}</h2>
                                            <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
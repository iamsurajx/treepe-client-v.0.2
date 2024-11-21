import React, { useState } from 'react';

const CustomCarousel = () => {
  const destinations = [
    {
      id: 1,
      name: "Amsterdam",
      itineraries: "874 Itineraries",
      imgSrc: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR34SB8iodQE7L0m46MBMx2T4DfsOWUh4hp09iTaM8GhatIpjraonv41cWR4jdylfCM8KYS2UbPkqy7OTguJ8AppCrCitroYe1zZfGaCw",
    },
    {
      id: 2,
      name: "Paris",
      itineraries: "1200 Itineraries",
      imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1",
    },
    {
      id: 3,
      name: "New York",
      itineraries: "950 Itineraries",
      imgSrc: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
    },
    {
      id: 4,
      name: "Tokyo",
      itineraries: "600 Itineraries",
      imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5d/10/caption.jpg?w=1400&h=1400&s=1&cx=1005&cy=690&chk=v1_2ed86f729380ea073850",
    },
    {
      id: 5,
      name: "Sydney",
      itineraries: "450 Itineraries",
      imgSrc: "https://cdn.britannica.com/71/188471-050-CF188A6B/Sydney-Opera-House-Port-Jackson.jpg",
    },
    // Additional items
    {
      id: 6,
      name: "Nainital",
      itineraries: "600 Itineraries",
      imgSrc: "https://s3.india.com/wp-content/uploads/2024/06/10-Fascinating-Facts-About-Nainital.jpg##image/jpg",
    },
    {
      id: 7,
      name: "Dubai",
      itineraries: "450 Itineraries",
      imgSrc: "https://a.eu.mktgcdn.com/f/100004519/xLeVc5XahQ14O2-lWv6n8JjqE1V8AAUSeyRHIiFfamQ.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  // Automatically move to the next slide every few seconds
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-12 mx-6"> {/* Increased margin-top and horizontal margins */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / destinations.length)}%)` }}
        >
          {destinations.map(destination => (
            <div key={destination.id} className="flex items-center bg-white shadow-md rounded-lg p-4 mx-2" style={{ width: '300px', height: '150px' }}> {/* Fixed width and height */}
              <img
                src={destination.imgSrc}
                alt={destination.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-xl font-semibold">{destination.name}</h3>
                <p className="mt-2 text-gray-600">{destination.itineraries}</p>
              </div>
              <div className="flex items-center">
                {/* Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5-5 5M6 12h12"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
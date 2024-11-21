// src/CustomCard.jsx
import { useState, useEffect } from 'react';

const cards = [
  {
    imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipPEtxCvsxVn7zW01vooJK9G4NhMwPeG5pwZk6Id=w675-h390-n-k-no',
    title: 'Falling in love with the streets and snow',
    para1: 'Netherlands ,Amsterdam.',
    para2: 'By Souptik Das',
    likes: 235,
    price: '₹5000',
    duration: '10 days',
    place: 'India, Delhi',
  },
  {
    imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipPEtxCvsxVn7zW01vooJK9G4NhMwPeG5pwZk6Id=w675-h390-n-k-no',
    title: 'Falling in love with the streets and snow',
    para1: 'Netherlands ,Amsterdam.',
    para2: 'By Souptik Das',
    likes: 235,
    price: '₹5000',
    duration: '10 days',
    place: 'India, Delhi',
  },
  {
    imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipPEtxCvsxVn7zW01vooJK9G4NhMwPeG5pwZk6Id=w675-h390-n-k-no',
    title: 'Falling in love with the streets and snow',
    para1: 'Netherlands ,Amsterdam.',
    para2: 'By Souptik Das',
    likes: 235,
    price: '₹5000',
    duration: '10 days',
    place: 'India, Delhi',
  },
  {
    imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipPEtxCvsxVn7zW01vooJK9G4NhMwPeG5pwZk6Id=w675-h390-n-k-no',
    title: 'Falling in love with the streets and snow',
    para1: 'Netherlands ,Amsterdam.',
    para2: 'By Souptik Das',
    likes: 235,
    price: '₹5000',
    duration: '10 days',
    place: 'India, Delhi',
  },
  {
    imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipPEtxCvsxVn7zW01vooJK9G4NhMwPeG5pwZk6Id=w675-h390-n-k-no',
    title: 'Falling in love with the streets and snow',
    para1: 'Netherlands ,Amsterdam.',
    para2: 'By Souptik Das',
    likes: 235,
    price: '₹5000',
    duration: '10 days',
    place: 'India, Delhi',
  },
];

function CustomCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cards.length / 3));
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isHovered]);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100 p-4 mt-20 py-20">
      <h1 className="text-5xl font-bold mb-10">Explore Itineraries</h1>
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / Math.ceil(cards.length / 3))}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="w-full sm:w-1/3 flex-shrink-0 p-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={card.imgSrc} alt={card.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p>{card.para1}</p>
                  <p>{card.para2}</p>
                  <div className="flex justify-between items-center">
                    <span>{card.likes} Likes</span>
                    <span className="font-bold">{card.price}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between">
                    <span>{card.duration}</span>
                    <span>{card.place}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Removed Navigation Buttons */}
    </div>
  );
}

export default CustomCard;
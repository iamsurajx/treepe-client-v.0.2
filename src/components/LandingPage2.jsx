
const LandingPage2 = () => {
    const cards = [
        {
            title: "Delhi, India",
            description: "₹4000  7 Days Tour",
            image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTUO10mou6sHujp9PT_wZzb3TkULHfezwUJHJu-7-J3NM_Iutvi6J-NujAzfzB-oQCZVqhMLuTyI3ewui9bTFrvXXqVG3DTb6LpmIXjTw"
        },
        {
            title: "Delhi, India",
            description: "₹4000  7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipNT3MFYBjz2Mf13lhr3Ib3742ksR0rVlVphOy5z=w675-h390-n-k-no"
        },
        {
            title: "Delhi, India",
            description: "₹4000  7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipO6KtNHDGsHWavlnRwC-74q4BXvxh9RNXB_1cHU=w675-h390-n-k-no"
        },
        {
            title: "Delhi, India",
            description: "₹4000  7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipObKAQg1YMXpBQtEt3qeGi-2MY8M848TzuIVIKN=w675-h390-n-k-no"
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen px-8 flex flex-col items-center">
            <section className="text-center p-6">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
                    Explore Your Next Adventure
                </h1>

                {/* Paragraph */}
                <p className="text-lg text-gray-600 mb-8">
                    Discover amazing itineraries tailored just for you. Whether you are looking for relaxation or adventure, we have something for everyone!
                </p>

                {/* Button */}
                <button className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-200 mb-8">
                    See All Itineraries
                </button>
            </section>

            {/* Cards Section */}
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-6">
                {cards.map((card, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${index === 1 || index === 2 ? 'transform translate-y-12 scale-75' : ''}`}>
                        <img src={card.image} alt={card.title} className="w-full h-auto" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                            <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage2;
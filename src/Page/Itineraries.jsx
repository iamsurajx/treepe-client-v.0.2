import TopSearchDestination from "../components/TopSearchDestination";
import CustomCard from "../components/cards/CustomCard";
import AdBanner from "../components/cards/AdBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Itineraries() {
    return (
        <>
        {/* Navbar */}
        <Navbar />

        {/*  */}
            <div className="relative bg-gray-300 p-8 text-center">
                {" "}
                {/* Light gray background */}
                <h1 className="text-4xl font-bold text-white">
                    Your Gateway to Extraordinary Adventures
                </h1>{" "}
                {/* White heading */}
                <p className="mt-6 mb-8 text-lg text-white">
                    {" "}
                    {/* Added margin-bottom for spacing */}
                    Pack your bags and let Travel redefine your travel experience. Where every journey is a story waiting to be told
                </p>
                {/* Search Options Container */}
                <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md flex space-x-4">
                    <input
                        type="text"
                        placeholder="Destination"
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Starting Point"
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Duration"
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Cost"
                        className="border p-2 rounded"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </div>
            </div>

            {/* New Section Below the Banner */}
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold">Explore Your Options</h2>
                <p className="mt-4 text-lg text-gray-700">
                    Discover various destinations, plan your journey, and find the best
                    deals tailored for you.
                </p>
            </div>

            {/* <div className="flex items-center bg-white shadow-md rounded-lg p-4 mt-8 max-w-xs mx-auto">
                <img
                    src="https://via.placeholder.com/80" // Smaller round image
                    alt="Destination"
                    className="w-20 h-20 rounded-full object-cover" // Round image
                />
                <div className="ml-4 flex-grow">
                    <h3 className="text-xl font-semibold">Amsterdam</h3>
                    <p className="mt-2 text-gray-600">874 Itineraries</p>
                </div>
                <div className="flex items-center">
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
            </div> */}

            <TopSearchDestination />

            {/*  */}
            <CustomCard />

            {/* Ad banner */}
            <AdBanner />

            {/*  */}
            <CustomCard />

            {/* Ad banner */}
            <AdBanner />

            {/*  */}
            <CustomCard />

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Itineraries;

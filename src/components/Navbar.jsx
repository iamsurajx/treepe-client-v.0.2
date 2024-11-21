import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if user is logged in based on the presence of a token
    useEffect(() => {
        const token = localStorage.getItem('token'); // Assuming token is stored in local storage
        setIsLoggedIn(!!token); // Set logged-in state based on token presence
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token on logout
        setIsLoggedIn(false); // Update logged-in state
        // Optionally redirect to home or login page
        window.location.href = '/'; // Redirect to home page after logout
    };

    return (
        <nav className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo on the left */}
                    <div className="flex items-center">
                        <svg width={200} height={50} xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#FFFFFF" />
                            <text x={10} y={40} fontFamily="Arial" fontSize={36} fill="">
                                Tripe.com
                            </text>
                        </svg>
                    </div>

                    {/* Centered navigation links */}
                    <div className="hidden sm:flex sm:ml-6 sm:justify-center flex-grow">
                        <div className="flex space-x-4">
                            <Link to="/" className="relative group rounded-md px-3 py-2 text-sm font-medium text-gray-700">
                                Home
                                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </Link>
                            <Link to="/itineraries" className="relative group rounded-md px-3 py-2 text-sm font-medium text-gray-700">
                                Itinerary
                                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Create Itinerary Button and Profile dropdown on the right */}
                    <div className="flex items-center ml-auto">
                        {/* Create Itinerary Button */}
                        <button className="mr-4 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            + Create an Itinerary
                        </button>

                        {/* Profile dropdown */}
                        <div ref={dropdownRef} className="relative">
                            <div>
                                <button type="button" onClick={toggleDropdown} className={`relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300`} id="user-menu-button" aria-expanded={isDropdownOpen} aria-haspopup="true">
                                    <span className={`absolute -inset-1.5`}></span>
                                    <span className={`sr-only`}>Open user menu</span>
                                    <img className={`h-8 w-8 rounded-full`} src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} alt="" />
                                    {/* Downward arrow icon */}
                                    <svg className="ml-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role={`menu`} aria-orientation={`vertical`} aria-labelledby={`user-menu-button`}>
                                    {isLoggedIn ? (
                                        <>
                                            <Link to="/under_development" className={`block px-4 py-2 text-sm text-gray-700`} role={`menuitem`}>Your Profile</Link>
                                            <Link to="/under_development" className={`block px-4 py-2 text-sm text-gray700`} role={`menuitem`}>Settings</Link>
                                            <button onClick={handleLogout} className={`block w-full text-left px-4 py-2 text-sm text-gray700`}>Logout</button>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/login" className={`block px-4 py-2 text-sm text-gray700`} role={`menuitem`}>Login</Link>
                                            <Link to="/signup" className={`block px-4 py-2 text-sm text-gray700`} role={`menuitem`}>Signup</Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`sm:hidden ${isDropdownOpen ? 'block' : 'hidden'}`} id={`mobile-menu`}>
                <div className={`space-y=1 px=2 pb=3 pt=2`}>
                    {/* Mobile links */}
                    <Link to="/" className={`block rounded-md px3 py2 text-base font-medium text-gray300 hover:bg-gray700 hover:text-white`}>Home</Link>
                    <Link to="/itineraries" className={`block rounded-md px3 py2 text-base font-medium text-gray300 hover:bg-gray700 hover:text-white`}>Itinerary</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// import { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setIsDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <nav className="bg-white shadow">
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     {/* Logo on the left */}
//                     <div className="flex items-center">
//                         {/* <img className="h-8 w-auto" src="" alt="Your Company" /> */}
//                         <svg width={200} height={50} xmlns="http://www.w3.org/2000/svg">
//                             <rect width="100%" height="100%" fill="#FFFFFF" /> {/* Background color */}
//                             <text x={10} y={40} fontFamily="Arial" fontSize={36} fill="">
//                                 Tripe.com
//                             </text>
//                         </svg>

//                     </div>

//                     {/* Centered navigation links */}
//                     <div className="hidden sm:flex sm:ml-6 sm:justify-center flex-grow">
//                         <div className="flex space-x-4">
//                             <Link to="/" className="relative group rounded-md px-3 py-2 text-sm font-medium text-gray-700">
//                                 Home
//                                 <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
//                             </Link>
//                             <Link to="/itineraries" className="relative group rounded-md px-3 py-2 text-sm font-medium text-gray-700">
//                                 Itinerary
//                                 <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Create Itinerary Button and Profile dropdown on the right */}
//                     <div className="flex items-center ml-auto">
//                         {/* Create Itinerary Button */}
//                         <button className="mr-4 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
//                             + Create an Itinerary
//                         </button>

//                         {/* Profile dropdown */}
//                         <div ref={dropdownRef} className="relative">
//                             <div>
//                                 <button type="button" onClick={toggleDropdown} className={`relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300`} id="user-menu-button" aria-expanded={isDropdownOpen} aria-haspopup="true">
//                                     <span className={`absolute -inset-1.5`}></span>
//                                     <span className={`sr-only`}>Open user menu</span>
//                                     <img className={`h-8 w-8 rounded-full`} src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} alt="" />
//                                     {/* Downward arrow icon */}
//                                     <svg className="ml-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             {/* Dropdown menu */}
//                             {isDropdownOpen && (
//                                 <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role={`menu`} aria-orientation={`vertical`} aria-labelledby={`user-menu-button`}>
//                                     <Link to="/under_development" className={`block px-4 py-2 text-sm text-gray-700`} role={`menuitem`}>Your Profile</Link>
//                                     <Link to="/under_development" className={`block px-4 py-2 text-sm text-gray-700`} role={`menuitem`}>Settings</Link>
//                                     <Link to="/under_development" className={`block px-4 py-2 text-sm text-gray-700`} role={`menuitem`}>Sign out</Link>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* Mobile menu */}
//             <div className={`sm:hidden ${isDropdownOpen ? 'block' : 'hidden'}`} id={`mobile-menu`}>
//                 <div className={`space-y=1 px=2 pb=3 pt=2`}>
//                     {/* Mobile links */}
//                     <Link to="/" className={`block rounded-md px3 py2 text-base font-medium text-gray300 hover:bg-gray700 hover:text-white`}>Home</Link>
//                     <Link to="/itineraries" className={`block rounded-md px3 py2 text-base font-medium text-gray300 hover:bg-gray700 hover:text-white`}>Itinerary</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
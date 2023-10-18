import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden flex items-center">
            <button
                onClick={toggleMenu}
                className={`block text-gray-800 focus:outline-none text-2xl ml-auto`}
            >
                {isOpen ? (
                    <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                )}
            </button>
            <nav
                className={`${
                    isOpen ? 'block' : 'hidden'
                } md:block md:ml-4 md:pr-4 md:border-l md:border-gray-400 md:pb-0 pb-4`}
            >
                <ul className="md:flex items-center justify-between text-base text-gray-700">
                    <li>
                        <a href="/" className="block md:inline-block md:mt-0 mt-4 mr-4">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="block md:inline-block md:mt-0 mt-4 mr-4"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/portfolio"
                            className="block md:inline-block md:mt-0 mt-4 mr-4"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="block md:inline-block md:mt-0 mt-4"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;

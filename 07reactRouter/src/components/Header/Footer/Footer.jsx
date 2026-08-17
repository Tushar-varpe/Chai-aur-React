import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-y">

            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                <div className="md:flex md:justify-between">

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">

                        <Link to="/" className="flex items-center">

                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&q=80"
                                className="mr-3 h-16 w-16 object-cover rounded"
                                alt="Logo"
                            />

                            <span className="text-xl font-bold">
                                React Router
                            </span>

                        </Link>

                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        {/* Resources */}
                        <div>

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Resources
                            </h2>

                            <ul className="text-gray-500 font-medium">

                                <li className="mb-4">
                                    <Link
                                        to="/"
                                        className="hover:underline"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/about"
                                        className="hover:underline"
                                    >
                                        About
                                    </Link>
                                </li>

                            </ul>

                        </div>

                        {/* Follow us */}
                        <div>

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Follow us
                            </h2>

                            <ul className="text-gray-500 font-medium">

                                <li className="mb-4">

                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>

                                </li>

                                <li>

                                    <Link
                                        to="/"
                                        className="hover:underline"
                                    >
                                        Discord
                                    </Link>

                                </li>

                            </ul>

                        </div>

                        {/* Legal */}
                        <div>

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Legal
                            </h2>

                            <ul className="text-gray-500 font-medium">

                                <li className="mb-4">

                                    <Link
                                        to="#"
                                        className="hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>

                                </li>

                                <li>

                                    <Link
                                        to="#"
                                        className="hover:underline"
                                    >
                                        Terms & Conditions
                                    </Link>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                {/* Copyright */}
                <div className="sm:flex sm:items-center sm:justify-between">

                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2026 React Router Project. All Rights Reserved.
                    </span>

                    {/* Social Links */}
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            GitHub
                        </a>

                        <Link
                            to="#"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            Discord
                        </Link>

                        <Link
                            to="#"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            Twitter
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}
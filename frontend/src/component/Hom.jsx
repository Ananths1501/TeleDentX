import React, { useState } from 'react';
import { FaBars, FaTooth } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './Hom.css'; // Import your custom CSS for additional styling

const Hom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const openPopup = (type) => {
        setPopup(type);
    };

    const closePopup = () => {
        setPopup(null);
    };

    const sections = [
        { id: 'book-appointment', label: 'Book Appointment' },
        { id: 'login', label: 'Login' },
        { id: 'treatments', label: 'Treatments & Fees' },
        { id: 'contact', label: 'Contact Us' },
        { id: 'about', label: 'About Me' },
    ];

    const cards = [
        { label: 'User Dashboard', action: () => openPopup('user-dashboard') },
        { label: 'Admin Dashboard', action: () => openPopup('admin-dashboard') },
        { label: 'Billing Page', action: () => openPopup('billing-page') },
        { label: 'Appointment Booking', action: () => openPopup('appointment-booking') },
        { label: 'Treatment Details & Fees', action: () => window.location.href = '/treatments' },
        { label: 'Order Medicines', action: () => window.location.href = '/medicines' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full mr-4"></div>
                    <h1 className="text-white text-2xl font-semibold">TeleDentX</h1>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {sections.map(section => (
                        <a key={section.id} href={`#${section.id}`} className="text-white hover:text-gray-200">{section.label}</a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleNavbar} className="text-white text-2xl">
                        {isOpen ? <AiOutlineClose /> : <FaTooth />}
                    </button>
                </div>
            </header>
            {isOpen && (
                <nav className="bg-blue-600 p-4 md:hidden space-y-2">
                    {sections.map(section => (
                        <a key={section.id} href={`#${section.id}`} className="block text-white hover:text-gray-200">{section.label}</a>
                    ))}
                </nav>
            )}
            <main className="flex-grow">
                <section className="p-8 text-center bg-gray-100">
                    <h2 className="text-4xl font-bold text-gray-800">Welcome to TeleDentX</h2>
                    <p className="mt-4 text-gray-600">Your one-stop solution for all dental needs.</p>
                </section>
                <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer" onClick={card.action}>
                            {card.label}
                        </div>
                    ))}
                </section>
                {popup && (
                    <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="popup-content bg-white p-8 rounded-lg shadow-lg relative">
                            {popup === 'admin-dashboard' || popup === 'billing-page' || popup === 'appointment-booking' || popup === 'user-dashboard' ? (
                                <div className="flex justify-center space-x-4">
                                    <div className="circle bg-blue-500 text-white p-4 rounded-full cursor-pointer" onClick={() => openPopup('admin-login')}>Admin</div>
                                    <div className="circle bg-blue-500 text-white p-4 rounded-full cursor-pointer" onClick={() => openPopup('user-login')}>User</div>
                                </div>
                            ) : popup === 'admin-login' ? (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
                                    <input type="text" placeholder="Username" className="w-full p-2 border mb-4 rounded" />
                                    <input type="password" placeholder="Password" className="w-full p-2 border mb-4 rounded" />
                                    <button onClick={() => window.location.href = '/admin'} className="bg-blue-500 text-white p-2 w-full rounded">Login</button>
                                    <a href="#" onClick={() => openPopup('user-login')} className="block text-blue-500 mt-4">Login as User?</a>
                                </div>
                            ) : popup === 'user-login' ? (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">User Login</h3>
                                    <input type="text" placeholder="Mobile No" className="w-full p-2 border mb-4 rounded" />
                                    <input type="password" placeholder="Password" className="w-full p-2 border mb-4 rounded" />
                                    <button onClick={() => window.location.href = '/userhome'} className="bg-blue-500 text-white p-2 w-full rounded">Login</button>
                                </div>
                            ) : null}
                        </div>
                    </div>
                )}
                <section id="about" className="p-8 bg-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
                            <img src="dentist1.jpg" alt="Dentist 1" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold">Dentist 1</h3>
                            <p className="text-gray-600">Click to know more</p>
                        </div>
                        <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
                            <img src="dentist2.jpg" alt="Dentist 2" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold">Dentist 2</h3>
                            <p className="text-gray-600">Click to know more</p>
                        </div>
                        <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
                            <img src="dentist3.jpg" alt="Dentist 3" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold">Dentist 3</h3>
                            <p className="text-gray-600">Click to know more</p>
                        </div>
                    </div>
                </section>
                <section id="contact" className="p-8 bg-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                        <textarea placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
                    </form>
                </section>
            </main>
            <footer className="bg-blue-600 p-4 text-center text-white">
                &copy; 2023 TeleDentX. All rights reserved.
            </footer>
        </div>
    );
};

export default Hom;
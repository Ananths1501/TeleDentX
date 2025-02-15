import React, { useState, useEffect } from "react";
import { FaTooth } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import profileImage from '../assets/profile.jpg'; // Make sure the path to the image is correct
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [roleSelect, setRoleSelect] = useState(null);
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [redirectPath, setRedirectPath] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle popup logic based on card clicks
  const handleCardClick = (type) => {
    if (type === "book") {
      setRoleSelect(null);
      setRedirectPath('/book-appointment');
    } else if (type === "user") {
      setRoleSelect("user");
      setRedirectPath('/user-dashboard');
    } else if (type === "admin") {
      setRoleSelect("admin");
      setRedirectPath('/admin-dashboard');
    } else if (type === "billing") {
      setRoleSelect("admin");
      setRedirectPath('/admin-dashboard/billing');
    } else if (type === "login") {
      setRoleSelect(null);
    } else if (type === "order-medicine") {
      setRoleSelect("user");
      setRedirectPath('/user-dashboard/order-medicine');
    }
    setPopupOpen(true);
  };

  // Function to close the menu on link click or scroll
  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("scroll", closeMenu);
    } else {
      window.removeEventListener("scroll", closeMenu);
    }
    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, [menuOpen]);

  // Function to generate and send OTP
  const sendOtp = () => {
    const otp = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp}`);
  };

  // Function to handle OTP input
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1) {
      const newOtp = otp.split('');
      newOtp[index] = value;
      setOtp(newOtp.join(''));
      if (index < 4) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Function to handle OTP verification
  const verifyOtp = () => {
    if (roleSelect === "user" && otp === generatedOtp) {
      navigate(redirectPath === '/book-appointment' ? '/user-dashboard/book-appointment' : redirectPath);
    } else if (roleSelect === "admin" && username === "TeleDentX" && password === "TeleDentX@16") {
      navigate(redirectPath === '/book-appointment' ? '/admin-dashboard/book-appointment' : redirectPath);
    } else {
      alert('Invalid OTP or Credentials');
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md flex justify-between items-center px-6 py-4 z-50">
        <div className="w-15 h-15 bg-white rounded-full border-4 border-cyan-300 shadow-md overflow-hidden">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <nav
          className={`md:flex gap-6 ${
            menuOpen
              ? "flex flex-col absolute top-16 right-6 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg p-4 rounded-lg"
              : "hidden"
          }`}
        >
          <Link
            to="/user-dashboard/book-appointment"
            className="hover:text-cyan-200 transition duration-300"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
          <Link
            to="/treatments"
            className="hover:text-cyan-200 transition duration-300"
            onClick={closeMenu}
          >
            Treatments & Fees
          </Link>
          <Link
            to="#about"
            className="hover:text-cyan-200 transition duration-300"
            onClick={closeMenu}
          >
            About Me
          </Link>
          <Link
            to="#contact"
            className="hover:text-cyan-200 transition duration-300"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <Link
            to="#login"
            className="hover:text-cyan-200 transition duration-300"
            onClick={() => {
              handleCardClick("login");
              closeMenu();
            }}
          >
            Login
          </Link>
        </nav>
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaTooth />
        </button>
      </header>

      {/* Welcome Section */}
      <section className="h-[50vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6">
        <h1 className="text-5xl font-bold mb-2">Welcome to TeleDentX</h1>
        <p className="text-xl">Your trusted online dental clinic</p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div
          className="bg-white p-6 rounded-lg shadow-lg text-center font-semibold text-lg cursor-pointer transition transform hover:scale-105 hover:bg-blue-600 hover:text-white"
          onClick={() => handleCardClick("user")}
        >
          User Dashboard
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-lg text-center font-semibold text-lg cursor-pointer transition transform hover:scale-105 hover:bg-blue-600 hover:text-white"
          onClick={() => handleCardClick("admin")}
        >
          Admin Dashboard
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-lg text-center font-semibold text-lg cursor-pointer transition transform hover:scale-105 hover:bg-blue-600 hover:text-white"
          onClick={() => handleCardClick("billing")}
        >
          Billing Page
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-lg text-center font-semibold text-lg cursor-pointer transition transform hover:scale-105 hover:bg-blue-600 hover:text-white"
          onClick={() => handleCardClick("book")}
        >
          Book Appointment
        </div>
        <Link
          to="/treatments"
          className="bg-white p-6 rounded-lg shadow-lg text-center font-semibold text-lg cursor-pointer transition transform hover:scale-105 hover:bg-blue-600 hover:text-white"
        >
          Treatments & Fees
        </Link>
        <div
          className="bg-white p-6 rounded-lg shadow-lg text-center font-semibold text-lg cursor-pointer transition transform hover:scale-105 hover:bg-blue-600 hover:text-white"
          onClick={() => handleCardClick("order-medicine")}
        >
          Order Medicines
        </div>
      </section>

      {/* Role Selection/Login Popup */}
      {popupOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80 relative">
            <button className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800" onClick={() => setPopupOpen(false)}>
              <AiOutlineClose />
            </button>
            {!roleSelect ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Select Role</h2>
                <div className="flex gap-4 justify-center">
                  <div
                    className="w-20 h-20 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700"
                    onClick={() => setRoleSelect("admin")}
                  >
                    Admin
                  </div>
                  <div
                    className="w-20 h-20 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700"
                    onClick={() => setRoleSelect("user")}
                  >
                    User
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4">
                  {roleSelect === "admin" ? "Admin Login" : "User Login"}
                </h2>
                {roleSelect === "user" ? (
                  <>
                    <div className="flex items-center mb-3">
                      <input
                        type="text"
                        placeholder="Mobile No."
                        className="w-full p-2 border border-gray-300 rounded"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                      />
                      <button
                        className="ml-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                        onClick={sendOtp}
                      >
                        Send OTP
                      </button>
                    </div>
                    <div className="flex justify-center gap-2 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          maxLength="1"
                          className="w-10 p-2 border border-gray-300 rounded text-center"
                          onChange={(e) => handleOtpChange(e, index)}
                        />
                      ))}
                    </div>
                    <button
                      className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                      onClick={verifyOtp}
                    >
                      Verify OTP
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full p-2 border border-gray-300 rounded mb-3"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-2 border border-gray-300 rounded mb-3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" onClick={verifyOtp}>
                      Login
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold">Meet Our Dentists</h2>
        <div className="bg-white p-6 w-60 mx-auto mt-6 shadow-lg rounded-lg">
          Dr. John Doe - Expert in Dental Implants
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-blue-600 text-white py-10 px-6">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <input type="email" placeholder="Your Email" className="block w-full max-w-md mx-auto p-2 mb-3 rounded bg-white text-gray-900" />
        <textarea placeholder="Your Message" className="block w-full max-w-md mx-auto p-2 mb-3 rounded bg-white text-gray-900"></textarea>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-300">
          Send Message
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4">
        <p>© 2025 TeleDentX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
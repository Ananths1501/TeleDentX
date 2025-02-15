import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaTooth } from 'react-icons/fa';

const treatmentsData = [
  {
    name: "Teeth Cleaning",
    image: "https://oconnorsmiles.com/wp-content/uploads/2018/10/dental-cleaning.jpg", // Placeholder image
    steps: ["Initial checkup", "Scaling and polishing", "Fluoride treatment"],
    recovery: "No recovery time needed.",
    price: "$50",
  },
  {
    name: "Root Canal",
    image: "https://via.placeholder.com/100",
    steps: ["Local anesthesia", "Pulp removal", "Filling and sealing"],
    recovery: "2-3 days of mild discomfort.",
    price: "$300 - $500",
  },
  {
    name: "Braces",
    image: "https://via.placeholder.com/100",
    steps: ["Consultation", "Impressions & X-rays", "Brackets and wire placement"],
    recovery: "Adjustments every 4-6 weeks, minor soreness initially.",
    price: "$3000 - $7000",
  },
];

const TreatmentdetailsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [treatments, setTreatments] = useState(treatmentsData);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [treatmentFormOpen, setTreatmentFormOpen] = useState(false);
  const [otpPopupOpen, setOtpPopupOpen] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newTreatment, setNewTreatment] = useState({
    name: "",
    image: "",
    steps: "",
    recovery: "",
    price: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const filteredTreatments = searchTerm
    ? treatments.filter((treatment) =>
        treatment.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : treatments;

  const handleAdminLogin = () => {
    if (username === "TeleDentX" && password === "TeleDentX@16") {
      setAdminLoginOpen(false);
      setTreatmentFormOpen(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleAddTreatment = () => {
    const stepsArray = newTreatment.steps.split(",").map(step => step.trim());
    const newTreatmentData = { ...newTreatment, steps: stepsArray };
    setTreatments([...treatments, newTreatmentData]);
    setTreatmentFormOpen(false);
    setNewTreatment({
      name: "",
      image: "",
      steps: "",
      recovery: "",
      price: "",
    });
  };

  const sendOtp = () => {
    const otp = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp}`);
  };

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

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      navigate('/user-dashboard/book-appointment');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">TeledentX</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaTooth className="text-2xl" />
          </button>
        </div>
        <div className={`md:flex gap-4 ${menuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="hover:underline">Home</a>
          <button className="hover:underline" onClick={() => setAdminLoginOpen(true)}>Add Treatment</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Treatment Details</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a treatment..."
            className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredTreatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedTreatment(treatment)}
            >
              <img src={treatment.image} alt={treatment.name} className="w-30 h-30 rounded-full mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-center">{treatment.name}</h3>
              <p className="text-lg font-bold">{treatment.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Treatment Details */}
      {selectedTreatment && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => setSelectedTreatment(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedTreatment.name}</h2>
            <p className="font-semibold">Steps:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
              {selectedTreatment.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
            <p className="italic text-sm text-gray-500">Recovery Time: {selectedTreatment.recovery}</p>
            <button
              className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={() => setOtpPopupOpen(true)}
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}

      {/* Admin Login Popup */}
      {adminLoginOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => setAdminLoginOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded-lg mb-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={handleAdminLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* Treatment Form Popup */}
      {treatmentFormOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => setTreatmentFormOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Add Treatment</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-lg mb-3"
              value={newTreatment.name}
              onChange={(e) => setNewTreatment({ ...newTreatment, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-2 border rounded-lg mb-3"
              value={newTreatment.image}
              onChange={(e) => setNewTreatment({ ...newTreatment, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Steps (comma separated)"
              className="w-full p-2 border rounded-lg mb-3"
              value={newTreatment.steps}
              onChange={(e) => setNewTreatment({ ...newTreatment, steps: e.target.value })}
            />
            <input
              type="text"
              placeholder="Recovery Time"
              className="w-full p-2 border rounded-lg mb-3"
              value={newTreatment.recovery}
              onChange={(e) => setNewTreatment({ ...newTreatment, recovery: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              className="w-full p-2 border rounded-lg mb-3"
              value={newTreatment.price}
              onChange={(e) => setNewTreatment({ ...newTreatment, price: e.target.value })}
            />
            <button
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={handleAddTreatment}
            >
              Add Treatment
            </button>
          </div>
        </div>
      )}

      {/* OTP Verification Popup */}
      {otpPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => setOtpPopupOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Verify Mobile Number</h2>
            <input
              type="text"
              placeholder="Mobile No."
              className="w-full p-2 border rounded-lg mb-3"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-3"
              onClick={sendOtp}
            >
              Send OTP
            </button>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentdetailsPage;
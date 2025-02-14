import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TreatmentdetailsPage from './component/TreatmentdetailsPage';
import Appointmentbooking from './component/Appointmentbooking';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<TreatmentdetailsPage />} />
        <Route path="/user-dashboard/book-appointment" element={<Appointmentbooking />} />
        <Route path="/admin-dashboard/book-appointment" element={<Appointmentbooking />} />
      </Routes>
    </Router>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TreatmentdetailsPage from './component/TreatmentdetailsPage';
import Appointmentbooking from './component/Appointmentbooking';
import AdminDashboard from './component/adminDashboard';
import BillingPage from './component/BillingPage';
import UserDashboard from './component/UserDashboard';
import OrderMedicine from './component/OrderMadicine';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<TreatmentdetailsPage />} />
        <Route path="/user-dashboard/book-appointment" element={<Appointmentbooking />} />
        <Route path="/admin-dashboard/book-appointment" element={<Appointmentbooking />} />
        <Route path="/admin-dashboard/billing" element={<BillingPage />} />
        
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      <Route path="/user-dashboard/order-medicine" element={<OrderMedicine />} />
       
      <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
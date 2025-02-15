import React from 'react';
import { NavLink } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-4">
          <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
          <li><NavLink to="/treatments" className="hover:underline">Treatments</NavLink></li>
          <li><NavLink to="/user-dashboard/book-appointment" className="hover:underline">Book Appointment</NavLink></li>
          <li><NavLink to="/user-dashboard" className="hover:underline">User Dashboard</NavLink></li>
        </ul>
      </nav>
      <div className="p-6">
        <section id="overview" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Pending Payments</h3>
              <p className="text-2xl font-bold">$150</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Messages</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </section>
        <section id="quick-actions" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/user-dashboard/book-appointment" className="text-blue-600 hover:underline">
                Book Appointment
              </NavLink>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/user-dashboard/view-payments" className="text-blue-600 hover:underline">
                View Payments
              </NavLink>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/user-dashboard/messages" className="text-blue-600 hover:underline">
                View Messages
              </NavLink>
            </div>
          </div>
        </section>
        <section id="notifications" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc pl-5">
              <li>Your appointment with Dr. Smith is confirmed for tomorrow at 10 AM.</li>
              <li>You have a pending payment of $50 for your last visit.</li>
              <li>New message from Dr. Johnson regarding your treatment plan.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-4">
          <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
          <li><NavLink to="/manage-appointments" className="hover:underline">Manage Appointments</NavLink></li>
          <li><NavLink to="/manage-patients" className="hover:underline">Manage Patients</NavLink></li>
          <li><NavLink to="/logs-management" className="hover:underline">Logs Management</NavLink></li>
          <li><NavLink to="/admin-settings" className="hover:underline">Admin Settings</NavLink></li>
        </ul>
      </nav>
      <div className="p-6">
        <section id="overview" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Total Appointments</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Total Patients</h3>
              <p className="text-2xl font-bold">80</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Total Treatments</h3>
              <p className="text-2xl font-bold">50</p>
            </div>
          </div>
        </section>
        <section id="quick-actions" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/manage-appointments" className="text-blue-600 hover:underline">
                Manage Appointments
              </NavLink>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/manage-patients" className="text-blue-600 hover:underline">
                Manage Patients
              </NavLink>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/logs-management" className="text-blue-600 hover:underline">
                Logs Management
              </NavLink>
            </div>
          </div>
        </section>
        <section id="notifications" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc pl-5">
              <li>New appointment booked by John Doe.</li>
              <li>Patient Jane Smith updated her contact information.</li>
              <li>System maintenance scheduled for tomorrow.</li>
            </ul>
          </div>
        </section>
        <section id="reports" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/reports/appointments" className="text-blue-600 hover:underline">
                Appointment Reports
              </NavLink>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/reports/patients" className="text-blue-600 hover:underline">
                Patient Reports
              </NavLink>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <NavLink to="/reports/treatments" className="text-blue-600 hover:underline">
                Treatment Reports
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
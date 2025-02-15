import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const medicinesData = [
  { name: 'Paracetamol', price: 10 },
  { name: 'Ibuprofen', price: 15 },
  { name: 'Amoxicillin', price: 20 },
  { name: 'Ciprofloxacin', price: 25 },
  { name: 'Metformin', price: 30 },
  { name: 'Amlodipine', price: 35 },
  { name: 'Omeprazole', price: 40 },
  { name: 'Simvastatin', price: 45 },
  { name: 'Lisinopril', price: 50 },
  { name: 'Levothyroxine', price: 55 },
];

const OrderMedicine = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = (medicine) => {
    setOrder([...order, medicine]);
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
  };

  const totalAmount = order.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-4">
          <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
          <li><NavLink to="/user-dashboard/book-appointment" className="hover:underline">Book Appointment</NavLink></li>
          <li><NavLink to="/order-medicine" className="hover:underline">Order Medicine</NavLink></li>
        </ul>
      </nav>
      <div className="p-6 flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Medicines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {medicinesData.map((medicine, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{medicine.name}</h3>
                <p className="text-lg font-bold">${medicine.price}</p>
                <button
                  className="mt-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                  onClick={() => addToOrder(medicine)}
                >
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc pl-5 mb-4">
              {order.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 mt-4"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMedicine;
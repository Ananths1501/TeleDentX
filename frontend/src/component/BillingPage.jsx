import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BillingPage = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItem = () => {
    if (itemName && itemPrice) {
      setItems([...items, { name: itemName, price: parseFloat(itemPrice) }]);
      setItemName('');
      setItemPrice('');
    }
  };

  const downloadBill = () => {
    const billContent = items.map(item => `${item.name}: $${item.price.toFixed(2)}`).join('\n');
    const blob = new Blob([billContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'bill.txt';
    link.click();
  };

  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-4">
          <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
          <li><NavLink to="/treatments" className="hover:underline">Treatments</NavLink></li>
          <li><NavLink to="/user-dashboard/book-appointment" className="hover:underline">Book Appointment</NavLink></li>
          <li><NavLink to="/admin-dashboard" className="hover:underline">Admin Dashboard</NavLink></li>
          <li><NavLink to="/admin-dashboard/billing" className="hover:underline">Billing</NavLink></li>
        </ul>
      </nav>
      <div className="p-6 flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Add Items to Bill</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Item Name"
              className="w-full p-2 border rounded mb-2"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Item Price"
              className="w-full p-2 border rounded mb-2"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={addItem}
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Bill</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc pl-5 mb-4">
              {items.map((item, index) => (
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
              onClick={downloadBill}
            >
              Download Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
import React, { useState } from "react";

const SlotBooking = () => {
  const workers = [
    { id: 1, name: "John", slots: ["10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM"] },
    { id: 2, name: "Jane", slots: ["12:00 PM - 12:30 PM", "1:00 PM - 1:30 PM"] },
  ];

  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const sendConfirmationEmail = (customerName, workerName, slot) => {
    emailjs.send('your_service_id', 'your_template_id', {
      customer_name: customerName,
      worker_name: workerName,
      slot: slot,
    }, 'your_user_id')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };

  const handleBooking = (worker, slot) => {
    setLoading(true); 
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const existingBooking = bookings.find(
      (booking) => booking.workerName === worker.name && booking.slot === slot
    );

    if (existingBooking) {
      alert("This slot is already booked. Please choose another one.");
      setLoading(false);
      return;
    }

    const customerName = prompt("Enter your name:");
    if (customerName) {
      const booking = {
        workerName: worker.name,
        slot: slot,
        customerName: customerName,
      };
      bookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(bookings));
      sendConfirmationEmail(customerName, worker.name, slot);
      setConfirmed(true);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Select Your Slot
        </h2>
        {confirmed ? (
          <div className="text-center text-lg text-green-500">
            Thank you for confirming your booking!
          </div>
        ) : (
          <div className="space-y-8">
            {workers.map((worker) => (
              <div key={worker.id} className="border p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{worker.name}</h3>
                <div className="space-y-2">
                  {worker.slots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleBooking(worker, slot)}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotBooking;

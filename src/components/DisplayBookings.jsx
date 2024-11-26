import React, { useState } from "react";


const DisplayBookings = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <div>
      <h2>All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index}>
            <p>Worker: {booking.workerName}</p>
            <p>Slot: {booking.slot}</p>
            <p>Customer: {booking.customerName}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayBookings;

import React from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import QueryForm from "./QueryForm";
import SlotBooking from "./SlotBooking";

function QuerySlots() {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // To programmatically navigate

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate("/"); // Navigate to the home route
  };

  return (
    <div className="p-4">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="bg-gray-500 text-white px-6 py-2 rounded-lg mb-6 hover:bg-gray-600 transition-all duration-300 ease-in-out"
      >
        Back to Home
      </button>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-8 mb-4">
        <Link
          to="/query-slots/query"
          className={`${
            location.pathname === "/query-slots/query" ? "bg-blue-500 text-white" : "text-blue-500"
          } p-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
        >
          Query
        </Link>
        <Link
          to="/query-slots/slots"
          className={`${
            location.pathname === "/query-slots/slots" ? "bg-blue-500 text-white" : "text-blue-500"
          } p-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
        >
          Slots
        </Link>
      </div>

      {/* Route Display */}
      <div className="mt-4">
        <Routes>
          <Route path="query" element={<QueryForm />} />
          <Route path="slots" element={<SlotBooking />} />
        </Routes>
      </div>
    </div>
  );
}

export default QuerySlots;

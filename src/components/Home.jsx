import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import for navigation
import Carousel from "./Carousel";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if JWT exists in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove JWT from localStorage
    setIsAuthenticated(false);
    navigate("/"); // Redirect to homepage or login page
  };

  const handleInSalonClick = () => {
    if (!isAuthenticated) {
      alert("Please log in to access IN Salon");
      navigate("/login"); // Redirect to login page if not authenticated
    } else {
      navigate("/query-slots"); // Navigate to query-slots page if authenticated
    }
  };

  return (
    <>
      <Carousel />
      <div className="flex flex-col items-center  min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold pt-10">Welcome to the Application</h1>
          {isAuthenticated ? (
            <div>
              <p className="text-xl">You are logged in!</p>
              <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                  Signup
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* IN Salon Button */}
        <button
          onClick={handleInSalonClick}
          className="mt-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-bold py-4 px-12 text-xl rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse"
        >
          IN Salon
        </button>
      </div>
    </>
  );
}

export default Home;

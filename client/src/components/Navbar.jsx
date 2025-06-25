import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/jobs" className="hover:underline">Jobs</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/login" className="hover:underline">Login</Link>
    </div>
  );
};

export default Navbar;
